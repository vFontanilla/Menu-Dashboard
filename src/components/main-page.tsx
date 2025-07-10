import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import { mockMenuItems } from "../data/mockData";

const MainPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All Items");

  // Dynamically get unique categories
  const uniqueCategories = Array.from(
    new Set(mockMenuItems.map((item) => item.category))
  );
  const categories = ["All Items", ...uniqueCategories];

  // Filtered items based on active category
  const filteredItems = mockMenuItems.filter(
    (item) =>
      item.available &&
      (activeCategory === "All Items" || item.category === activeCategory)
  );

  const handleAddToCart = (itemName: string) => {
    toast.success(`${itemName} added to cart`, {
      description: "You can view it in your cart.",
      duration: 3000,
    });
  };

    if (filteredItems.length === 0) {
        return (
            <div className="text-center py-12">
            <h3 className="text-lg font-semibold text-gray-600">No items found</h3>
            <p className="text-gray-500">Try selecting a different category</p>
            </div>
        );
    }

  return (
    <main className="p-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Category Buttons */}
      <div className="flex gap-4 flex-wrap mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`text-sm px-4 py-2 border rounded-md font-medium transition ${
              activeCategory === category
                ? "bg-black text-white border-black"
                : "!bg-white !text-black !border-gray-300 hover:!bg-gray-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <Card key={item.id} className="overflow-hidden border-gray-50 shadow-md rounded-md">
            <CardHeader className="p-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover"
              />
            </CardHeader>
            <CardContent className="p-4 space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                <span className="text-sm text-gray-600">₱{item.price}</span>
              </div>
              <p className="text-xs text-black">
                ⏱ Prep time: {item.preparationTime} {item.preparationTimeUnit}
              </p>
              <Button
                className="w-full text-white flex items-center gap-2"
                onClick={() => handleAddToCart(item.name)}
              >
                <ShoppingCart className="w-4 h-4" />
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default MainPage;
