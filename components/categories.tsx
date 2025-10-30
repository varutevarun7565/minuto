const categories = [
  { name: "Groceries", emoji: "🛒", color: "from-orange-100 to-orange-50" },
  { name: "Snacks", emoji: "🍿", color: "from-yellow-100 to-yellow-50" },
  { name: "Beverages", emoji: "🥤", color: "from-blue-100 to-blue-50" },
  { name: "Dairy", emoji: "🥛", color: "from-purple-100 to-purple-50" },
  { name: "Bakery", emoji: "🍞", color: "from-amber-100 to-amber-50" },
  { name: "Personal Care", emoji: "🧴", color: "from-pink-100 to-pink-50" },
]

export function Categories() {
  return (
    <section id="categories" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Shop by Category</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Find everything you need in one place.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`group p-6 rounded-2xl bg-gradient-to-br ${category.color} hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{category.emoji}</div>
              <p className="font-semibold text-foreground text-sm">{category.name}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
