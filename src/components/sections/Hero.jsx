import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      url: "https://zenny.bzotech.com/wp-content/uploads/2024/08/h7-sli1.jpg",
      alt: "Citizen Promaster Marine",
      title: "Citizen Promaster Marine Collection",
      description: "The collection features a variety of designs, including models with depth meters, chronographs, and bold, easy-to-read dials."
    },
    {
      url: "https://zenny.bzotech.com/wp-content/uploads/2024/08/h7-slide2.jpg",
      alt: "Omega Seamaster Diver",
      title: "Omega Seamaster Diver Collection",
      description: "Featuring ceramic bezels, wave-pattern dials, and luminescent hands and markers, the Seamaster Diver 300M is a perfect choice for both underwater exploration and everyday elegance."
    },
    {
      url: "https://zenny.bzotech.com/wp-content/uploads/2024/08/h7-sli.jpg",
      alt: "Audemars Piguet Royal Oak",
      title: "Audemars Piguet Royal Oak Collection",
      description: "The collection is powered by finely finished mechanical movements, showcasing both technical excellence and avant-garde style."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAnimating(false);
      }, 300);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section className="relative bg-black min-h-screen flex items-center overflow-hidden">
      {/* Carousel container */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.url}
              alt={slide.alt}
              className={`w-full h-full object-cover transition-transform duration-2000 ease-in-out ${
                index === currentSlide ? 'scale-110' : 'scale-100'
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Content overlay with top-to-bottom animation */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-white">
          <div className="max-w-2xl">
            <h1 
              className={`text-5xl lg:text-7xl font-bold leading-tight mb-6 transition-all duration-1000 ease-in-out ${
                isAnimating 
                  ? 'opacity-0 translate-y-[-100px]' 
                  : 'opacity-100 translate-y-0'
              }`}
            >
              {slides[currentSlide].title}
            </h1>
            <p 
              className={`text-xl text-gray-200 mb-8 leading-relaxed transition-all duration-1000 ease-in-out delay-200 ${
                isAnimating 
                  ? 'opacity-0 translate-y-[-80px]' 
                  : 'opacity-100 translate-y-0'
              }`}
            >
              {slides[currentSlide].description}
            </p>
            <Button 
              variant="outline" 
              className={`bg-transparent border-white text-white hover:bg-white hover:text-black transition-all duration-1000 ease-in-out delay-300 px-10 py-4 text-lg font-bold ${
                isAnimating 
                  ? 'opacity-0 translate-y-[-60px]' 
                  : 'opacity-100 translate-y-0'
              }`}
            >
              Shop Now
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
