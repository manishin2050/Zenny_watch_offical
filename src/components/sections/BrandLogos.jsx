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
    "https://zenny.bzotech.com/wp-content/uploads/2024/08/brand2.png", // Reusing first image to make 12 total
    "https://zenny.bzotech.com/wp-content/uploads/2024/08/brand11.png",
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="px-20 mx-auto ">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6  gap-8 items-center opacity-100">
          {brandImages.map((image, index) => (
            <div key={index} className="text-center flex justify-center items-center">
              <img 
                src={image} 
                alt={`Brand ${index + 1}`} 
                className=" object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
