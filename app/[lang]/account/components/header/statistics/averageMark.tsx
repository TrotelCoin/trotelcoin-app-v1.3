import UserContext from "@/app/[lang]/contexts/userContext";
import { fetcher, refreshIntervalTime } from "@/lib/axios/fetcher";
import { loadingFlashClass } from "@/lib/tailwind/loading";
import type { Lang } from "@/types/lang";
import React, { useContext } from "react";
import CountUp from "react-countup";
import useSWR from "swr";
import { useAccount } from "wagmi";

const AverageMark = ({ lang }: { lang: Lang }) => {
  const { address } = useAccount();
  const { averageMark } = useContext(UserContext);

  return (
    <>
      <div
        className={`bg-gray-50 h-full flex items-center justify-center border backdrop-blur-xl border-gray-900/10 dark:border-gray-100/10 text-center rounded-xl px-2 py-10 dark:bg-gray-800 text-gray-900 dark:text-gray-100`}
      >
        <div className="flex flex-col mx-auto text-center">
          <span className="text-2xl md:text-4xl">
            <>
              <span className="font-semibold">
                {averageMark ? (
                  <span>
                    <CountUp start={0} end={averageMark} suffix="/20 🎓" />
                  </span>
                ) : (
                  <span>
                    <span className={`${loadingFlashClass}`}>0/20</span> 🎓
                  </span>
                )}
              </span>
            </>
          </span>
          <span>{lang === "en" ? "Average mark" : "Note moyenne"}</span>
        </div>
      </div>
    </>
  );
};

export default AverageMark;
