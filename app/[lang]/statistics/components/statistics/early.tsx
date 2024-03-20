import trotelCoinEarlyABI from "@/abi/trotelCoinEarly";
import { trotelCoinEarlyAddress } from "@/data/web3/addresses";
import { Lang } from "@/types/lang";
import React, { useEffect } from "react";
import { polygon } from "viem/chains";
import { useReadContract, useBlockNumber } from "wagmi";

const Early = ({ lang }: { lang: Lang }) => {
  const { data: blockNumber } = useBlockNumber({
    watch: true,
    chainId: polygon.id,
  });

  const { data: early, refetch } = useReadContract({
    chainId: polygon.id,
    address: trotelCoinEarlyAddress,
    abi: trotelCoinEarlyABI,
    functionName: "totalSupply",
  });

  useEffect(() => {
    refetch();
  }, [blockNumber]);

  return (
    <>
      <div
        className={`bg-gray-100 flex flex-col border backdrop-blur-xl border-gray-900/10 dark:border-gray-100/10 text-center rounded-xl px-2 py-10 dark:bg-gray-800 text-gray-900 dark:text-gray-100`}
      >
        <span className="font-semibold text-2xl md:text-4xl">
          {early ? (
            <>
              {parseFloat(early.toString())}{" "}
              <span className="hidden md:inline">🤫</span>
            </>
          ) : (
            <span className="animate__animated animate__flash animate__slower animate__infinite">
              0 <span className="hidden md:inline">🤫</span>
            </span>
          )}
        </span>

        <span>{lang === "en" ? "Early access" : "Accès anticipé"}</span>
      </div>
    </>
  );
};

export default Early;
