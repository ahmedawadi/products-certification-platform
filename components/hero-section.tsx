"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HeroSectionProps {
  onLoginClick: () => void;
}

export function HeroSection({ onLoginClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-hero-overlay" />

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/abstract-wave-pattern.png')] bg-cover bg-center" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
          CertifiPro
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 text-pretty leading-relaxed max-w-3xl mx-auto">
          Plateforme de certification professionnelle pour garantir
          l'authenticité et la qualité de vos produits industriels
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href={"#productsSection"}>
            <Button
              size="lg"
              className="bg-white text-slate-900 hover:bg-white/90 font-medium px-8"
            >
              Découvrir nos produits
            </Button>
          </Link>
          <Button
            variant="outline"
            size="lg"
            className="border-white/30 text-white hover:bg-white/10  hover:text-white font-medium px-8 bg-transparent"
            onClick={onLoginClick}
          >
            Accès administrateur
          </Button>
        </div>
      </div>
    </section>
  );
}
