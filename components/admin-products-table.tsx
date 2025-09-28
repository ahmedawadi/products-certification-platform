"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, Package } from "lucide-react";
import { useProducts } from "@/hooks/products";

export function AdminProductsTable() {
  const { products, isLoading, isError } = useProducts();

  if (isLoading) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
          <span className="ml-2 text-muted-foreground">
            Chargement des produits...
          </span>
        </CardContent>
      </Card>
    );
  }

  if (isError || !products) {
    return (
      <Card>
        <CardContent className="text-center py-12">
          <p className="text-muted-foreground">
            Erreur lors du chargement des produits.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Package className="w-5 h-5" />
          Produits certifiés
        </CardTitle>
        <CardDescription>
          Liste complète des produits certifiés dans le catalogue
        </CardDescription>
      </CardHeader>
      <CardContent>
        {products.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground">
              Aucun produit certifié pour le moment.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {products.map((product, idx) => (
              <div
                key={`${product.id}-${product.name}-${idx}`}
                className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-medium text-foreground truncate">
                      {product.name}
                    </h3>
                    <Badge
                      variant="secondary"
                      className="bg-certified text-certified-foreground"
                    >
                      Certifié
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                    {product.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>ID: {product.id}</span>
                  </div>
                </div>

                <div className="text-right ml-4">
                  <div className="text-lg font-semibold text-foreground">
                    {product.price.toLocaleString("fr-FR", {
                      style: "currency",
                      currency: "EUR",
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
