import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative bg-black min-h-screen flex items-center">
      {/* Hero background with luxury watch */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Luxury watch showcase background with warm bokeh lighting */}
        <div className="w-full h-full bg-gradient-to-br from-amber-900/20 via-black to-black flex items-center justify-center">
          <div className="relative">
            {/* Watch image would go here - using CSS to create a luxury feel */}
            <div className="w-96 h-96 rounded-full bg-gradient-to-br from-amber-600/30 to-amber-900/30 blur-3xl absolute inset-0"></div>
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-700/20 blur-2xl absolute inset-8"></div>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-secondary">
            <div className="mb-4">
              <span className="text-sm font-medium tracking-wider uppercase text-amber-400">Audemars Piguet</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-light leading-tight mb-6">
              Royal Oak<br/>
              <span className="font-semibold">Collection</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-md">
              The collection is powered by finely finished mechanical movements, showcasing both technical excellence and avant-garde style.
            </p>
            <Button 
              variant="outline" 
              className="bg-transparent border-secondary text-secondary hover:bg-secondary hover:text-primary transition-all duration-300 px-8 py-3 text-sm font-medium tracking-wide uppercase"
            >
              Shop Now
            </Button>
          </div>

          {/* Right Content - Watch Image Placeholder */}
          <div className="flex justify-center lg:justify-end">
            {/* Luxury watch with premium blue dial and golden accents */}
            <div className="relative">
              {/* Main watch representation */}
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 shadow-2xl relative overflow-hidden">
                {/* Watch bezel */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 shadow-inner">
                  {/* Watch face */}
                  <div className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 flex items-center justify-center">
                    {/* Watch markers */}
                    <div className="absolute inset-6 rounded-full border-2 border-amber-300/30">
                      {/* 12 o'clock marker */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-amber-300"></div>
                      {/* 3 o'clock marker */}
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 h-1 w-6 bg-amber-300"></div>
                      {/* 6 o'clock marker */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-amber-300"></div>
                      {/* 9 o'clock marker */}
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 h-1 w-6 bg-amber-300"></div>
                    </div>
                    {/* Watch hands */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-0.5 h-16 bg-amber-300 absolute origin-bottom transform rotate-45"></div>
                      <div className="w-0.5 h-12 bg-amber-300 absolute origin-bottom transform rotate-90"></div>
                      <div className="w-2 h-2 bg-amber-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Lighting effects */}
              <div className="absolute -inset-4 bg-gradient-to-br from-amber-400/20 to-transparent rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}