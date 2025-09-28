"use client";
import type React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useAuth } from "@/hooks/use-auth";
import { Loader2, Shield, AlertCircle } from "lucide-react";

interface AdminLoginModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AdminLoginModal({ open, onOpenChange }: AdminLoginModalProps) {
  const { login, pending, warning } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const success = await login();
    if (success) {
      onOpenChange(false);
    }
  };

  const handleClose = () => {
    if (!pending) {
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Shield className="w-6 h-6 text-primary" />
            </div>
          </div>
          <DialogTitle className="text-xl font-semibold">
            Accès administrateur
          </DialogTitle>
          <DialogDescription className="text-pretty">
            Connectez-vous pour accéder au panneau d'administration et gérer les
            certifications de produits.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          {warning && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{warning}</AlertDescription>
            </Alert>
          )}

          <div className="flex flex-col gap-3 pt-4">
            <Button type="submit" disabled={pending} className="w-full">
              {pending ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Connexion en cours...
                </>
              ) : (
                "Se connecter via petra wallet"
              )}
            </Button>

            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              disabled={pending}
              className="w-full bg-transparent"
            >
              Annuler
            </Button>
          </div>
        </form>

        <div className="mt-6 pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground text-center text-pretty">
            Seuls les administrateurs autorisés peuvent accéder à cette section.
            Vos identifiants sont sécurisés et chiffrés.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
