import { Badge } from "@/components/ui/badge"
import { Shield, ShieldCheck } from "lucide-react"

interface CertificationBadgeProps {
  certified?: boolean
  className?: string
}

export function CertificationBadge({ certified = true, className }: CertificationBadgeProps) {
  if (certified) {
    return (
      <Badge variant="secondary" className={`bg-certified text-certified-foreground gap-1 ${className}`}>
        <ShieldCheck className="w-3 h-3" />
        Certifié
      </Badge>
    )
  }

  return (
    <Badge variant="outline" className={`text-muted-foreground gap-1 ${className}`}>
      <Shield className="w-3 h-3" />
      Non certifié
    </Badge>
  )
}
