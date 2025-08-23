import { useState } from 'react';
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProductCard({ product, variant = "default" }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const formatPrice = (priceInCents) => {
    return `$${(priceInCents / 100).toFixed(2)}`;
  };

  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercentage = hasDiscount 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <div className={`${variant === "accent" ? "bg-accent" : "bg-secondary"} rounded-lg shadow-sm transition-shadow duration-300 group`}>
      <div 
        className="relative cursor-pointer overflow-hidden rounded-t-lg"
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <div className="relative bg-gray-100 w-full h-64">
          <img 
            src={product.image} 
            alt={product.name} 
            className="absolute w-full h-full object-cover transition-opacity duration-700"
            style={{ opacity: isFlipped ? 0 : 1 }}
          />
          <img 
            src={product.secondaryImage || product.image} 
            alt={`${product.name} - secondary`} 
            className="absolute w-full h-full object-cover transition-opacity duration-700"
            style={{ opacity: isFlipped ? 1 : 0 }}
          />
        </div>
        {hasDiscount && (
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-highlight text-secondary px-2 py-1 text-xs font-medium rounded">
              -{discountPercentage}%
            </span>
          </div>
        )}
        <div className="absolute top-4 right-4 z-10">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-text-gray hover:text-highlight transition-colors duration-200"
          >
            <Heart className="h-5 w-5" /> 
          </Button>
        </div>
        <div className="absolute bottom-10 left-0 rotate-[-90deg] z-10">
          <span className="text-gray-700 p-1 text-xs font-medium tracking-wider">
            {product.brand}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg cursor-pointer hover:text-[#c58e46] transition-colors duration-200 font-medium text-primary mb-2">{product.name}</h3>
        <div className="flex items-center space-x-2">
          {hasDiscount && (
            <span className="text-sm text-gray-500 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
          <span className="text-lg font-semibold text-primary">
            {formatPrice(product.price)}
          </span>
        </div>
      </div>
    </div>
  );
}