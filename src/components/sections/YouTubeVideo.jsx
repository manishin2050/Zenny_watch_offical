import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function YouTubeVideo() {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-[60vh] md:h-[90vh] md:w-full w-[90vw] mx-5 md:mx-0 overflow-hidden">
      <iframe
        src="https://www.youtube.com/embed/I3qP8pWDL08?autoplay=1&mute=1&loop=1&playlist=I3qP8pWDL08&controls=0&rel=0&modestbranding=1&showinfo=0&iv_load_policy=3&playsinline=1"
        title="Zenny Watch Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowFullScreen
        className="absolute top-0 w-[177.77vh] h-[60vh] md:h-[100vh]  -left-[calc((177.77vh-100vw)/2)]"
      ></iframe>
      <div className="absolute inset-0 md:left-24 flex items-end justify-start">
        <div className="text-left text-white p-2 pb-4 md:p-16 ">
          <h3 className="text-md md:text-lg font-light transition-all duration-1000 ease-in-out delay-100"
              style={{ transform: isAnimating ? 'translateY(0)' : 'translateY(60px)', opacity: isAnimating ? 1 : 0 }}>
            NEW ARRIVAL
          </h3>
          <h2 className="text-lg md:mb-2 md:text-4xl font-bold transition-all duration-1000 ease-in-out delay-200"
              style={{fontFamily:'libre baskerville', transform: isAnimating ? 'translateY(0)' : 'translateY(60px)', opacity: isAnimating ? 1 : 0 }}>
            Tag Heuer Carrera
          </h2>
          <p className="text-lg md:text-3xl font-bold mb-6 transition-all duration-1000 ease-in-out delay-300"
             style={{fontFamily:'libre baskerville', transform: isAnimating ? 'translateY(0)' : 'translateY(60px)', opacity: isAnimating ? 1 : 0 }}>
            Calibre Day-Date Chronograph
          </p>
          <Button 
            className={`bg-transparent border border-white text-white hover:bg-[#c58e46] hover:border-[#c58e46] transition-all duration-1000 ease-in-out delay-400 md:px-8 px-4 md:py-3 py-2 text-base md:text-lg font-thin`}
            style={{ transform: isAnimating ? 'translateY(0)' : 'translateY(60px)', opacity: isAnimating ? 1 : 0 }}
          >
            Shop Now
          </Button>
        </div>
      </div>
    </section>
  );
}
