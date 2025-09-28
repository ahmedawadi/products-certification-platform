"use client"

import { useState, useEffect } from "react"
import { CheckCircle, Copy, ExternalLink, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "@/hooks/use-toast"

interface TransactionSuccessProps {
  transactionHash: string
  productName: string
  onClose: () => void
}

export function TransactionSuccess({ transactionHash, productName, onClose }: TransactionSuccessProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(transactionHash)
      toast({
        title: "Hash copié",
        description: "Le hash de transaction a été copié dans le presse-papiers.",
      })
    } catch (err) {
      toast({
        title: "Erreur",
        description: "Impossible de copier le hash de transaction.",
        variant: "destructive",
      })
    }
  }

  const openInExplorer = () => {
    window.open(`https://explorer.aptoslabs.com/txn/${transactionHash}`, "_blank")
  }

  return (
    <div
      className={`space-y-6 transition-all duration-500 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {/* Success Animation */}
      <div className="text-center">
        <div className="relative mx-auto w-16 h-16 mb-4">
          <div className="absolute inset-0 bg-certified/20 rounded-full animate-ping"></div>
          <div className="relative flex items-center justify-center w-16 h-16 bg-certified rounded-full">
            <CheckCircle className="w-8 h-8 text-white animate-bounce" />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">Produit certifié avec succès !</h3>
        <p className="text-muted-foreground text-pretty">
          <span className="font-medium">{productName}</span> a été ajouté à la blockchain et certifié.
        </p>
      </div>

      {/* Transaction Hash Display */}
      <div className="bg-muted/50 rounded-lg p-4 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-foreground">Hash de transaction</span>
          <Button variant="ghost" size="sm" onClick={onClose} className="h-6 w-6 p-0 hover:bg-muted">
            <X className="w-4 h-4" />
          </Button>
        </div>

        <div className="bg-background rounded border p-3">
          <code className="text-xs font-mono text-foreground break-all">{transactionHash}</code>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={copyToClipboard} className="flex-1 bg-transparent">
            <Copy className="w-4 h-4 mr-2" />
            Copier
          </Button>
          <Button variant="outline" size="sm" onClick={openInExplorer} className="flex-1 bg-transparent">
            <ExternalLink className="w-4 h-4 mr-2" />
            Explorer
          </Button>
        </div>
      </div>

      {/* Close Button */}
      <Button onClick={onClose} className="w-full bg-certified hover:bg-certified/90 text-certified-foreground">
        Fermer
      </Button>
    </div>
  )
}
