"use client"

import { useState } from "react"
import { ShoppingCart, Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  image: string
  category: string
  discount?: number
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Fresh Tomatoes",
    price: 45,
    originalPrice: 60,
    image: "/fresh-red-tomatoes.jpg",
    category: "Vegetables",
    discount: 25,
  },
  {
    id: 2,
    name: "Organic Milk 1L",
    price: 65,
    originalPrice: 80,
    image: "/vintage-milk-bottle.png",
    category: "Dairy",
    discount: 19,
  },
  {
    id: 3,
    name: "Whole Wheat Bread",
    price: 35,
    image: "/whole-wheat-bread-loaf.jpg",
    category: "Bakery",
  },
  {
    id: 4,
    name: "Bananas (1kg)",
    price: 55,
    originalPrice: 70,
    image: "/fresh-yellow-bananas.jpg",
    category: "Fruits",
    discount: 21,
  },
  {
    id: 5,
    name: "Eggs (12 pcs)",
    price: 85,
    originalPrice: 100,
    image: "/brown-eggs-carton.jpg",
    category: "Dairy",
    discount: 15,
  },
  {
    id: 6,
    name: "Onions (1kg)",
    price: 40,
    image: "/fresh-onions.png",
    category: "Vegetables",
  },
  {
    id: 7,
    name: "Yogurt 500g",
    price: 50,
    originalPrice: 65,
    image: "/yogurt-cup.png",
    category: "Dairy",
    discount: 23,
  },
  {
    id: 8,
    name: "Apples (1kg)",
    price: 120,
    originalPrice: 150,
    image: "/red-apples.png",
    category: "Fruits",
    discount: 20,
  },
  {
    id: 9,
    name: "Spinach Bundle",
    price: 30,
    image: "/fresh-green-spinach.jpg",
    category: "Vegetables",
  },
  {
    id: 10,
    name: "Cheese 200g",
    price: 95,
    originalPrice: 120,
    image: "/cheese-block.png",
    category: "Dairy",
    discount: 21,
  },
  {
    id: 11,
    name: "Carrots (1kg)",
    price: 50,
    originalPrice: 65,
    image: "/fresh-orange-carrots.jpg",
    category: "Vegetables",
    discount: 23,
  },
  {
    id: 12,
    name: "Orange Juice 1L",
    price: 75,
    originalPrice: 95,
    image: "/orange-juice-bottle.jpg",
    category: "Beverages",
    discount: 21,
  },
]

export function ProductGrid() {
  const [cart, setCart] = useState<{ [key: number]: number }>({})
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  const categories = ["All", ...new Set(PRODUCTS.map((p) => p.category))]

  const filteredProducts =
    selectedCategory === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === selectedCategory)

  const addToCart = (productId: number) => {
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }))
  }

  const removeFromCart = (productId: number) => {
    setCart((prev) => {
      const newCart = { ...prev }
      if (newCart[productId] > 1) {
        newCart[productId]--
      } else {
        delete newCart[productId]
      }
      return newCart
    })
  }

  const cartCount = Object.values(cart).reduce((sum, count) => sum + count, 0)
  const cartTotal = Object.entries(cart).reduce((sum, [id, count]) => {
    const product = PRODUCTS.find((p) => p.id === Number(id))
    return sum + (product?.price || 0) * count
  }, 0)

  return (
    <div className="bg-background">
      {/* Location & Search Bar */}
      <div className="sticky top-16 z-40 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-3 items-center">
            <div className="flex-1 w-full">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="text-sm text-muted-foreground">Delivery in 10 mins</div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg border border-border overflow-hidden hover:shadow-md transition"
            >
              {/* Product Image */}
              <div className="relative bg-muted h-40 sm:h-48 overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
                {product.discount && (
                  <div className="absolute top-2 right-2 bg-destructive text-destructive-foreground text-xs font-bold px-2 py-1 rounded">
                    {product.discount}% OFF
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-3">
                <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
                <h3 className="text-sm font-semibold text-foreground line-clamp-2 mb-2">{product.name}</h3>

                {/* Price */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg font-bold text-foreground">₹{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-xs text-muted-foreground line-through">₹{product.originalPrice}</span>
                  )}
                </div>

                {/* Add to Cart Button */}
                {!cart[product.id] ? (
                  <Button
                    onClick={() => addToCart(product.id)}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm"
                  >
                    <ShoppingCart size={16} className="mr-1" />
                    Add
                  </Button>
                ) : (
                  <div className="flex items-center justify-between bg-primary/10 rounded-lg p-1">
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="p-1 hover:bg-primary/20 rounded transition"
                    >
                      <Minus size={16} className="text-primary" />
                    </button>
                    <span className="font-semibold text-primary">{cart[product.id]}</span>
                    <button
                      onClick={() => addToCart(product.id)}
                      className="p-1 hover:bg-primary/20 rounded transition"
                    >
                      <Plus size={16} className="text-primary" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Cart */}
      {cartCount > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border p-4 shadow-lg">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <ShoppingCart size={20} className="text-primary" />
                <span className="font-semibold text-foreground">{cartCount} items</span>
              </div>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Checkout - ₹{cartTotal}</Button>
          </div>
        </div>
      )}
    </div>
  )
}
