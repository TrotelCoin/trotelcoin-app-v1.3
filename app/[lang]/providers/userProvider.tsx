"use client";

import { useAccount } from "wagmi";
import React, { useEffect, useMemo, useState } from "react";
import UserContext from "@/app/[lang]/contexts/userContext";
import type { ReactNode } from "react";
import { fetcher, refreshIntervalTime } from "@/lib/axios/fetcher";
import useSWR from "swr";
import type { Lang } from "@/types/lang";
import { useSession } from "next-auth/react";

const UserProvider = ({
  children,
  lang,
}: {
  children: ReactNode;
  lang: Lang;
}) => {
  const [userTotalRewardsPending, setUserTotalRewardsPending] =
    useState<number>(0);
  const [userNumberOfQuizzesAnswered, setUserNumberOfQuizzesAnswered] =
    useState<number>(0);
  const [alreadyAnsweredSatisfaction, setAlreadyAnsweredSatisfaction] =
    useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const { address } = useAccount();
  const { data: session } = useSession();

  useEffect(() => {
    if (session && address) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [session, address]);

  const { data: userTotalRewardsPendingData } = useSWR(
    address
      ? `/api/database/getUserTotalRewardsPending?wallet=${address}`
      : null,
    fetcher,
    {
      revalidateOnMount: true,
      revalidateIfStale: true,
      revalidateOnReconnect: true,
      refreshInterval: refreshIntervalTime,
    }
  );

  const { data: alreadyAnsweredSatisfactionData } = useSWR(
    address
      ? `/api/database/getUserAlreadyAnsweredSatisfaction?wallet=${address}`
      : null,
    fetcher,
    {
      revalidateOnMount: true,
      revalidateIfStale: true,
      revalidateOnReconnect: true,
      refreshInterval: refreshIntervalTime,
    }
  );

  useEffect(() => {
    if (alreadyAnsweredSatisfactionData) {
      setAlreadyAnsweredSatisfaction(alreadyAnsweredSatisfactionData);
    } else {
      setAlreadyAnsweredSatisfaction(false);
    }
  }, [alreadyAnsweredSatisfactionData]);

  useEffect(() => {
    if (userTotalRewardsPendingData) {
      setUserTotalRewardsPending(userTotalRewardsPendingData);
    } else {
      setUserTotalRewardsPending(0);
    }
  }, [userTotalRewardsPendingData]);

  const { data: userNumberOfQuizzesAnsweredData } = useSWR(
    address
      ? `/api/database/getUserNumberOfQuizzesAnswered?wallet=${address}`
      : null,
    fetcher,
    {
      revalidateOnMount: true,
      revalidateIfStale: true,
      revalidateOnReconnect: true,
      refreshInterval: refreshIntervalTime,
    }
  );

  useEffect(() => {
    if (userNumberOfQuizzesAnsweredData) {
      setUserNumberOfQuizzesAnswered(userNumberOfQuizzesAnsweredData);
    } else {
      setUserNumberOfQuizzesAnswered(0);
    }
  }, [userNumberOfQuizzesAnsweredData]);

  const contextValue = useMemo(
    () => ({
      userTotalRewardsPending,
      userNumberOfQuizzesAnswered,
      alreadyAnsweredSatisfaction,
      setAlreadyAnsweredSatisfaction,
      isLoggedIn,
    }),
    [
      userTotalRewardsPending,
      userNumberOfQuizzesAnswered,
      alreadyAnsweredSatisfaction,
      setAlreadyAnsweredSatisfaction,
      isLoggedIn,
    ]
  );

  return (
    <>
      <UserContext.Provider value={contextValue}>
        {children}
      </UserContext.Provider>
    </>
  );
};

export default UserProvider;
