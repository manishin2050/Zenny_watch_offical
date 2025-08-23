import { products } from "@/data/mockData";
import ProductCard from "@/components/ui/ProductCard";

export default function NewArrivals() {
  const newProducts = products.filter(product => product.isNew).slice(0, 8);

  return (
    <section className="py-20 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-semibold font-[Libre-Baskerville] text-primary mb-4">New Arrival Collection</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {newProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}