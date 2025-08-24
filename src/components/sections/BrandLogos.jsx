"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function BrandLogos() {
  const brandImages = [
    "https://zenny.bzotech.com/wp-content/uploads/2024/08/brand1.png",
    "https://zenny.bzotech.com/wp-content/uploads/2024/08/brand2.png",
    "https://zenny.bzotech.com/wp-content/uploads/2024/08/brand3.png",
    "https://zenny.bzotech.com/wp-content/uploads/2024/08/brand4.png",
    "https://zenny.bzotech.com/wp-content/uploads/2024/08/brand5.png",
    "https://zenny.bzotech.com/wp-content/uploads/2024/08/brand6.png",
    "https://zenny.bzotech.com/wp-content/uploads/2024/08/brand7.png",
    "https://zenny.bzotech.com/wp-content/uploads/2024/08/brand8.png",
    "https://zenny.bzotech.com/wp-content/uploads/2024/08/brand9.png",
    "https://zenny.bzotech.com/wp-content/uploads/2024/08/brand10.png",
    "https://zenny.bzotech.com/wp-content/uploads/2024/08/brand2.png",
    "https://zenny.bzotech.com/wp-content/uploads/2024/08/brand11.png",
  ];

  // ✅ Group into 2x2 slides
  const chunkedBrands = [];
  for (let i = 0; i < brandImages.length; i += 4) {
    chunkedBrands.push(brandImages.slice(i, i + 4));
  }

  return (
    <section className="py-1 md:py-16 bg-secondary">
      <div className="px-6 mx-auto max-w-7xl">

        {/* ✅ Mobile Swiper */}
        <div className="md:hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
            }}
          >
            {chunkedBrands.map((group, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-2 gap-6">
                  {group.map((image, idx) => (
                    <div key={idx} className="flex justify-center items-center">
                      <img
                        src={image}
                        alt={`Brand ${index * 4 + idx + 1}`}
                        className="h-16 object-contain"
                      />
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}

            {/* ✅ Pagination dots with margin */}
            <div className="swiper-pagination mt-5"></div>
          </Swiper>
        </div>

        {/* ✅ Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {brandImages.map((image, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={image}
                alt={`Brand ${index + 1}`}
                className="h-16 object-contain"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
