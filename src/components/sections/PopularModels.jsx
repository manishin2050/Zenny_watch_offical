import { products } from "@/data/mockData";
import ProductCard from "@/components/ui/ProductCard";

export default function PopularModels() {
  // 1. Filtering products
  const popularProducts = products
    .filter(product => product.isPopular) // only products marked as popular
    .slice(0, 8)                          // take first 8
    .reverse();                           // reverse the order

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2. Heading */}
        <div className="text-center mb-16">
          <h2 style={{fontFamily:'libre baskerville'}} 
              className="md:text-5xl text-2xl font-semibold text-primary mb-4">
            Most Popular Models
          </h2>
        </div>
        
        {/* 3. Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
          {popularProducts.map((product) => (
            <ProductCard key={product.id} product={product} variant="accent" />
          ))}
        </div>
      </div>
    </section>
  );
}
