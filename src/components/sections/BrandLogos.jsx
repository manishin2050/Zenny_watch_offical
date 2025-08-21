export default function BrandLogos() {
  const brands = [
    "angle", "visko", "NEXAR", "mosvolk", 
    "heymo", "dreams", "Rockorn", "vanilla"
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center opacity-60">
          {brands.map((brand, index) => (
            <div key={index} className="text-center">
              <span className={`text-2xl text-text-gray ${
                brand === "visko" || brand === "NEXAR" || brand === "heymo" || brand === "dreams" 
                  ? "font-bold" 
                  : "font-light"
              } ${brand === "NEXAR" ? "tracking-wider" : ""}`}>
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}