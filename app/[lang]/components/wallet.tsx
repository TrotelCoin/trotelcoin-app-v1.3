import {
  ConnectWallet,
  useAddress,
  useDisconnect,
  useLogout,
  useUser,
} from "@thirdweb-dev/react";
import React from "react";
import { DictType, Lang } from "@/types/types";
import { useTheme } from "@/app/[lang]/components/themeSelector";

const Wallet = ({ dict, lang }: { dict: DictType; lang: Lang }) => {
  const { isLoggedIn } = useUser();
  const { address } = useAccount();
  const disconnect = useDisconnect();
  const { logout } = useLogout();

  const isLightTheme = useTheme();

  const handleDisconnect = () => {
    if (address) {
      disconnect();
      logout();
    }
  };

  return (
    <>
      {address && isLoggedIn ? (
        <button
          onClick={handleDisconnect}
          className="text-sm font-semibold rounded-full px-6 py-2 bg-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 text-gray-100 dark:text-gray-900"
          style={{ minWidth: "0px" }}
        >
          {typeof dict?.header !== "string" && <>{dict?.header.disconnect}</>}
        </button>
      ) : (
        <ConnectWallet
          theme={isLightTheme ? "light" : "dark"}
          auth={{ loginOptional: false }}
          switchToActiveChain={true}
          modalSize={"wide"}
          modalTitleIconUrl={""}
          btnTitle={lang === "en" ? "Sign in" : "Se connecter"}
          className="text-sm font-semibold rounded-full px-6 py-2 bg-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 text-gray-100 dark:text-gray-900"
          style={{ minWidth: "0px" }}
        />
      )}
    </>
  );
};

export default Wallet;
