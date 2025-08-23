import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import BrandLogos from "@/components/sections/BrandLogos";
import Categories from "@/components/sections/Categories";
import NewArrivals from "@/components/sections/NewArrivals";
import Statistics from "@/components/sections/Statistics";
import PopularModels from "@/components/sections/PopularModels";
import CustomerReviews from "@/components/sections/CustomerReviews";
import News from "@/components/sections/News";
import YouTubeVideo from "../components/sections/YouTubeVideo";
import Banner from "../components/sections/Banner";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <BrandLogos />
        <Categories />
        <YouTubeVideo />
        <NewArrivals />
        <Statistics />
        <PopularModels />
        <Banner />
        <News />
        <CustomerReviews />
      </main>
      <Footer />
    </div>
  );
}