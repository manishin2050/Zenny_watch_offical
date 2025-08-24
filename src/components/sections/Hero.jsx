import { Button } from "@/components/ui/button";
import { useState,useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/effect-fade"; // Import EffectFade styles
import "swiper/css/autoplay"; // Import Autoplay styles
import "swiper/css/pagination"; // Import Pagination styles
import { EffectFade, Autoplay, Pagination } from "swiper/modules"; // Import necessary Swiper modules

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slides = [
    {
      url: "https://zenny.bzotech.com/wp-content/uploads/2024/08/h7-sli1.jpg",
      alt: "Citizen Promaster Marine",
      title: "Citizen Promaster Marine Collection",
      description:
        "The collection features a variety of designs, including models with depth meters, chronographs, and bold, easy-to-read dials.",
    },
    {
      url: "https://zenny.bzotech.com/wp-content/uploads/2024/08/h7-slide2.jpg",
      alt: "Omega Seamaster Diver",
      title: "Omega Seamaster Diver Collection",
      description:
        "Featuring ceramic bezels, wave-pattern dials, and luminescent hands and markers, the Seamaster Diver 300M is a perfect choice for both underwater exploration and everyday elegance.",
    },
    {
      url: "https://zenny.bzotech.com/wp-content/uploads/2024/08/h7-sli.jpg",
      alt: "Audemars Piguet Royal Oak",
      title: "Audemars Piguet Royal Oak Collection",
      description:
        "The collection is powered by finely finished mechanical movements, showcasing both technical excellence and avant-garde style.",
    },
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
  return (
    <section className="relative bg-black min-h-screen flex items-center overflow-hidden">
      <Swiper
        modules={[EffectFade, Autoplay, Pagination]} // Include all necessary modules
        effect="fade"
        fadeEffect={{ crossFade: true }} // Enable smooth cross-fade transition
        loop={true} // Enable infinite loop
        autoplay={{
          delay: 4000, // 5 seconds between slides
          disableOnInteraction: false, // Continue autoplay after user interaction
          pauseOnMouseEnter: true, // Pause on hover
        }}
        speed={1000} // Transition speed in ms
        grabCursor={true} // Show grab cursor on hover
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
        className="absolute inset-0 h-full w-full"
      >
         {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              src={slide.url}
              alt={slide.alt}
              className={`w-full h-full object-cover transition-transform duration-2000 ease-in-out ${
                index === currentSlide ? 'scale-110' : 'scale-100'
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
            <div className="max-w-2xl absolute  bottom-10 left-10 text-white z-10">
            <h1
            style={{fontFamily:'libre baskerville'}} 
              className={`text-5xl lg:text-6xl font-bold leading-tight mb-6 transition-all duration-1000 ease-in-out ${
                isAnimating 
                  ? 'opacity-0 translate-y-[-300px]' 
                  : 'opacity-100 translate-y-0'
              }`}
            >
              {slides[currentSlide].title}
            </h1>
            <p 
              className={`text-xl text-gray-200 mb-8 leading-relaxed transition-all duration-1000 ease-in-out delay-400 ${
                isAnimating 
                  ? 'opacity-0 translate-y-[-300px]' 
                  : 'opacity-100 translate-y-0'
              }`}
            >
              {slides[currentSlide].description}
            </p>
            <Button 
              variant="outline" 
              className={`bg-transparent border-white text-white hover:bg-white hover:text-black transition-all duration-1000 ease-in-out delay-600 px-10 py-4 text-lg font-bold ${
                isAnimating 
                  ? 'opacity-0 translate-y-[-300px]' 
                  : 'opacity-100 translate-y-0'
              }`}
            >
              Shop Now
            </Button>
          </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
