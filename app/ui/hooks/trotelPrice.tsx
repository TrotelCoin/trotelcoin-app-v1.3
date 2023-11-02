import React, { useState, useEffect } from "react";
import Moralis from "moralis";
import { unstable_noStore as noStore } from "next/cache";

export default function TrotelPrice() {
  noStore();

  // State to hold the token price
  const [tokenPrice, setTokenPrice] = useState<number | null>(null);

  useEffect(() => {
    // Function to fetch token information from Moralis
    const fetchTokenInfo = async () => {
      try {
        // Check if Moralis is already started
        if (!Moralis.Core.isStarted) {
          // Initialize Moralis with the API key
          await Moralis.start({
            apiKey: process.env.NEXT_PUBLIC_VERCEL_ENV_MORALIS_API_KEY,
          });
        }

        const response = await Moralis.EvmApi.token.getTokenPrice({
          chain: "0x38", // Binance Smart Chain
          include: "percent_change",
          address: "0xf04ab1a43cba1474160b7b8409387853d7be02d5",
        }); // TrotelCoin (TROTEL) token address

        // Set the token price in state
        setTokenPrice(response.raw.usdPrice);

        // Cache the token price in localStorage for future use
        localStorage.setItem("tokenPrice", String(response.raw.usdPrice));
      } catch (e) {
        console.error(e);
      }
    };

    // Call the fetchTokenInfo function when the component mounts
    fetchTokenInfo();

    // Set up a timer to fetch and update the token price periodically
    const refreshInterval = setInterval(fetchTokenInfo, 300000); // Every 5 minutes

    // Clear the timer when the component unmounts
    return () => clearInterval(refreshInterval);
  }, []);

  // Return the token price as a formatted string with three decimal places
  return tokenPrice !== null ? (
    <span>{tokenPrice.toFixed(3)}</span>
  ) : (
    <span className="animate-pulse">0.000</span>
  );
}
