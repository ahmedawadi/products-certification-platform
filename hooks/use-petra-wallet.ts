// hooks/usePetraWallet.ts
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { useState } from "react";

export function usePetraWallet() {
  const {
    connect,
    disconnect,
    account,
    connected,
    wallet,
    wallets,
    network,
    signAndSubmitTransaction,
  } = useWallet();
  console.log(connected);
  const [isConnecting, setIsConnecting] = useState(false);

  const connectPetra = async () => {
    try {
      setIsConnecting(true);

      // ✅ Check if Petra is available
      const petra = wallets.find((w) => w.name.toLowerCase() === "petra");
      if (!petra) {
        throw new Error("Petra wallet is not installed in your browser.");
      }

      await connect("Petra");

      return true;
    } catch (error) {
      const err = error as Error;
      if (err.message === "Petra wallet is not installed in your browser.")
        throw new Error(
          "Le portefeuille Petra n'est pas installé dans votre navigateur."
        );
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnectPetra = async () => {
    await disconnect();
  };

  return {
    // Connection state
    isConnected: connected,
    isConnecting,
    walletName: wallet?.name || null,

    // Account info
    accountAddress: account?.address || null,
    account: account,
    network: network?.name || null,

    // Methods
    connect: connectPetra,
    disconnect: disconnectPetra,
    signAndSubmitTransaction,
  };
}
