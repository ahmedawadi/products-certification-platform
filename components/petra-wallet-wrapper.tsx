"use client";

import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import { PetraWallet } from "petra-plugin-wallet-adapter";

const wallets = [new PetraWallet()];

export default function PetraWalletWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AptosWalletAdapterProvider plugins={wallets as any} autoConnect={true}>
      {children}
    </AptosWalletAdapterProvider>
  );
}
