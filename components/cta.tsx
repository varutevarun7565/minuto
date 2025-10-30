import { Button } from "@/components/ui/button"
import { Apple, Download } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-primary/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">Ready to Get Started?</h2>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8 text-balance">
          Download the Minuto app now and get your first order delivered in 10 minutes.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg">
            <Apple size={20} />
            App Store
          </Button>
          <Button className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg">
            <Download size={20} />
            Google Play
          </Button>
        </div>

        <p className="text-white/80 mt-8 text-sm">Available on iOS and Android. Free download.</p>
      </div>
    </section>
  )
}
