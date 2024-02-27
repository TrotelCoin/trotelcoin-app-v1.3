import { DictType } from "@/types/types";
import { useAddress } from "@thirdweb-dev/react";
import React, { useContext } from "react";
import StreakButton from "@/app/[lang]/learn/components/streak/streakButton";
import StreakCount from "@/app/[lang]/learn/components/streak/streakCount";
import MaxStreakCount from "@/app/[lang]/learn/components/streak/maxStreakCount";
import StreakCooldown from "@/app/[lang]/learn/components/streak/streakCooldown";
import StreakContext from "@/app/[lang]/contexts/streakContext";

const Streak = ({ dict }: { dict: DictType }) => {
  const address = useAddress();

  const { streak, disabled, cooldown, maxStreak } = useContext(StreakContext);

  return (
    <>
      <h2 className="font-semibold text-gray-900 dark:text-gray-100 text-xl">
        {typeof dict?.learn !== "string" && <>{dict?.learn.streak}</>}
      </h2>
      <p className="text-gray-600 dark:text-gray-400">
        {address &&
          (disabled
            ? typeof dict?.learn !== "string" && (
                <>{dict?.learn.streakDisabled}</>
              )
            : typeof dict?.learn !== "string" && (
                <>{dict?.learn.streakEnabled}</>
              ))}
        {!address &&
          typeof dict?.modals !== "string" &&
          dict?.modals.connectWallet !== "string" &&
          typeof dict?.modals.connectWallet !== "string" &&
          dict?.modals.connectWallet.message && (
            <>{dict?.modals.connectWallet.message}</>
          )}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 mt-4 gap-4">
        <StreakButton disabled={disabled} />

        <StreakCount dict={dict} streak={streak} />

        <MaxStreakCount dict={dict} maxStreak={maxStreak} />

        <StreakCooldown dict={dict} cooldown={cooldown} />
      </div>
    </>
  );
};

export default Streak;
