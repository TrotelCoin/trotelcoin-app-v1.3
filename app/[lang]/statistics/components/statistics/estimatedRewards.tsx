import type { Lang } from "@/types/language/lang";
import React from "react";
import { fetcher, refreshIntervalTime } from "@/utils/axios/fetcher";
import useSWR from "swr";
import { Skeleton } from "@radix-ui/themes";
import CountUp from "react-countup";

const EstimatedRewards = ({ lang }: { lang: Lang }) => {
  const { data: remainingRewards } = useSWR("/api/rewards/remaining", fetcher, {
    revalidateOnMount: true,
    revalidateIfStale: true,
    revalidateOnReconnect: true,
    refreshInterval: refreshIntervalTime,
  });

  return (
    <>
      <div
        className={`bg-white flex flex-col h-full items-center justify-center border backdrop-blur-xl border-gray-900/10 dark:border-gray-100/10 text-center rounded-xl px-2 py-10 dark:bg-gray-800 text-gray-900 dark:text-gray-100`}
      >
        <span className="font-semibold text-2xl md:text-4xl">
          {remainingRewards ? (
            <>
              <CountUp start={0} end={Math.floor(remainingRewards / 10)} />{" "}
              {"< 🧠 <"}
              <CountUp start={0} end={Math.floor(remainingRewards / 4)} />
            </>
          ) : (
            <span>
              <Skeleton>{"0 < 🧠 < 0"}</Skeleton>
            </span>
          )}
        </span>

        <span>{lang === "en" ? "Rewards" : "Récompenses"}</span>
      </div>
    </>
  );
};

export default EstimatedRewards;
