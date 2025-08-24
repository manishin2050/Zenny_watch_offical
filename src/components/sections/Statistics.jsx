import { useEffect, useState, useRef } from "react";

export default function Statistics() {
  const stats = [
    { number: 25, suffix: "K+", label: "Satisfied Clients" },
    { number: 36, suffix: "K+", label: "Products Sold" },
    { number: 15, suffix: "+", label: "Years Experience" },
    { number: 100, suffix: "+", label: "Awards Winning" }
  ];

  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  // Detect when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect(); // Trigger only once
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Counter hook
  function useCountUp(end, duration = 3000, start = false) {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!start) return; // Only start when inView is true

      let startTime = performance.now();

      function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        if (elapsed < duration) {
          const progress = Math.min(elapsed / duration, 1);
          setCount(Math.floor(progress * end));
          requestAnimationFrame(updateCounter);
        } else {
          setCount(end);
        }
      }

      requestAnimationFrame(updateCounter);
    }, [end, duration, start]);

    return count;
  }

  return (
    <section
      ref={sectionRef}
      className="md:py-28 py-10 relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://zenny.bzotech.com/wp-content/uploads/2024/08/h7-bg-count3.jpg')"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-1">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => {
            const count = useCountUp(stat.number, 3000, inView);
            return (
              <div key={index} className="text-white">
                <div className="text-5xl font-bold mb-2">
                  {count}
                  {stat.suffix}
                </div>
                <div className="text-xl">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
