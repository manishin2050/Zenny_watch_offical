import { useState, useEffect } from "react";

export default function Banner() {
  const images = [
    "https://zenny.bzotech.com/wp-content/uploads/2024/08/h7-bn3.jpg",
    "https://zenny.bzotech.com/wp-content/uploads/2024/08/h7-bn4.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative md:mb-20 md:h-[120vh] w-full px-4 md:p-20 sm:px-6 py-6">
      {/* Top Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          "https://zenny.bzotech.com/wp-content/uploads/2024/08/h7-bn1.jpg",
          "https://zenny.bzotech.com/wp-content/uploads/2024/08/h7-bn2.jpg",
        ].map((src, i) => (
          <div
            key={i}
            className="relative group cursor-pointer h-[250px] sm:h-[350px] md:h-[400px]"
     >
            <div className="relative overflow-hidden w-full h-full ">
              <img
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                src={src}
                alt=""
              />

              {/* Animated Borders */}
              <span className="absolute top-5 left-5 right-5 h-[1px] bg-white scale-x-0 origin-center transition-transform duration-700 group-hover:scale-x-100"></span>
              <span className="absolute bottom-5 left-5 right-5 h-[1px] bg-white scale-x-0 origin-center transition-transform duration-700 group-hover:scale-x-100"></span>
              <span className="absolute top-5 bottom-5 left-5 w-[1px] bg-white scale-y-0 origin-center transition-transform duration-700 group-hover:scale-y-100"></span>
              <span className="absolute top-5 bottom-5 right-5 w-[1px] bg-white scale-y-0 origin-center transition-transform duration-700 group-hover:scale-y-100"></span>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel (Mobile + Desktop) */}
      <div className="hidden md:block relative w-full min-h-[250px] sm:min-h-[300px] md:min-h-[400px] mt-6 overflow-hidden  shadow-md">
        {/* Images */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="w-full min-h-[250px] sm:min-h-[300px] md:min-h-[400px] flex-shrink-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-colors duration-300 ${
                currentIndex === i ? "bg-white" : "bg-[#c58e46]"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
