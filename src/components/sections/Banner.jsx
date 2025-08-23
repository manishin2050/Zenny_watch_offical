import { useState, useEffect } from "react";
export default function Banner() {
    const images = [
    "https://zenny.bzotech.com/wp-content/uploads/2024/08/h7-bn3.jpg",
    "https://zenny.bzotech.com/wp-content/uploads/2024/08/h7-bn4.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 4s
  useEffect(() => {
    // const interval = setInterval(() => {
    //   setCurrentIndex((prev) => (prev + 1) % images.length);
    // }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-[120vh] w-full px-10  py-5" >

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative group cursor-pointer h-[400px] min-w-[200px]">
          <div className="relative overflow-hidden">
            <img
              className="group-hover:scale-105 transition-transform duration-300 bg-cover bg-center"
              src="https://zenny.bzotech.com/wp-content/uploads/2024/08/h7-bn1.jpg"
              alt=""
            />

            {/* Borders */}
            {/* Top */}
            <span className="absolute top-5 left-5 right-5 h-[1px] bg-white 
                     scale-x-0 origin-center transition-transform duration-700 group-hover:scale-x-100"></span>
            {/* Bottom */}
            <span className="absolute bottom-5 left-5 right-5 h-[1px] bg-white 
                     scale-x-0 origin-center transition-transform duration-700 group-hover:scale-x-100"></span>
            {/* Left */}
            <span className="absolute top-5 bottom-5 left-5 w-[1px] bg-white 
                     scale-y-0 origin-center transition-transform duration-700 group-hover:scale-y-100"></span>
            {/* Right */}
            <span className="absolute top-5 bottom-5 right-5 w-[1px] bg-white 
                     scale-y-0 origin-center transition-transform duration-700 group-hover:scale-y-100"></span>
          </div>
        </div>

        <div className="relative group cursor-pointer h-[400px] min-w-[200px]">
          <div className="relative overflow-hidden">
            <img
              className="group-hover:scale-105 transition-transform duration-300 bg-cover bg-center"
              src="https://zenny.bzotech.com/wp-content/uploads/2024/08/h7-bn2.jpg"
              alt=""
            />

            {/* Borders */}
            {/* Top */}
            <span className="absolute top-5 left-5 right-5 h-[1px] bg-white 
                     scale-x-0 origin-center transition-transform duration-700 group-hover:scale-x-100"></span>
            {/* Bottom */}
            <span className="absolute bottom-5 left-5 right-5 h-[1px] bg-white 
                     scale-x-0 origin-center transition-transform duration-700 group-hover:scale-x-100"></span>
            {/* Left */}
            <span className="absolute top-5 bottom-5 left-5 w-[1px] bg-white 
                     scale-y-0 origin-center transition-transform duration-700 group-hover:scale-y-100"></span>
            {/* Right */}
            <span className="absolute top-5 bottom-5 right-5 w-[1px] bg-white 
                     scale-y-0 origin-center transition-transform duration-700 group-hover:scale-y-100"></span>
          </div>
        </div>

      </div>
   <div className="relative w-full min-h-[400px] mt-4 overflow-hidden">
      {/* Images */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="w-full min-h-[400px] flex-shrink-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === i ? "bg-white" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </div>



    </section>
  );
}