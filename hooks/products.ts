"use client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState, useCallback } from "react";
import type { CreateProductData } from "@/types/products";
import createProductOnServerSide from "@/services/products/product-creation";
import { retrieveProductsFromServerSide } from "@/services/products/products-extraction";

export function useProducts() {
  const {
    data: products,
    isLoading,
    error,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: retrieveProductsFromServerSide,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  return {
    products,
    isLoading: products === undefined || isLoading,
    isError: isError || products === null,
  };
}

export function useProduct(id: string) {
  const {
    data: products,
    isLoading,
    error,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: retrieveProductsFromServerSide,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
  const product = products
    ? products.find((product) => product.id === id)
    : null;

  return {
    product,
    isLoading: products === undefined || isLoading,
    isError: isError || products === null || product === undefined,
  };
}

export function useProductCreation() {
  const queryClient = useQueryClient();
  const [pending, setPending] = useState(false);
  const [warning, setWarning] = useState<string | null>(null);
  const [transactionHash, setTransactionHash] = useState<string | null>(null);

  const submitData = useCallback(async (data: CreateProductData) => {
    setPending(true);
    setWarning(null);

    try {
      const result = await createProductOnServerSide(
        data,
        (window as any).petra
      );
      setTransactionHash(result); // success
      queryClient.invalidateQueries({
        queryKey: ["products"],
        exact: false,
      });
    } catch (err) {
      setWarning("Problème technique lors de la création du produit.");
      return false;
    } finally {
      setPending(false);
    }
  }, []);

  return {
    pending,
    warning,
    submitData,
    transactionHash,
  };
}
