import { products } from "@/data/mockData";
import ProductCard from "@/components/ui/ProductCard";

export default function PopularModels() {
  const popularProducts = products.filter(product => product.isPopular).slice(0, 8).reverse();

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-semibold font-[Libre-Baskerville] text-primary mb-4">Most Popular Models</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {popularProducts.map((product) => (
            <ProductCard key={product.id} product={product} variant="accent" />
          ))}
        </div>
      </div>
    </section>
  );
}