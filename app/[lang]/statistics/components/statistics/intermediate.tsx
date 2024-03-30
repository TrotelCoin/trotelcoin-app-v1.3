"use client";

import trotelCoinIntermediateABI from "@/abi/trotelCoinIntermediate";
import { trotelCoinIntermediateAddress } from "@/data/web3/addresses";
import { updateEvolution } from "@/lib/statistics/evolution";
import { loadingFlashClass } from "@/lib/tailwind/loading";
import type { Lang } from "@/types/lang";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { polygon } from "viem/chains";
import { useReadContract, useBlockNumber } from "wagmi";
import Evolution from "@/app/[lang]/statistics/components/statistics/components/evolution";

const Intermediate = ({ lang }: { lang: Lang }) => {
  const [evolution, setEvolution] = useState<number | null>(null);

  const { data: blockNumber } = useBlockNumber({
    watch: true,
    chainId: polygon.id,
  });

  const { data: intermediate, refetch } = useReadContract({
    chainId: polygon.id,
    address: trotelCoinIntermediateAddress,
    abi: trotelCoinIntermediateABI,
    functionName: "totalSupply",
  });

  useEffect(() => {
    refetch();
  }, [blockNumber]);

  useEffect(() => {
    const intermediateCount = Number(intermediate);
    updateEvolution(intermediateCount, "intermediateCount", setEvolution);
  }, [intermediate]);

  return (
    <>
      <div
        className={`bg-gray-50 flex flex-col border backdrop-blur-xl border-gray-900/10 dark:border-gray-100/10 text-center rounded-xl px-2 py-10 dark:bg-gray-800 text-gray-900 dark:text-gray-100`}
      >
        <Evolution evolution={evolution as number} />
        <span className="font-semibold text-2xl md:text-4xl">
          {intermediate ? (
            <>
              <CountUp start={0} end={Number(intermediate.toString())} />{" "}
              <span className="hidden md:inline">🙈</span>
            </>
          ) : (
            <span className={`${loadingFlashClass}`}>
              0 <span className="hidden md:inline">🙈</span>
            </span>
          )}
        </span>

        <span>{lang === "en" ? "Intermediate" : "Intermédiaire"}</span>
      </div>
    </>
  );
};

export default Intermediate;
