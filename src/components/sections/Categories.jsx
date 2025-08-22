import { categories } from "@/data/mockData";

export default function Categories() {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-6xl  font-[la-regular-600] text-primary mb-4">Shop By Categories</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg bg-accent">
                <img 
                  src={category.image} 
                  alt={`${category.name} Collection`} 
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
              </div>
              <div className="text-center mt-4">
                <h3 className="text-xl font-medium text-primary hover:text-[#c58e46]">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}