import { ShoppingCart, Truck, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: ShoppingCart,
    title: "Browse & Order",
    description: "Browse through our wide selection of products and add items to your cart.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Our delivery partners pick up your order and deliver it within 10 minutes.",
  },
  {
    icon: CheckCircle,
    title: "Enjoy",
    description: "Receive your order at your doorstep and enjoy your daily essentials.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">How Minuto Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Three simple steps to get your essentials delivered fast.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-primary/20 -translate-x-1/2"></div>
                )}

                <div className="relative z-10 bg-white rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-primary" size={32} />
                  </div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
