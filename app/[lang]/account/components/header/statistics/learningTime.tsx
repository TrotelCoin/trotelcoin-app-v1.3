import UserContext from "@/contexts/user";
import { Skeleton } from "@radix-ui/themes";
import type { Lang } from "@/types/language/lang";
import React, { useContext } from "react";
import CountUp from "react-countup";

const LearningTime = ({ lang }: { lang: Lang }) => {
  const { learningTime } = useContext(UserContext);

  return (
    <>
      <div
        className={`bg-white h-full flex items-center justify-center border backdrop-blur-xl border-gray-900/10 dark:border-gray-100/10 text-center rounded-xl px-2 py-10 dark:bg-gray-800 text-gray-900 dark:text-gray-100`}
      >
        <div className="flex flex-col mx-auto text-center">
          <span className="text-2xl md:text-4xl">
            <>
              <span className="font-semibold">
                {learningTime ? (
                  <span>
                    <CountUp
                      start={0}
                      end={Math.floor((learningTime * 1e-3) / 60)}
                      suffix="m ⏳"
                    />
                  </span>
                ) : (
                  <span>
                    <Skeleton>
                      <span>0</span>m ⏳
                    </Skeleton>
                  </span>
                )}
              </span>
            </>
          </span>
          <span>
            {lang === "en" ? "Learning time" : "Temps d'apprentissage"}
          </span>
        </div>
      </div>
    </>
  );
};

export default LearningTime;
