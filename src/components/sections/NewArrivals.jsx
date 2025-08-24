import { products } from "@/data/mockData";
import ProductCard from "@/components/ui/ProductCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function NewArrivals() {
  const newProducts = products.slice(0, 8); // Get the first 8 products

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 style={{ fontFamily: 'libre baskerville' }} className="md:text-5xl text-2xl font-semibold text-primary mb-4">New Arrival Collection</h2>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}                // Gap between slides
          slidesPerView={2}                // Default (applies to mobile first)
          pagination={{ clickable: true }} // Pagination dots
          breakpoints={{
            640: {
              slidesPerView: 2,            // Small tablets
            },
            768: {
              slidesPerView: 3,            // Tablets
            },
            1024: {
              slidesPerView: 4,            // Desktops
            },
          }}
        >
          {newProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}