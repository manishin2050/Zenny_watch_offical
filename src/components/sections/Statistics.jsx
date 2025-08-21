export default function Statistics() {
  const stats = [
    { number: "25K+", label: "Satisfied Clients" },
    { number: "36k+", label: "Products Sold" },
    { number: "15+", label: "Years Experience" },
    { number: "100+", label: "Awards Winning" }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 to-transparent"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-amber-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-600/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="text-secondary">
              <div className="text-5xl font-light mb-2 text-amber-400">{stat.number}</div>
              <div className="text-lg text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}