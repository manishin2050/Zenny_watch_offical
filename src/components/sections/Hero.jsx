import { Button } from "@/components/ui/button";
import { useState, useEffect, useCallback } from "react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

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

  const nextSlide = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 800);
  }, [slides.length]);

  const prevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 800);
  };

  const goToSlide = (index) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 800);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section className="relative bg-black min-h-screen flex items-center overflow-hidden">
      {/* Carousel container */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-800 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.url}
              alt={slide.alt}
              className={`w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                index === currentSlide ? 'scale-110' : 'scale-100'
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
          </div>
        ))}
      </div>

      {/* Content overlay */}
      <div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="text-white text-center">
          <h1 
            className={`text-5xl lg:text-6xl font-light leading-tight mb-6 transition-all duration-1000 ease-in-out ${
              isTransitioning 
                ? 'opacity-0 translate-y-[-50px]' 
                : 'opacity-100 translate-y-0'
            }`}
          >
            {slides[currentSlide].title}
          </h1>
          <p 
            className={`text-lg text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto transition-all duration-1000 ease-in-out delay-200 ${
              isTransitioning 
                ? 'opacity-0 translate-y-[50px]' 
                : 'opacity-100 translate-y-0'
            }`}
          >
            {slides[currentSlide].description}
          </p>
          <Button 
            variant="outline" 
            className={`bg-transparent border-white text-white hover:bg-white hover:text-black transition-all duration-1000 ease-in-out delay-300 px-10 py-4 text-base font-medium tracking-wide uppercase ${
              isTransitioning 
                ? 'opacity-0 translate-y-[30px]' 
                : 'opacity-100 translate-y-0'
            }`}
          >
            Shop Now
          </Button>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
}
