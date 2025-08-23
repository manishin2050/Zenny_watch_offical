import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProductCard({ product, variant = "default" }) {
  const formatPrice = (priceInCents) => {
    return `$${(priceInCents / 100).toFixed(2)}`;
  };

  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercentage = hasDiscount 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <div className={`${variant === "accent" ? "bg-accent" : "bg-secondary"} rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 group`}>
      <div className="relative cursor-pointer overflow-hidden rounded-t-lg">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
        />
        {hasDiscount && (
          <div className="absolute top-4 left-4">
            <span className="bg-highlight text-secondary px-2 py-1 text-xs font-medium rounded">
              -{discountPercentage}%
            </span>
          </div>
        )}
        <div className="absolute top-4 right-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-text-gray hover:text-highlight transition-colors duration-200 "
          >
            <Heart className="h-5 w-5" /> 
          </Button>
        </div>
        <div className="absolute bottom-10 left-0 rotate-[-90deg]">
          <span className=" text-gray-700  p-1 text-xs font-medium tracking-wider">
            {product.brand}
          </span>
        </div>
      </div>
      <div className="p-6">
        {/* <div className="text-xs text-gray-500 mb-1 tracking-wider">{product.brand}</div> */}
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