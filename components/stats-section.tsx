import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, Award, TrendingUp } from "lucide-react"

export function StatsSection() {
  const stats = [
    {
      icon: Shield,
      title: "Produits certifiés",
      value: "1,247",
      description: "Produits vérifiés et certifiés par nos experts",
    },
    {
      icon: Users,
      title: "Entreprises partenaires",
      value: "156",
      description: "Entreprises qui nous font confiance",
    },
    {
      icon: Award,
      title: "Certifications délivrées",
      value: "3,892",
      description: "Certifications accordées cette année",
    },
    {
      icon: TrendingUp,
      title: "Taux de satisfaction",
      value: "98%",
      description: "De nos clients recommandent nos services",
    },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Notre impact en chiffres</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Découvrez comment nous contribuons à la sécurité et à la qualité des produits industriels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-border/50">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-foreground mb-2">{stat.title}</div>
                <div className="text-xs text-muted-foreground text-pretty">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
