import { DictType, Lang } from "@/types/types";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { vocabulary } from "@/data/vocabulary/vocabulary";
import Image from "next/image";
import getRandomVocabulary from "@/utils/vocabulary";

const Vocabulary = ({ lang, dict }: { lang: Lang; dict: DictType }) => {
  const [randomVocabulary, setRandomVocabulary] = useState(
    getRandomVocabulary(vocabulary)
  );

  return (
    <>
      <div className="mt-16">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          style={{ width: "240px", height: "320px" }}
        >
          {randomVocabulary.map((item, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col justify-center items-center rounded-xl bg-gray-100 dark:bg-gray-800 shadow-xl border border-gray-900/10 dark:border-gray-100/10"
            >
              <span className="text-xs font-bold text-gray-900 dark:text-gray-100 top-0 right-0 m-4 absolute">
                {index + 1} / 10
              </span>
              <div className="flex flex-col items-center text-center px-8 py-24 gap-2">
                <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {lang === "en" ? item.en.word : item.fr.word}
                </span>
                <span className="text-xs text-gray-900 dark:text-gray-100">
                  {lang === "en" ? item.en.definition : item.fr.definition}
                </span>
                <Image
                  src="/assets/logo/trotelcoin.png"
                  alt="Logo"
                  width={32}
                  height={32}
                  className="left-0 bottom-0 absolute block dark:hidden"
                />
                <Image
                  src="/assets/logo/trotelcoin-white.png"
                  alt="Logo"
                  width={32}
                  height={32}
                  className="left-0 bottom-0 absolute hidden dark:block"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center items-center mt-16">
          <button
            onClick={() => setRandomVocabulary(getRandomVocabulary(vocabulary))}
            className="text-sm font-semibold rounded-full px-4 py-2 bg-gray-900 dark:bg-white hover:bg-gray-700 dark:hover:bg-gray-300 text-gray-100 dark:text-gray-900"
          >
            {lang === "en" ? "Shuffle" : "Mélanger"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Vocabulary;
