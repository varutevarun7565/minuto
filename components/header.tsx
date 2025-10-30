"use client"

import { useState } from "react"
import { Menu, X, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">⚡</span>
            </div>
            <span className="text-2xl font-bold text-foreground">Minuto</span>
          </div>

          {/* Location & Search - Desktop */}
          <div className="hidden md:flex items-center gap-2 flex-1 mx-8">
            <MapPin size={18} className="text-primary" />
            <input
              type="text"
              placeholder="Enter delivery location..."
              className="flex-1 px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline">Sign In</Button>
            <Button className="bg-primary hover:bg-primary/90">Download App</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-3">
            <div className="flex items-center gap-2 mb-3">
              <MapPin size={18} className="text-primary" />
              <input
                type="text"
                placeholder="Enter location..."
                className="flex-1 px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="flex gap-2 pt-2">
              <Button variant="outline" className="flex-1 bg-transparent">
                Sign In
              </Button>
              <Button className="flex-1 bg-primary hover:bg-primary/90">Download</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
