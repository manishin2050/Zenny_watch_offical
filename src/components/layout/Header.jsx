import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Heart, User, ShoppingBag, Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileMenu from "@/components/ui/MobileMenu";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50">
        {/* Top bar */}
        <div className="bg-black/50 text-white py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
            <div className="flex space-x-4">
              <span>+855-123-4547</span>
              <span>contact@example.com</span>
            </div>
            <div className="flex space-x-4">
              <span>English</span>
              <span>USD</span>
              <span>Need Help?</span>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <nav className="bg-transparent py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <Link to="/" className="text-white text-2xl font-bold">ZENNY</Link>
            <div className="flex space-x-6 text-white">
              <Link to="/" className="hover:text-gray-300">HOME</Link>
              <Link to="/shop" className="hover:text-gray-300">SHOP</Link>
              <Link to="/collection" className="hover:text-gray-300">COLLECTION</Link>
              <Link to="/blog" className="hover:text-gray-300">BLOG</Link>
              <Link to="/pages" className="hover:text-gray-300">PAGES</Link>
              <Link to="/elementors" className="hover:text-gray-300">ELEMENTORS</Link>
              <Link to="/sale" className="hover:text-gray-300">SALE</Link>
            </div>
            <div className="flex space-x-4 text-white">
              <button className="hover:text-gray-300">
                <Search className="h-5 w-5" />
              </button>
              <button className="hover:text-gray-300">
                <Heart className="h-5 w-5" />
              </button>
              <button className="hover:text-gray-300">
                <User className="h-5 w-5" />
              </button>
              <button className="hover:text-gray-300 relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
              </button>
            </div>
          </div>
        </nav>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}