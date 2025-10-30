import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                ⚡ Delivery in 10 Minutes
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance">
                Your Daily Essentials, <span className="text-primary">Delivered Fast</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-balance">
                Get groceries, snacks, and daily essentials delivered to your doorstep in just 10 minutes. Shop anytime,
                anywhere with Minuto.
              </p>
            </div>

            {/* Search Bar */}
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <input
                  type="text"
                  placeholder="Enter your location"
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <Button className="bg-primary hover:bg-primary/90 px-6">
                <span>Shop Now</span>
                <ArrowRight size={18} />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div>
                <p className="text-3xl font-bold text-primary">10</p>
                <p className="text-sm text-muted-foreground">Minutes Delivery</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Products</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">24/7</p>
                <p className="text-sm text-muted-foreground">Available</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 md:h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl"></div>
            <img src="/grocery-delivery-app-mobile-phone-interface.jpg" alt="Minuto App" className="w-full h-full object-cover rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
