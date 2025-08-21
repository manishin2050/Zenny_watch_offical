import { X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose}></div>
      <div className="fixed right-0 top-0 h-full w-80 bg-secondary shadow-lg">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold text-primary">Menu</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <nav className="p-4">
          <div className="space-y-4">
            <Link to="/">
              <Button variant="ghost" className="w-full justify-between text-primary hover:text-highlight" onClick={onClose}>
                HOME <ChevronDown className="h-4 w-4" />
              </Button>
            </Link>
            <Button variant="ghost" className="w-full justify-between text-text-gray hover:text-highlight">
              SHOP <ChevronDown className="h-4 w-4" />
            </Button>
            <Button variant="ghost" className="w-full justify-between text-text-gray hover:text-highlight">
              COLLECTION <ChevronDown className="h-4 w-4" />
            </Button>
            <Button variant="ghost" className="w-full justify-between text-text-gray hover:text-highlight">
              BLOG <ChevronDown className="h-4 w-4" />
            </Button>
            <Button variant="ghost" className="w-full justify-between text-text-gray hover:text-highlight">
              PAGES <ChevronDown className="h-4 w-4" />
            </Button>
            <Button variant="ghost" className="w-full justify-between text-text-gray hover:text-highlight">
              ELEMENTORS <ChevronDown className="h-4 w-4" />
            </Button>
            <Button variant="ghost" className="w-full justify-between text-highlight hover:text-primary">
              SALE
            </Button>
          </div>
        </nav>
      </div>
    </div>
  );
}