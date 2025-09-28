"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useProducts } from "@/hooks/products";
import { Package, Clock, CheckCircle } from "lucide-react";

export function AdminStats() {
  const { products } = useProducts();

  const totalProducts = products?.length || 0;
  const recentProducts =
    products?.filter((product) => {
      const createdAt = new Date(product.createdAt);
      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      return createdAt > weekAgo;
    }).length || 0;

  const averagePrice = products?.length
    ? products.reduce((sum, product) => sum + product.price, 0) /
      products.length
    : 0;

  const stats = [
    {
      title: "Produits certifiés",
      value: totalProducts.toString(),
      description: "Total des produits dans le catalogue",
      icon: Package,
      trend: "",
    },
    {
      title: "Prix moyen",
      value: averagePrice.toLocaleString("fr-FR", {
        style: "currency",
        currency: "EUR",
        maximumFractionDigits: 0,
      }),
      description: "Prix moyen des produits",
      icon: CheckCircle,
      trend: "Tous produits",
    },
    {
      title: "Statut système",
      value: "Opérationnel",
      description: "Tous les services fonctionnent",
      icon: Clock,
      trend: "99.9% uptime",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground mb-1">
              {stat.value}
            </div>
            <p className="text-xs text-muted-foreground mb-2">
              {stat.description}
            </p>
            <p className="text-xs text-certified font-medium">{stat.trend}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
