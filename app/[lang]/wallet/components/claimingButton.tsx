import { Lang } from "@/types/types";
import React, { useEffect, useState } from "react";
import {
  Web3Button,
  useAddress,
  useContract,
  useContractWrite,
  useContractRead,
} from "@thirdweb-dev/react";
import { Address } from "viem";
import { trotelCoinStakingV1 } from "@/data/web3/addresses";
import trotelCoinStakingV1ABI from "@/abi/trotelCoinStakingV1";
import Success from "@/app/[lang]/components/success";
import Fail from "@/app/[lang]/components/fail";
import "animate.css";

const ClaimingButton = ({ lang }: { lang: Lang }) => {
  const [claimMessage, setClaimMessage] = useState<boolean>(false);
  const [noStakedMessage, setNoStakedMessage] = useState<boolean>(false);
  const [timeNotFinishedMessage, setTimeNotFinishedMessage] =
    useState<boolean>(false);
  const [stakedTrotelCoins, setStakedTrotelCoins] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(0);

  const address = useAddress();

  const { contract } = useContract(trotelCoinStakingV1, trotelCoinStakingV1ABI);

  const { mutateAsync, isSuccess, isLoading } = useContractWrite(
    contract,
    "unstake"
  );

  const { data: getUserStakingData } = useContractRead(
    contract,
    "getUserStakingDetails",
    [address as Address]
  );

  const { data: getStakingData } = useContractRead(contract, "stakings", [
    address as Address,
  ]);

  useEffect(() => {
    if (getUserStakingData) {
      setTimeLeft(getUserStakingData[1].toString());
    }
  }, [getUserStakingData]);

  useEffect(() => {
    if (getStakingData) {
      setStakedTrotelCoins(getStakingData[0].toString());
    }
  }, [getStakingData]);

  const claim = () => {
    if (!stakedTrotelCoins || stakedTrotelCoins <= 0) {
      setNoStakedMessage(true);
      return;
    }

    if (!timeLeft || timeLeft > 0) {
      setTimeNotFinishedMessage(true);
      return;
    }

    mutateAsync({ args: [] });
  };

  useEffect(() => {
    if (isSuccess) {
      setClaimMessage(true);
    }
  }, [isSuccess]);

  return (
    <>
      <Web3Button
        contractAddress={trotelCoinStakingV1}
        action={() => claim()}
        className="!bg-blue-500 !hover:bg-blue-400 !dark:bg-blue-300 !dark:hover:bg-blue-400 !hover:border-gray-900/50 !dark:hover:border-gray-100/50 !focus:border-blue-500 !dark:focus:border-blue-300 !text-sm !px-6 !py-2 !text-gray-100 !dark:text-gray-900 !rounded-lg !font-semibold"
        style={{}}
      >
        {isLoading ? (
          <span className="animate__animated animate__slower animate__flash animate__infinite">
            {lang === "en" ? "Loading..." : "Chargement..."}
          </span>
        ) : (
          <>{lang === "en" ? "Claim" : "Réclamer"}</>
        )}
      </Web3Button>
      <Success
        show={claimMessage}
        lang={lang}
        onClose={() => setClaimMessage(false)}
        title={lang === "en" ? "Success" : "Succès"}
        message={
          lang === "en"
            ? "You have claimed your rewards"
            : "Tu as réclamé tes récompenses"
        }
      />
      <Fail
        show={timeNotFinishedMessage}
        lang={lang}
        onClose={() => setTimeNotFinishedMessage(false)}
        title={lang === "en" ? "Error" : "Erreur"}
        message={
          lang === "en"
            ? "You can't claim your rewards yet"
            : "Tu ne peux pas encore réclamer tes récompenses"
        }
      />
      <Fail
        show={noStakedMessage}
        lang={lang}
        onClose={() => setNoStakedMessage(false)}
        title={lang === "en" ? "Error" : "Erreur"}
        message={
          lang === "en"
            ? "You have no staked TrotelCoins"
            : "Tu n'as pas de TrotelCoins en staking"
        }
      />
    </>
  );
};

export default ClaimingButton;
