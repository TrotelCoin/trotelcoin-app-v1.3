"use client";

import type { Lang } from "@/types/lang";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher, refreshIntervalTime } from "@/lib/axios/fetcher";
import { loadingFlashClass } from "@/lib/tailwind/loading";
import CountUp from "react-countup";
import Evolution from "@/app/[lang]/statistics/components/statistics/components/evolution";
import { updateStatistics, updateEvolution } from "@/lib/statistics/evolution";
import { StatisticsType } from "@/types/statistics/statistics";

const RemainingRewards = ({
  lang,
  statsMap,
}: {
  lang: Lang;
  statsMap: Map<StatisticsType, number>;
}) => {
  const [evolution, setEvolution] = useState<number | null>(null);

  const { data: remainingRewards } = useSWR(
    "/api/database/getRemainingRewards",
    fetcher,
    {
      revalidateOnMount: true,
      revalidateIfStale: true,
      revalidateOnReconnect: true,
      refreshInterval: refreshIntervalTime,
    }
  );

  useEffect(() => {
    if (
      remainingRewards &&
      statsMap instanceof Map &&
      statsMap.has("distributed_trotelcoins")
    ) {
      updateStatistics("remaining_rewards", remainingRewards as number);
      updateEvolution(
        remainingRewards as number,
        "remainingReward",
        setEvolution,
        statsMap.get("remaining_rewards") as number
      );
    }
  }, [remainingRewards, statsMap]);

  return (
    <>
      <div
        className={`bg-gray-50 flex flex-col border backdrop-blur-xl border-gray-900/10 dark:border-gray-100/10 text-center rounded-xl px-2 py-10 dark:bg-gray-800 text-gray-900 dark:text-gray-100`}
      >
        <Evolution evolution={evolution as number} percentage={true} />
        <span className="font-semibold text-2xl md:text-4xl">
          {remainingRewards ? (
            <>
              <CountUp start={0} end={Math.floor(remainingRewards)} />{" "}
              <span className="hidden md:inline">⏳</span>
            </>
          ) : (
            <span className={`${loadingFlashClass}`}>
              0 <span className="hidden md:inline">⏳</span>
            </span>
          )}
        </span>

        <span>{lang === "en" ? "Current cycle" : "Cycle en cours"}</span>
      </div>
    </>
  );
};

export default RemainingRewards;
