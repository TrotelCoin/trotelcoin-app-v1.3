"use client";

import React, { useEffect, useState } from "react";
import { Lang } from "@/types/types";
import {
  useAccount,
  useSendTransaction,
  useBalance,
  useBlockNumber,
} from "wagmi";
import Wallet from "@/app/[lang]/components/header/wallet";
import { polygon } from "viem/chains";
import { Address } from "viem";
import { trotelCoinAddress } from "@/data/web3/addresses";
import { PriceResponse, QuoteResponse } from "@/pages/api/zerox/types";
import BlueButton from "@/app/[lang]/components/blueButton";
import Fail from "@/app/[lang]/components/modals/fail";
import { trotelCoinDAOAddress } from "@/data/web3/addresses";

export const maticAddress: Address =
  "0x0000000000000000000000000000000000001010";

const AFFILIATE_FEE = 0.01;
const FEE_RECIPIENT = trotelCoinDAOAddress;

const Swap = ({ lang }: { lang: Lang }) => {
  const [fromPrice, setFromPrice] = useState<number | null>(null);
  const [fromAmount, setFromAmount] = useState<number | undefined>(undefined);
  const [fromTokenAddress, setFromTokenAddress] =
    useState<Address>(maticAddress);
  const [toPrice, setToPrice] = useState<number | null>(null);
  const [toTokenAddress, setToTokenAddress] =
    useState<Address>(trotelCoinAddress);
  const [quote, setQuote] = useState<QuoteResponse | null>(null);
  const [disabled, setDisabled] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<boolean>(false);
  const [fromBalance, setFromBalance] = useState<number | null>(null);
  const [toBalance, setToBalance] = useState<number | null>(null);

  const { address: userAddress } = useAccount();

  const { data: blockNumber } = useBlockNumber({
    watch: true,
    chainId: polygon.id,
  });

  const { data: fromBalanceData, refetch: refetchFrom } = useBalance({
    address: userAddress,
    token: fromTokenAddress,
    chainId: polygon.id,
  });

  const { data: toBalanceData, refetch: refetchTo } = useBalance({
    address: userAddress,
    token: toTokenAddress,
    chainId: polygon.id,
  });

  useEffect(() => {
    refetchFrom();
    refetchTo();
  }, [blockNumber, userAddress]);

  useEffect(() => {
    if (fromBalanceData) {
      const balance = Number(fromBalanceData?.formatted);
      setFromBalance(balance);
    }

    if (toBalanceData) {
      const balance = Number(toBalanceData?.formatted);
      setToBalance(balance);
    }
  }, [fromBalanceData, toBalanceData]);

  const { sendTransactionAsync } = useSendTransaction();

  const tokenAddressToName = (tokenAddress: Address) => {
    switch (tokenAddress) {
      case trotelCoinAddress:
        return "TROTEL";
      case maticAddress:
        return "MATIC";
      default:
        return "Unknown";
    }
  };

  useEffect(() => {
    if (
      fromAmount &&
      userAddress &&
      toBalance &&
      fromAmount <= (fromBalance as number)
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [fromAmount, userAddress, toBalance, fromBalance]);

  return (
    <>
      <div className="mt-8 w-full flex flex-col flex-wrap bg-gray-100 border backdrop-blur-xl divide-y divide-gray-900/10 dark:divide-gray-100/10 border-gray-900/10 dark:border-gray-100/10 rounded-xl py-4 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
        <div className="flex items-center justify-between px-4 pb-4">
          <div className="flex flex-col">
            <span className="font-bold text-xl">
              {lang === "en" ? <>Swap</> : <>Échanger</>}
            </span>
            <div className="flex items-center gap-1">
              <div
                className={`w-3 h-3 rounded-full ${
                  userAddress ? "bg-green-500" : "bg-gray-500"
                }`}
              />
              {userAddress ? (
                <span className="text-gray-700 dark:text-gray-300 text-sm">
                  {lang === "en" ? "Connected" : "Connecté"}
                </span>
              ) : (
                <span className="text-gray-700 dark:text-gray-300 text-sm">
                  {lang === "en" ? "Not connected" : "Non connecté"}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="px-4 py-4">
          <div className="flex flex-col justify-center gap-2">
            <div className="flex items-center justify-between">
              <div className="flex flex-col justify-center">
                <span className="text-gray-700 dark:text-gray-300 text-sm">
                  {lang === "en" ? "Pay with" : "Acheter avec"}
                </span>
              </div>
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {lang === "en" ? "Balance:" : "Solde:"}{" "}
                {fromBalance
                  ? Number(fromBalance?.toFixed(0)).toLocaleString("en-US")
                  : "0"}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="number"
                className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none bg-transparent text-4xl font-semibold text-gray-900 dark:text-gray-100 w-full p-2 border-transparent rounded-xl focus:outline-none focus:ring-transparent focus:border-transparent"
                value={(fromAmount as number) < 0 ? 0 : fromAmount}
                onChange={(e) => setFromAmount(parseFloat(e.target.value))}
                placeholder={lang === "en" ? "Amount" : "Montant"}
              />
              <div className="flex flex-col justify-center items-end">
                <span className="font-semibold text-gray-900 dark:text-gray-100">
                  {tokenAddressToName(fromTokenAddress)}
                </span>
                <span className="text-xs">
                  $
                  {fromPrice
                    ? Number(fromPrice?.toFixed(2)).toLocaleString("en-US")
                    : "0"}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 py-4">
          <div className="flex flex-col justify-center gap-2">
            <div className="flex items-center justify-between">
              <div className="flex flex-col justify-center">
                <span className="text-gray-700 dark:text-gray-300 text-sm">
                  {lang === "en" ? "You receive" : "Vous recevez"}
                </span>
              </div>
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {lang === "en" ? "Balance:" : "Solde:"}{" "}
                {toBalance
                  ? Number(toBalance?.toFixed(0)).toLocaleString("en-US")
                  : "0"}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="number"
                className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none bg-transparent text-4xl font-semibold text-gray-900 dark:text-gray-100 w-full p-2 border-transparent rounded-xl focus:outline-none focus:ring-transparent focus:border-transparent cursor-not-allowed"
                onWheel={(e) => e.preventDefault()}
                value={quote?.buyAmount ? quote?.buyAmount.toString() : "0"}
                disabled={true}
              />
              <div className="flex flex-col justify-center items-end">
                <span className="font-semibold text-gray-900 dark:text-gray-100">
                  {tokenAddressToName(toTokenAddress)}
                </span>
                <span className="text-xs">
                  $
                  {toPrice
                    ? Number(toPrice?.toFixed(2)).toLocaleString("en-US")
                    : "0"}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 pt-4">
          {userAddress ? (
            <BlueButton
              isFull={true}
              disabled={disabled}
              lang={lang}
              text={lang === "en" ? "Swap" : "Échanger"}
              onClick={() =>
                sendTransactionAsync({
                  to: quote?.to as Address,
                  data: quote?.data,
                })
              }
            />
          ) : (
            <Wallet lang={lang} isFull={true} isCentered={true} />
          )}
        </div>
      </div>
      <Fail
        show={errorMessage}
        onClose={() => setErrorMessage(false)}
        lang={lang}
        title={lang === "en" ? "Error" : "Erreur"}
        message={
          lang === "en" ? "An error occurred" : "Une erreur s'est produite"
        }
      />
    </>
  );
};

export default Swap;
