import { reviews } from "@/data/mockData";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CustomerReviews() {
  return (
    <section className="py-20 relative bg-accent">
      <div className="max-w-7xl index-5 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {reviews.slice(0, 3).map((review) => (
            <div key={review.id} className="bg-secondary p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-amber-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-text-gray mb-4 leading-relaxed">
                {review.content}
              </p>
              <div className="flex items-center">
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
        
        {/* Watch Hero Image */}
        <div className="absolute inset-0 ">
          <img 
          src="https://zenny.bzotech.com/wp-content/uploads/2024/08/Frame-40.jpg"
            alt="Luxury watch collection showcase" 
            className="w-full h-96 object-cover rounded-xl shadow-lg" 
          />
        </div>
      </div>
    </section>
  );
}