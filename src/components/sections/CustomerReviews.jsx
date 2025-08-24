"use client";
import { reviews } from "@/data/mockData";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function CustomerReviews() {
  return (
    <section 
      className=" relative bg-accent overflow-hidden"
      style={{
        backgroundImage: "url('https://zenny.bzotech.com/wp-content/uploads/2024/08/Frame-40.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="relative z-10 min-h-[600px] ">
        <div className="pt-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* ✅ Mobile Swiper */}
          <div className="md:hidden">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
            >
              {reviews.slice(0, 3).map((review) => (
                <SwiperSlide key={review.id}>
                  <div className="bg-secondary p-4 h-[50vh] shadow-sm backdrop-blur-sm bg-opacity-90">
                    <div className="flex items-center mb-4">
                      <div className="flex text-amber-400">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-900 mb-4 pb-8">
                      {review.content}
                    </p>
                    <div className="flex items-center ">
                      <div className="w-10 h-10 bg-amber-400  flex items-center justify-center text-primary font-semibold mr-3">
                        {review.customerName.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium text-primary">{review.customerName}</div>
                        {review.customerTitle && (
                          <div className="text-sm text-text-gray">{review.customerTitle}</div>
                        )}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* ✅ Desktop Grid */}
          <div className="hidden md:grid grid-cols-1 lg:grid-cols-5 gap-8">
            {reviews.slice(0, 3).map((review) => (
              <div key={review.id} className="bg-secondary p-2 rounded-lg shadow-sm backdrop-blur-sm bg-opacity-90">
                <div className="flex items-center mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-900 mb-4 pb-8 font-[la-regular] leading-relaxed">
                  {review.content}
                </p>
                <div className="flex items-center ">
                  <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center text-primary font-semibold mr-3">
                    {review.customerName.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium text-primary">{review.customerName}</div>
                    {review.customerTitle && (
                      <div className="text-sm text-text-gray">{review.customerTitle}</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
