import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation on initial load
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const slides = [
    {
      url: "Women_Listing/V_2.jpg",
      alt: "Citizen Promaster Marine",
      title1: "Citizen Promaster",
      title2: " Marine Collection",
      description:
        "The collection features a variety of designs, including models with depth meters, chronographs, and bold, easy-to-read dials.",
    },
    {
      url: "Women_Listing/S_2.jpg",
      alt: "Omega Seamaster Diver",
      title1: "Omega Seamaster",
      title2: " Diver Collection",
      description:
        "Featuring ceramic bezels, wave-pattern dials, and luminescent hands and markers, the Seamaster Diver 300M is a perfect",
    },
    {
      url: "Women_Listing/Q_2.jpg",
      alt: "Audemars Piguet Royal Oak",
      title1: "Audemars Piguet ",
      title2: " Royal Oak Collection",
      description:
        "The collection is powered by finely finished mechanical movements, showcasing both technical excellence and avant-garde style.",
    },
  ];

  return (
    <section className="relative bg-black h-[50vh] md:h-[120vh] flex items-center overflow-hidden">
      <Swiper
        modules={[EffectFade, Autoplay, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1000}
        grabCursor={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
        className="absolute inset-0 h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              src={slide.url}
              alt={slide.alt}
              className={`w-full h-full object-cover animate-zoomInOut transition-transform duration-3000`}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
            <div
              className={`absolute md:bottom-52 bottom-8 left-3 md:left-12 w-full text-white px-8 py-6 rounded-lg
                flex flex-col items-start
                transition-all duration-1000
               `}
              style={{ fontFamily: "Libre Baskerville" }}
            >
              <h1 className={`text-xl md:text-6xl font-semibold leading-tight mb-3 md:mb-10 transition-all duration-1000
                ${
                  (currentSlide === index && isLoaded) 
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-[-100px]"
                }`}>
                <div className="leading-relaxed mb-0">{slide.title1}</div>
                <div>{slide.title2}</div>
              </h1>
              <p className={`text-sm md:text-lg font-sans text-gray-200 md:w-1/2 w-full mb-3 md:mb-10 delay-300 leading-relaxed transition-all duration-1000
                ${
                  (currentSlide === index && isLoaded)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-[-100px]"
                }`}>
                {slide.description}
              </p>
              <Button
                className={`bg-transparent border font-sans border-white delay-700 text-white hover:bg-white hover:text-black transition-all md:px-8 px-3 md:py-3 py-1 text-sm md:text-lg transition-all duration-1000
                ${
                  (currentSlide === index && isLoaded) 
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-[-100px]"
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
