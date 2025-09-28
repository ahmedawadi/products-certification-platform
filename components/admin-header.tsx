"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@/hooks/use-user";
import { Shield, LogOut, Plus } from "lucide-react";

interface AdminHeaderProps {
  onAddProduct: () => void;
}

export function AdminHeader({ onAddProduct }: AdminHeaderProps) {
  const { user, logout } = useUser();

  return (
    <header className="border-b border-border bg-card">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-foreground">
                Panneau d'administration
              </h1>
              <p className="text-sm text-muted-foreground">
                Gérez les certifications de produits
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button onClick={onAddProduct} className="gap-2">
              <Plus className="w-4 h-4" />
              Certifier un produit
            </Button>

            <div className="flex items-center gap-3 pl-3 border-l border-border">
              <div className="text-right">
                <p className="text-sm font-medium text-foreground">
                  {user?.name || "Administrateur"}
                </p>
                <p className="text-xs text-muted-foreground">{user?.email}</p>
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={logout}
                className="gap-2 bg-transparent"
              >
                <LogOut className="w-4 h-4" />
                Déconnexion
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
