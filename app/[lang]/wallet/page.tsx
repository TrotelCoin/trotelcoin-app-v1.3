"use client";

import React, { useEffect, useState } from "react";
import { Lang } from "@/types/lang";
import Claim from "@/app/[lang]/wallet/components/claim";
import Staking from "@/app/[lang]/wallet/components/staking";
import { useChainId } from "wagmi";
import { polygon } from "viem/chains";
import { useSearchParams } from "next/navigation";
import Buy from "@/app/[lang]/wallet/components/buy";
import Swap from "@/app/[lang]/wallet/components/swap";

type ActiveComponent = "claim" | "staking" | "buy" | "swap";

const Page = ({ params: { lang } }: { params: { lang: Lang } }) => {
  const searchParams = useSearchParams();
  const category = searchParams?.get("category");

  const [component, setComponent] = useState<ActiveComponent>("claim");
  const [chainError, setChainError] = useState<boolean>(false);

  const chainId = useChainId();

  useEffect(() => {
    if (chainId === polygon.id) {
      setChainError(false);
    } else {
      setChainError(true);
    }
  }, [chainId]);

  useEffect(() => {
    if (category) {
      setComponent(category as ActiveComponent);
    } else {
      setComponent("claim");
    }
  }, [category]);

  return (
    <>
      <div className="mx-auto flex justify-center items-center -mt-10">
        <div className="flex flex-wrap items-center text-sm gap-4 text-gray-900 dark:text-gray-100">
          <button
            onClick={() => setComponent("claim")}
            className={`px-4 py-2 rounded-full ${
              component === "claim"
                ? "text-gray-100 dark:text-gray-900 font-semibold bg-gray-800 dark:bg-gray-100"
                : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 bg-gray-200 dark:bg-gray-700"
            }`}
          >
            {lang === "en" ? <>Claim</> : <>Réclamer</>}
          </button>
          <button
            onClick={() => setComponent("buy")}
            className={`px-4 py-2 rounded-full ${
              component === "buy"
                ? "text-gray-100 dark:text-gray-900 font-semibold bg-gray-800 dark:bg-gray-100"
                : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 bg-gray-200 dark:bg-gray-700"
            }`}
          >
            {lang === "en" ? <>Buy</> : <>Acheter</>}
          </button>
          <button
            onClick={() => setComponent("staking")}
            className={`px-4 py-2 rounded-full ${
              component === "staking"
                ? "text-gray-100 dark:text-gray-900 font-semibold bg-gray-800 dark:bg-gray-100"
                : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 bg-gray-200 dark:bg-gray-700"
            }`}
          >
            {lang === "en" ? <>Stake</> : <>Staker</>}
          </button>
          <button
            onClick={() => setComponent("swap")}
            className={`px-4 py-2 rounded-full ${
              component === "swap"
                ? "text-gray-100 dark:text-gray-900 font-semibold bg-gray-800 dark:bg-gray-100"
                : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 bg-gray-200 dark:bg-gray-700"
            }`}
          >
            {lang === "en" ? <>Swap</> : <>Échanger</>}
          </button>
        </div>
      </div>
      {component && (
        <div className="mx-auto max-w-md mt-8">
          {component === "buy" && <Buy lang={lang} />}
          {component === "claim" && (
            <Claim
              lang={lang}
              chainError={chainError}
              setChainError={setChainError}
            />
          )}
          {component === "staking" && (
            <Staking
              lang={lang}
              chainError={chainError}
              setChainError={setChainError}
            />
          )}
          {component === "swap" && <Swap lang={lang} />}
        </div>
      )}
    </>
  );
};

export default Page;
