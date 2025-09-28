import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Product } from "@/types/products";
import { CertificationBadge } from "./certification-badge";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-border">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <CardTitle className="text-lg font-semibold text-balance leading-tight">
              {product.name}
            </CardTitle>
          </div>
          <CertificationBadge certified={true} />
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-sm text-foreground/80 text-pretty leading-relaxed mb-4">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold text-foreground">
            {product.price.toLocaleString("fr-FR", {
              style: "currency",
              currency: "EUR",
            })}
          </div>
          <div className="text-xs text-muted-foreground">
            ID: {product.id.slice(0, 8)}...
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
