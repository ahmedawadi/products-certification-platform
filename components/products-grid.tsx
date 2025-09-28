"use client";

import { useProducts } from "@/hooks/products";
import { ProductCard } from "./product-card";
import { Loader2 } from "lucide-react";

export function ProductsGrid() {
  const { products, isLoading, isError } = useProducts();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
        <span className="ml-2 text-muted-foreground">
          Chargement des produits...
        </span>
      </div>
    );
  }

  if (isError || !products) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">
          Erreur lors du chargement des produits. Veuillez réessayer plus tard.
        </p>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">
          Aucun produit certifié disponible pour le moment.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
