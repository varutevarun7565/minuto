import { Zap, Clock, MapPin, Shield } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get your orders delivered in just 10 minutes. No waiting, no delays.",
  },
  {
    icon: Clock,
    title: "24/7 Service",
    description: "Shop anytime you want. We are always available for your needs.",
  },
  {
    icon: MapPin,
    title: "Wide Coverage",
    description: "Available across multiple areas. Check if we deliver to your location.",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Your orders are handled with care. Quality guaranteed on every delivery.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Why Choose Minuto?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Experience the fastest delivery service with unmatched convenience and reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="p-6 rounded-2xl bg-muted hover:bg-muted/80 transition-colors group">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
