import React, { useEffect, useState } from "react";
import { tokenAddressToName } from "@/lib/tokenAddressToName";
import type { Lang } from "@/types/lang";
import type { Address } from "viem";
import { loadingFlashClass } from "@/lib/tailwind/loading";
import { Token } from "@/types/web3/token";

const From = ({
  lang,
  fromBalance,
  fromAmount,
  setFromAmount,
  fromToken,
  fromPrice,
  isLoading,
  fromChainId,
  userAddress,
}: {
  lang: Lang;
  fromBalance: number;
  fromAmount: number;
  setFromAmount: React.Dispatch<React.SetStateAction<number>>;
  fromToken: Token;
  fromPrice: number;
  isLoading: boolean;
  fromChainId: number;
  userAddress: Address;
}) => {
  const [isMax, setIsMax] = useState<boolean>(false);

  const setMax = () => {
    setFromAmount(fromBalance as number);
  };

  useEffect(() => {
    if (fromAmount === fromBalance) {
      setIsMax(true);
    } else {
      setIsMax(false);
    }
  }, [fromAmount, fromBalance]);

  return (
    <>
      <div className="flex flex-col justify-center gap-2">
        <div className="flex items-center justify-between">
          <div className="flex flex-col justify-center">
            {}
            <span className="text-gray-700 dark:text-gray-300 text-sm">
              {lang === "en" ? "You pay" : "Vous payez"}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-sm text-gray-700 dark:text-gray-300">
              {lang === "en" ? "Balance:" : "Solde:"}{" "}
              {fromBalance
                ? Number(fromBalance?.toFixed(2)).toLocaleString("en-US")
                : "0"}
            </span>
            {!isMax && (
              <button
                onClick={() => setMax()}
                className="text-sm text-blue-500 dark:text-blue-500 hover:text-blue-400 dark:hover:text-blue-400 cursor-pointer"
              >
                {lang === "en" ? "Max" : "Max"}
              </button>
            )}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <input
            type="number"
            className={`[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none bg-transparent text-4xl font-semibold text-gray-900 dark:text-gray-100 w-full px-2 py-0 border-transparent rounded-xl focus:outline-none focus:ring-transparent focus:border-transparent ${
              !userAddress && "cursor-not-allowed"
            }`}
            value={fromAmount < 0 ? 0 : fromAmount}
            onChange={(e) => setFromAmount(parseFloat(e.target.value))}
            placeholder={lang === "en" ? "Amount" : "Montant"}
            disabled={!userAddress}
            onWheel={(e) => (e.target as HTMLInputElement).blur()}
          />
          <div className="flex flex-col justify-center items-end">
            <span className="font-semibold text-gray-900 dark:text-gray-100">
              {fromToken.symbol}
            </span>

            <span className={`text-xs ${isLoading && loadingFlashClass}`}>
              $
              {fromPrice && fromAmount
                ? Number((fromPrice * fromAmount).toFixed(2)).toLocaleString(
                    "en-US"
                  )
                : "0"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default From;
