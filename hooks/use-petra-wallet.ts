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
    network,
    signAndSubmitTransaction,
  } = useWallet();
  console.log(connected);
  const [isConnecting, setIsConnecting] = useState(false);

  const connectPetra = async () => {
    try {
      setIsConnecting(true);

      await connect("Petra");

      return true;
    } catch (error) {
      console.error("Probleme de connection:", error);
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
