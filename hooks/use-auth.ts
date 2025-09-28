"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";
import { usePetraWallet } from "@/hooks/use-petra-wallet";

export function useAuth() {
  const [pending, setPending] = useState(false);
  const [warning, setWarning] = useState<string | null>(null);
  const router = useRouter();
  const { connect, isConnecting, isConnected } = usePetraWallet();

  const login = async () => {
    setPending(true);
    setWarning(null);

    try {
      const res = await connect();

      if (res) {
        toast({
          title: "Connexion réussie",
          description:
            "Bienvenue dans le panneau d'administration ! Votre portefeuille Petra est connecté.",
        });
        router.push("/dashboard");
        return true;
      } else {
        const msg = "Échec de la connexion au portefeuille.";
        setWarning(msg);
        toast({
          title: "Erreur",
          description: msg,
          variant: "destructive",
        });
        return false;
      }
    } catch (err) {
      const msg = "Problème technique lors de la connexion au portefeuille.";
      setWarning(msg);
      toast({
        title: "Problème technique",
        description: msg,
        variant: "destructive",
      });
      return false;
    } finally {
      setPending(false);
    }
  };

  console.log(isConnected);
  return {
    pending: pending || isConnecting,
    warning,
    login,
  };
}
