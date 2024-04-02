"use client";

import React, { useEffect, useState } from "react";
import { Lang } from "@/types/lang";
import { useAccount, useBlockNumber, useReadContract } from "wagmi";
import { polygon } from "viem/chains";
import { trotelCoinShopV1 } from "@/data/web3/addresses";
import trotelCoinShopV1ABI from "@/abi/trotelCoinShopV1";
import { readContract } from "@wagmi/core";
import { config } from "@/config/Web3ModalConfig";
import { formatEther } from "viem";
import type {
  InventoryItemType,
  InventoryItemTypeFinal,
} from "@/types/inventory/inventory";
import InventoryItem from "@/app/[lang]/shop/components/inventory/inventoryItem";
import { loadingFlashClass } from "@/lib/tailwind/loading";
import Wallet from "@/app/[lang]/components/header/wallet";

const Inventory = ({ params: { lang } }: { params: { lang: Lang } }) => {
  const [totalItems, setTotalItems] = useState<number | null>(null);
  const [inventories, setInventories] = useState<any[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { address } = useAccount();

  const { data: blockNumber } = useBlockNumber({
    chainId: polygon.id,
    watch: true,
  });

  const { data: totalItemsData, refetch: refetchTotalItems } = useReadContract({
    address: trotelCoinShopV1,
    abi: trotelCoinShopV1ABI,
    functionName: "totalItems",
    chainId: polygon.id,
    account: address,
  });

  useEffect(() => {
    if (totalItemsData) {
      const totalItems = Number(totalItemsData);
      setTotalItems(totalItems);
    } else {
      setTotalItems(null);
    }
  }, [totalItemsData]);

  useEffect(() => {
    if (blockNumber) {
      refetchTotalItems();
    }
  }, [blockNumber]);

  useEffect(() => {
    if (totalItems && address) {
      const fetchInventory = async () => {
        setIsLoading(true);
        let inventories = [];

        for (let item = 0; item < totalItems; item++) {
          try {
            const userItem = (await readContract(config, {
              address: trotelCoinShopV1,
              abi: trotelCoinShopV1ABI,
              functionName: "inventories",
              chainId: polygon.id,
              account: address,
              args: [address, item],
            })) as InventoryItemType;

            const itemInfo = userItem[0];
            const itemQuantity = Number(userItem[1]);
            const price = Number(formatEther(itemInfo.price));
            const discount = Number(itemInfo.discount);
            const itemFormatted = {
              name: itemInfo.name,
              price: price,
              discount: discount,
              quantity: itemQuantity,
            };

            inventories.push(itemFormatted);
          } catch (error) {
            break;
          }
        }

        setIsLoading(false);
        return inventories;
      };

      fetchInventory().then((inventories) => setInventories(inventories));
    } else {
      setInventories(null);
      setIsLoading(false);
    }
  }, [totalItems, address]);

  return (
    <>
      <div className="mx-auto max-w-4xl flex flex-col gap-4">
        <span className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          {lang === "en" ? "Inventory" : "Inventaire"}
        </span>

        {inventories && inventories.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {inventories.map(
                (item: InventoryItemTypeFinal, index: number) => (
                  <div key={index}>
                    <InventoryItem lang={lang} item={item} />
                  </div>
                )
              )}
            </div>
          </>
        ) : isLoading ? (
          <>
            <div className="flex justify-center items-center text-center p-32">
              <span
                className={`text-gray-700 dark:text-gray-300 ${
                  isLoading && loadingFlashClass
                }`}
              >
                {lang === "en"
                  ? "Your items are loading..."
                  : "Vos objets sont en cours de chargement..."}
              </span>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col justify-center gap-4 text-center items-center p-32">
              <span className="text-gray-700 dark:text-gray-300">
                {lang === "en"
                  ? "You don't have any items."
                  : "Vous n'avez aucun objet."}
              </span>
              {!address && <Wallet lang={lang} isCentered={true} />}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Inventory;
