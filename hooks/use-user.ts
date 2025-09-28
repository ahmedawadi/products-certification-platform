"use client";

import { useRouter } from "next/navigation";
import { usePetraWallet } from "@/hooks/use-petra-wallet";

export function useUser() {
  const router = useRouter();
  const { isConnected, accountAddress, disconnect, walletName } =
    usePetraWallet();

  const logout = async () => {
    await disconnect();
    router.push("/");
  };

  const user =
    isConnected && accountAddress
      ? {
          id: accountAddress,
          name: walletName || "Administrateur Petra",
          email: `${accountAddress.toString()}@petra.wallet`,
        }
      : null;

  return {
    user,
    isLoading: false,
    isAuthenticated: isConnected,
    logout,
    error: false,
  };
}
