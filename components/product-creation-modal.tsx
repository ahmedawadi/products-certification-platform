"use client";

import type React from "react";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2, Plus, AlertCircle, CheckCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { TransactionSuccess } from "./transaction-success";
import { useProductCreation } from "@/hooks/products";

interface ProductCreationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
}

export function ProductCreationModal({
  open,
  onOpenChange,
  onSuccess,
}: ProductCreationModalProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const { submitData, pending, warning, transactionHash } =
    useProductCreation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !description || !price) {
      return;
    }

    const priceNumber = Number.parseFloat(price);
    if (isNaN(priceNumber) || priceNumber <= 0) {
      toast({
        title: "Erreur",
        description: "Veuillez saisir un prix valide.",
        variant: "destructive",
      });
      return;
    }

    const success = await submitData({
      name: name.trim(),
      description: description.trim(),
      price: priceNumber,
    });

    if (success) {
      toast({
        title: "Produit certifié avec succès",
        description: `${name} a été ajouté au catalogue des produits certifiés.`,
      });
      onSuccess?.();
    }
  };

  const handleClose = () => {
    if (!pending) {
      onOpenChange(false);
      setName("");
      setDescription("");
      setPrice("");
    }
  };

  const showTransactionSuccess = transactionHash && !pending;

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg">
        {showTransactionSuccess ? (
          <TransactionSuccess
            transactionHash={transactionHash}
            productName={name}
            onClose={handleClose}
          />
        ) : (
          <>
            <DialogHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-certified/10 rounded-full">
                  <Plus className="w-6 h-6 text-certified" />
                </div>
              </div>
              <DialogTitle className="text-xl font-semibold">
                Certifier un nouveau produit
              </DialogTitle>
              <DialogDescription className="text-pretty">
                Ajoutez un nouveau produit au catalogue des produits certifiés.
                Tous les produits ajoutés sont automatiquement marqués comme
                certifiés.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-6">
              {warning && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{warning}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <Label htmlFor="product-name" className="text-sm font-medium">
                  Nom du produit *
                </Label>
                <Input
                  id="product-name"
                  type="text"
                  placeholder="Ex: Composant électronique XR-2024"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={pending}
                  required
                  className="w-full"
                  maxLength={100}
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="product-description"
                  className="text-sm font-medium"
                >
                  Description *
                </Label>
                <Textarea
                  id="product-description"
                  placeholder="Décrivez les caractéristiques, spécifications techniques et avantages du produit..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  disabled={pending}
                  required
                  className="w-full min-h-[100px] resize-none"
                  maxLength={500}
                />
                <div className="text-xs text-muted-foreground text-right">
                  {description.length}/500 caractères
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="product-price" className="text-sm font-medium">
                  Prix (EUR) *
                </Label>
                <Input
                  id="product-price"
                  type="number"
                  placeholder="0.00"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  disabled={pending}
                  required
                  min="0"
                  step="0.01"
                  className="w-full"
                />
              </div>

              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-certified" />
                  <span className="font-medium text-foreground">
                    Certification automatique
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-1 text-pretty">
                  Ce produit sera automatiquement marqué comme certifié et
                  apparaîtra immédiatement dans le catalogue public.
                </p>
              </div>

              <div className="flex flex-col gap-3 pt-4">
                <Button
                  type="submit"
                  disabled={pending || !name || !description || !price}
                  className="w-full bg-certified hover:bg-certified/90 text-certified-foreground"
                >
                  {pending ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Certification en cours...
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4 mr-2" />
                      Certifier le produit
                    </>
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
                Les produits certifiés sont soumis à nos standards de qualité
                les plus élevés et bénéficient de notre garantie d'authenticité.
              </p>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
