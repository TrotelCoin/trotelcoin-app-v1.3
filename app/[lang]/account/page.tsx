"use client";

import React, { useEffect, useState } from "react";

import { useUser, useAddress } from "@thirdweb-dev/react";
import { Lang } from "@/types/types";
import LevelSection from "@/app/[lang]/account/components/level";
import HeaderSection from "@/app/[lang]/account/components/header";
import BadgesSection from "@/app/[lang]/account/components/badges";
import axios from "axios";

export default function Account({
  params: { lang },
}: {
  params: { lang: Lang };
}) {
  const address = useAddress();
  const { isLoggedIn } = useUser();

  useEffect(() => {
    const fetchNewLearner = async () => {
      await axios
        .post(`/api/database/postNewLearner?wallet=${address}`)
        .catch((error) => {
          console.error(error);
        });
    };

    if (address) {
      fetchNewLearner();
    }
  }, [address]);

  return (
    <>
      <div className="mx-auto">
        {address && isLoggedIn ? (
          <>
            <HeaderSection lang={lang} />
            <LevelSection lang={lang} />
            <BadgesSection lang={lang} />
          </>
        ) : (
          <>
            <p className="text-center text-gray-900 dark:text-gray-100 text-xl">
              {lang === "en"
                ? "You need to sign in."
                : "Vous devez vous connecter."}
            </p>
          </>
        )}
      </div>
    </>
  );
}
