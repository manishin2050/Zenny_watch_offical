"use client";
import { categories } from "@/data/mockData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination } from "swiper/modules";

export default function Categories() {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            style={{ fontFamily: "libre baskerville" }}
            className="md:text-5xl text-3xl font-semibold text-primary mb-4"
          >
            Shop By Categories
          </h2>
        </div>

        {/* ✅ Carousel for mobile */}
        <div className="block lg:hidden">
          <Swiper
            modules={[Grid, Pagination]}
            spaceBetween={16}
            pagination={{ clickable: true }}
            grid={{ rows: 2, fill: "row" }}
            breakpoints={{
              320: { slidesPerView: 2 },
              480: { slidesPerView: 2 },
            }}
            className="pb-10" // ✅ space for dots
          >
            {categories.map((category) => (
              <SwiperSlide key={category.id}>
                <div className="group cursor-pointer mb-3">
                  <div className="relative overflow-hidden rounded-lg bg-accent">
                    <img
                      src={category.image}
                      alt={`${category.name} Collection`}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                  </div>
                  <div className="text-center mt-2">
                    <h3 className="text-sm md:text-lg font-medium text-primary hover:text-[#c58e46]">
                      {category.name}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ✅ Move dots down with margin */}
          <div className="swiper-pagination  mt-5 !relative"></div>
        </div>

        {/* ✅ Grid for desktop */}
        <div className="hidden lg:grid grid-cols-4 gap-8">
          {categories.map((category) => (
            <div key={category.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg bg-accent">
                <img
                  src={category.image}
                  alt={`${category.name} Collection`}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
              </div>
              <div className="text-center mt-4">
                <h3 className="text-xl font-medium text-primary hover:text-[#c58e46]">
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
