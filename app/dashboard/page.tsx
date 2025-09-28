"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/hooks/use-user";
import { AdminHeader } from "@/components/admin-header";
import { AdminStats } from "@/components/admin-stats";
import { AdminProductsTable } from "@/components/admin-products-table";
import { ProductCreationModal } from "@/components/product-creation-modal";
import { Loader2 } from "lucide-react";

export default function DashboardPage() {
  const [showProductModal, setShowProductModal] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const { user, isLoading, isAuthenticated } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/");
    }
  }, [isLoading, isAuthenticated, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
        <span className="ml-2 text-muted-foreground">Chargement...</span>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  const handleProductCreated = () => {
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-background">
      <AdminHeader onAddProduct={() => setShowProductModal(true)} />

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Tableau de bord
          </h2>
          <p className="text-muted-foreground">
            Gérez vos certifications de produits et surveillez les performances
            de la plateforme.
          </p>
        </div>

        <AdminStats key={refreshKey} />
        <AdminProductsTable key={refreshKey} />
      </main>

      <ProductCreationModal
        open={showProductModal}
        onOpenChange={setShowProductModal}
        onSuccess={handleProductCreated}
      />
    </div>
  );
}
