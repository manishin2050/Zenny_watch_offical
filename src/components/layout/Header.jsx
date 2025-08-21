import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Heart, User, ShoppingBag, Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileMenu from "@/components/ui/MobileMenu";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-secondary border-b border-border sticky top-0 z-50">
        {/* Top Banner */}
        <div className="bg-highlight text-secondary text-center py-2 px-4">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center space-x-4 text-sm">
              <span>📞 +855-123-4547</span>
              <span>✉️ contact@example.com</span>
            </div>
            <div className="text-sm font-medium">
              Summer discount of 70%. SHOP NOW
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <span className="flex items-center">
                English <ChevronDown className="ml-1 h-3 w-3" />
              </span>
              <span className="flex items-center">
                USD <ChevronDown className="ml-1 h-3 w-3" />
              </span>
              <span>Need Help?</span>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/">
                <h1 className="text-2xl font-bold text-primary tracking-wider">ZENNY</h1>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link to="/">
                  <Button variant="ghost" className="text-primary hover:text-highlight transition-colors duration-200 px-3 py-2 text-sm font-medium">
                    HOME <ChevronDown className="ml-1 h-3 w-3" />
                  </Button>
                </Link>
                <Button variant="ghost" className="text-text-gray hover:text-highlight transition-colors duration-200 px-3 py-2 text-sm font-medium">
                  SHOP <ChevronDown className="ml-1 h-3 w-3" />
                </Button>
                <Button variant="ghost" className="text-text-gray hover:text-highlight transition-colors duration-200 px-3 py-2 text-sm font-medium">
                  COLLECTION <ChevronDown className="ml-1 h-3 w-3" />
                </Button>
                <Button variant="ghost" className="text-text-gray hover:text-highlight transition-colors duration-200 px-3 py-2 text-sm font-medium">
                  BLOG <ChevronDown className="ml-1 h-3 w-3" />
                </Button>
                <Button variant="ghost" className="text-text-gray hover:text-highlight transition-colors duration-200 px-3 py-2 text-sm font-medium">
                  PAGES <ChevronDown className="ml-1 h-3 w-3" />
                </Button>
                <Button variant="ghost" className="text-text-gray hover:text-highlight transition-colors duration-200 px-3 py-2 text-sm font-medium">
                  ELEMENTORS <ChevronDown className="ml-1 h-3 w-3" />
                </Button>
                <Button variant="ghost" className="text-highlight hover:text-primary transition-colors duration-200 px-3 py-2 text-sm font-medium">
                  SALE
                </Button>
              </div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="text-text-gray hover:text-highlight transition-colors duration-200">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-text-gray hover:text-highlight transition-colors duration-200">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-text-gray hover:text-highlight transition-colors duration-200">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-text-gray hover:text-highlight transition-colors duration-200 relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-highlight text-secondary text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
              </Button>
              
              {/* Mobile menu button */}
              <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden text-text-gray hover:text-highlight"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </nav>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}