import { reviews } from "@/data/mockData";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CustomerReviews() {
  return (
    <section className="py-20 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="mt-16 relative">
          <img 
            src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600" 
            alt="Luxury watch collection showcase" 
            className="w-full h-96 object-cover rounded-xl shadow-lg" 
          />
          <div className="absolute inset-0 bg-black/40 rounded-xl flex items-center justify-center">
            <div className="text-center text-secondary">
              <h3 className="text-3xl font-light mb-4">STYLE AND SERENITY</h3>
              <p className="text-lg mb-6 max-w-md">
                With a sharp-edged, sophisticated design and the first-class course to anti-trenched, uncovered clamps enriching.
              </p>
              <Button 
                variant="outline" 
                className="bg-transparent border-secondary text-secondary hover:bg-secondary hover:text-primary transition-all duration-300 px-8 py-3 text-sm font-medium tracking-wide uppercase"
              >
                Explore Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}