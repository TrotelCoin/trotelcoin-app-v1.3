import { DictType, Lang } from "@/types/types";
import React from "react";
import TrotelCoinsDistributed from "@/app/[lang]/statistics/components/statistics/trotelCoinsDistributed";
import TrotelCoinsPending from "@/app/[lang]/statistics/components/statistics/trotelCoinsPending";
import NumberOfQuizzesAnswered from "@/app/[lang]/statistics/components/statistics/numberOfQuizzesAnswered";
import RemainingRewards from "@/app/[lang]/statistics/components/statistics/remainingRewards";
import EstimatedRewards from "@/app/[lang]/statistics/components/statistics/estimatedRewards";
import MaxStreak from "@/app/[lang]/statistics/components/statistics/maxStreak";
import NumberOfLearners from "@/app/[lang]/statistics/components/statistics/numberOfLearners";
import Expert from "@/app/[lang]/statistics/components/statistics/expert";
import Intermediate from "@/app/[lang]/statistics/components/statistics/intermediate";
import Early from "@/app/[lang]/statistics/components/statistics/early";
import Tilt from "react-parallax-tilt";

const TheAlgorithm = ({ dict, lang }: { dict: DictType; lang: Lang }) => {
  return (
    <>
      <div>
        <h2 className="text-gray-900 dark:text-gray-100 font-semibold text-xl">
          {lang === "en" ? "Statistics" : "Statistiques"}
        </h2>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 mx-auto">
          <Tilt
            glareEnable={true}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            glareMaxOpacity={0.15}
            perspective={800}
          >
            <TrotelCoinsDistributed dict={dict} />
          </Tilt>

          <Tilt
            glareEnable={true}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            glareMaxOpacity={0.15}
            perspective={800}
          >
            <TrotelCoinsPending dict={dict} />
          </Tilt>

          <Tilt
            glareEnable={true}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            glareMaxOpacity={0.15}
            perspective={800}
          >
            <NumberOfQuizzesAnswered dict={dict} />
          </Tilt>

          <Tilt
            glareEnable={true}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            glareMaxOpacity={0.15}
            perspective={800}
          >
            <RemainingRewards dict={dict} />
          </Tilt>

          <Tilt
            glareEnable={true}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            glareMaxOpacity={0.15}
            perspective={800}
          >
            <EstimatedRewards dict={dict} />
          </Tilt>

          <Tilt
            glareEnable={true}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            glareMaxOpacity={0.15}
            perspective={800}
          >
            <MaxStreak dict={dict} />
          </Tilt>

          <Tilt
            glareEnable={true}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            glareMaxOpacity={0.15}
            perspective={800}
          >
            <NumberOfLearners dict={dict} />
          </Tilt>

          <Tilt
            glareEnable={true}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            glareMaxOpacity={0.15}
            perspective={800}
          >
            <Early dict={dict} lang={lang} />
          </Tilt>

          <Tilt
            glareEnable={true}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            glareMaxOpacity={0.15}
            perspective={800}
          >
            <Intermediate dict={dict} lang={lang} />
          </Tilt>

          <Tilt
            glareEnable={true}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            glareMaxOpacity={0.15}
            perspective={800}
          >
            <Expert dict={dict} lang={lang} />
          </Tilt>
        </div>
      </div>
    </>
  );
};

export default TheAlgorithm;
