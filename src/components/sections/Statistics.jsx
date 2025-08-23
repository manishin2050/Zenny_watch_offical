export default function Statistics() {
  const stats = [
    { number: "25K+", label: "Satisfied Clients" },
    { number: "36k+", label: "Products Sold" },
    { number: "15+", label: "Years Experience" },
    { number: "100+", label: "Awards Winning" }
  ];

  return (
    <section className="py-28 relative overflow-hidden bg-cover bg-center" style={{backgroundImage: "url('https://zenny.bzotech.com/wp-content/uploads/2024/08/h7-bg-count3.jpg')"}}>
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="text-white">
              <div className="text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-xl">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}