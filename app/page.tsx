"use client";

import { useEffect, useState } from "react";
import { HeroSection } from "@/components/hero-section";
import { ProductsGrid } from "@/components/products-grid";
import { StatsSection } from "@/components/stats-section";
import { AdminLoginModal } from "@/components/admin-login-modal";
import { useUser } from "@/hooks/use-user";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { isAuthenticated } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) router.push("/dashboard");
  }, [isAuthenticated]);

  return (
    <main className="min-h-screen">
      <HeroSection onLoginClick={() => setShowLoginModal(true)} />

      <section id="productsSection" className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Nos produits certifiés
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Découvrez notre catalogue de produits industriels certifiés,
              garantissant authenticité, qualité et conformité aux normes les
              plus strictes.
            </p>
          </div>
          <ProductsGrid />
        </div>
      </section>

      <StatsSection />

      <AdminLoginModal open={showLoginModal} onOpenChange={setShowLoginModal} />
    </main>
  );
}
