
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative bg-black min-h-screen flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
          alt="Luxury watch background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-white">
          <h1 className="text-5xl lg:text-6xl font-light leading-tight mb-4">
            Audemars Piguet
            <br />
            <span className="font-normal">Royal Oak Collection</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl">
            The collection is powered by finely finished mechanical movements,
            showcasing both technical excellence and avant-garde style.
          </p>
          <Button 
            variant="outline" 
            className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-3 text-sm font-medium tracking-wide uppercase"
          >
            Shop Now
          </Button>
        </div>
      </div>
    </section>
  );
}
