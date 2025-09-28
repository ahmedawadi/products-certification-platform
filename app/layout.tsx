import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";
import ReactQueryProvider from "@/utils/providers/react-query-provider";
import PetraWalletWrapper from "@/components/petra-wallet-wrapper";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "CertifiPro - Plateforme de Certification Produits",
  description:
    "Plateforme professionnelle de certification de produits industriels. Vérifiez l'authenticité et la qualité de vos produits.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <ReactQueryProvider>
          <PetraWalletWrapper>
            <Suspense fallback={null}>{children}</Suspense>
          </PetraWalletWrapper>
        </ReactQueryProvider>
        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}
