import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

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

  return (
    <section className="relative bg-black min-h-screen flex items-center overflow-hidden">
      <Swiper
        modules={[EffectFade, Autoplay, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
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
              className={`w-full h-full object-cover transition-transform duration-1000 ${
                currentSlide === index
                  ? "scale-105"
                  : "scale-100"
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
            <div
              className={`absolute bottom-12 left-12 max-w-xl text-white px-8 py-6 rounded-lg
                flex flex-col items-start
                transition-all duration-1000
                ${currentSlide === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
                }`}
              style={{ fontFamily: "Libre Baskerville" }}
            >
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
                {slide.title}
              </h1>
              <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                {slide.description}
              </p>
              <Button
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-all px-8 py-3 text-lg font-bold"
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
