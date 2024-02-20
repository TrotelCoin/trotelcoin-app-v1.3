import trotelCoinExpertABI from "@/abi/trotelCoinExpert";
import trotelCoinIntermediateABI from "@/abi/trotelCoinIntermediate";
import {
  trotelCoinIntermediateAddress,
  trotelCoinExpertAddress,
} from "@/data/web3/addresses";
import { DictType } from "@/types/types";
import {
  calculateUserLevelAndTokens,
  calculateProgressPercentage,
  incrementWidth,
} from "@/utils/level";
import { useAddress } from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
import { Address } from "viem";
import { polygon } from "viem/chains";
import { useContractRead } from "wagmi";

interface LevelSectionProps {
  dict: DictType | null;
}

const LevelSection: React.FC<LevelSectionProps> = ({ dict }) => {
  const [width, setWidth] = useState<number>(0);
  const [tokensEarned, setTokensEarned] = useState<number>(0);
  const [totalRewards, setTotalRewards] = useState<number>(0);
  const [totalRewardsPending, setTotalRewardsPending] = useState<number>(0);

  const address = useAddress();

  const { data: intermediate } = useContractRead({
    chainId: polygon.id,
    abi: trotelCoinIntermediateABI,
    address: trotelCoinIntermediateAddress,
    functionName: "balanceOf",
    args: [address],
    account: address as Address,
    enabled: Boolean(address),
    watch: true,
  });
  const { data: expert } = useContractRead({
    chainId: polygon.id,
    abi: trotelCoinExpertABI,
    address: trotelCoinExpertAddress,
    functionName: "balanceOf",
    args: [address],
    account: address as Address,
    enabled: Boolean(address),
    watch: true,
  });

  const intermediateBalance: number = parseFloat(intermediate as string);
  const expertBalance: number = parseFloat(expert as string);

  const isNotPremium = intermediateBalance <= 0 && expertBalance <= 0;

  const {
    userLevel,
    tokensNeededForNextLevel,
    tokensRequiredForCurrentLevel,
    nextLevelIncrease,
  } = calculateUserLevelAndTokens(tokensEarned);
  const progressPercentage = calculateProgressPercentage(
    tokensRequiredForCurrentLevel,
    tokensEarned,
    tokensNeededForNextLevel,
    nextLevelIncrease
  );
  incrementWidth(progressPercentage, setWidth);

  useEffect(() => {
    const fetchRewardsPending = async () => {
      await fetch(`/api/database/totalRewardsPending?wallet=${address}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      })
        .then((response) => response?.json())
        .then((data) => {
          setTotalRewardsPending(data);
        });
    };

    if (address) {
      fetchRewardsPending();

      const interval = setInterval(fetchRewardsPending, 10000);

      return () => clearInterval(interval);
    } else {
      setTotalRewardsPending(0);
    }
  }, [address]);

  useEffect(() => {
    if (totalRewards && totalRewardsPending) {
      setTokensEarned(totalRewards + totalRewardsPending);
    } else if (totalRewards) {
      setTokensEarned(totalRewards);
    } else if (totalRewardsPending) {
      setTokensEarned(totalRewardsPending);
    } else {
      setTokensEarned(0);
    }
  }, [totalRewards, totalRewardsPending, address]);

  return (
    <>
      <h2 className="font-semibold text-gray-900 dark:text-gray-100 text-xl mt-10">
        {typeof dict?.account !== "string" && <>{dict?.account.level}</>}
      </h2>
      <div
        className={`mt-4 bg-gray-50 flex flex-col border backdrop-blur-xl border-gray-900/20 dark:border-gray-100/40 text-center rounded-lg p-10 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
      >
        <div className="flex justify-between">
          <div
            className={`flex gap-1 ${
              isNotPremium && "blur hover:blur-none duration-500"
            }`}
          >
            {isNotPremium && (
              <p>
                {typeof dict?.account !== "string" && (
                  <>{dict?.account.notPremium}</>
                )}
              </p>
            )}
            {!isNotPremium && (
              <>
                <p>
                  {typeof dict?.account !== "string" && (
                    <>{dict?.account.youAreLevel}</>
                  )}
                </p>
                {userLevel ? (
                  <>{userLevel}</>
                ) : (
                  <span className="animate__animated animate__flash animate__slower animate__infinite">
                    0
                  </span>
                )}
              </>
            )}
          </div>
          <p
            className={`hidden md:block ${
              isNotPremium && "blur hover:blur-none duration-500"
            }`}
          >
            {tokensNeededForNextLevel > 0 && !isNotPremium
              ? `${tokensNeededForNextLevel.toFixed(0)} ${
                  typeof dict?.account !== "string" &&
                  dict?.account.trotelCoinsLeft
                }`
              : `${
                  typeof dict?.account !== "string" && dict?.account.notPremium
                }`}
          </p>
        </div>
        <div
          className={`overflow-hidden h-2 text-xs bg-gray-600 mt-2 dark:bg-gray-400 flex rounded-full ${
            isNotPremium && "mt-4"
          }`}
        >
          <div
            style={{
              width: isNotPremium ? "0%" : `${width}%`,
              transition: "width 1s ease-in",
            }}
            className="rounded-full h-2 bg-blue-500 dark:bg-blue-300"
          ></div>
        </div>
      </div>
    </>
  );
};

export default LevelSection;
