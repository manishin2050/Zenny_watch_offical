import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Heart, User, ShoppingBag, Menu, ChevronDown ,Home,Phone} from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileMenu from "@/components/ui/MobileMenu";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50">
        {/* Top bar */}
        <div className="  border-b-[1px] border-white/10 text-white py-3">
          <div className=" mx-auto px-4 sm:px-6 lg:px-8 flex justify-center md:justify-between items-center text-sm">
            <div className="md:block hidden flex space-x-4">
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
      <div className="mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-bold">
          <img 
            src="https://zenny.bzotech.com/wp-content/uploads/2024/08/h7-logo.png" 
            alt="Zenny Logo" 
            className="md:h-8 h-6 w-[50vw] md:w-auto"
          />
        </Link>

        {/* Desktop Menu (hidden on mobile) */}
        <div className="hidden lg:flex space-x-10 text-white">
          <Link to="/" className="hover:text-gray-300">HOME +</Link>
          <Link to="/shop" className="hover:text-gray-300">SHOP +</Link>
          <Link to="/collection" className="hover:text-gray-300">COLLECTION +</Link>
          <Link to="/blog" className="hover:text-gray-300">BLOG +</Link>
          <Link to="/pages" className="hover:text-gray-300">PAGES +</Link>
          <Link to="/elementors" className="hover:text-gray-300">ELEMENTORS +</Link>
          <Link to="/sale" className="hover:text-gray-300">SALE +</Link>
        </div>

        {/* Desktop Icons (hidden on mobile) */}
        <div className="hidden lg:flex space-x-8 text-white">
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

        {/* Mobile View → Only Shopping Bag + Hamburger */}
        <div className="flex lg:hidden items-center space-x-4 text-white">
          {/* Shopping Bag */}
          <button className="hover:text-gray-300 relative">
            <ShoppingBag className="h-6 w-6" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
          </button>
          {/* Hamburger */}
          <button className="hover:text-gray-300">
            <Menu className="h-6 w-6" />
          </button>
        </div>

      </div>
    </nav>
    <nav className="fixed  bottom-0 left-0 right-0 bg-[#634622] border-t border-gray-200 shadow-lg lg:hidden z-50">
      <div className="flex justify-between items-center px-6 py-2">
        
        {/* Home */}
        <button className="flex flex-col items-center text-white/90 hover:text-black">
          <Home className="h-6 w-6" />
          <span className="text-xs">Home</span>
        </button>

        {/* Search */}
        <button className="flex flex-col items-center text-white/90 hover:text-black">
          <Search className="h-6 w-6" />
          <span className="text-xs">Search</span>
        </button>

        {/* Shop */}
        <button className="flex flex-col items-center text-white/90 hover:text-black relative">
          <ShoppingBag className="h-6 w-6" />
          <span className="text-xs">Shop</span>
          {/* Cart count bubble */}
          <span className="absolute -top-1 right-3 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
        </button>

        {/* Phone */}
        <button className="flex flex-col items-center text-white/90 hover:text-black">
          <Phone className="h-6 w-6" />
          <span className="text-xs">Call</span>
        </button>

        {/* Hamburger */}
        <button className="flex flex-col items-center text-white/90 hover:text-black">
          <Menu className="h-6 w-6" />
          <span className="text-xs">Menu</span>
        </button>
      </div>
    </nav>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}