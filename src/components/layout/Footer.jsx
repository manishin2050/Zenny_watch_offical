import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRightToLine, Calendar, IdCard, IdCardIcon, Truck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-primary py-16 ">
      <div className="service md:flex justify-around md:mb-12 shadow-sm pt-8 md:pb-8">
        <div className="shipping flex  justify-start gap-4">
          <div className="flex gap-1 items-center">< Truck strokeWidth={1} className="h-10 w-16  text-primary hover:text-[#c58e46] transition-color duration-300" /></div>
          <div className="">
            <h5 className="font-bold mt-4">Free Shipping</h5>
            <h6 className="text-gray-600 text-sm " >Free shipping for orders</h6>
          </div>
        </div>
        <div className="shipping flex justify-start gap-4">
          <div className="flex gap-1 items-center">< IdCard strokeWidth={1} className="h-10 w-16  text-primary hover:text-[#c58e46] transition-color duration-300" /></div>
          <div className="">
            <h5 className="font-bold mt-4">Money Guarantee</h5>
            <h6 className="text-gray-600 text-sm " >Within 30 days</h6>
          </div>
        </div>
        <div className="shipping flex justify-start gap-4">
          <div className="flex gap-1 items-center">< Calendar strokeWidth={1} className="h-10 w-16  text-primary hover:text-[#c58e46] transition-color duration-300" /></div>
          <div className="">
            <h5 className="font-bold mt-4">Online Support</h5>
            <h6 className="text-gray-600 text-sm " >24 hours a day, 7 days a week</h6>
          </div>
        </div>
        <div className="shipping flex justify-start gap-4">
          <div className="flex gap-1 items-center">< IdCardIcon strokeWidth={1} className="h-10 w-16  text-primary hover:text-[#c58e46] transition-color duration-300" /></div>
          <div className="">
            <h5 className="font-bold mt-4">Flexible Payment</h5>
            <h6 className="text-gray-600 text-sm " >Pay with Multiple Credit Cards</h6>
          </div>
        </div>

      </div>
      <div className=" mx-auto px-4 sm:px-6 lg:px-10">






        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8 shadow-sm pt-8 pb-8">
          {/* Row 1 - Company Info */}
          <div className="order-1 lg:order-1">
            {/* Company Info */}
            <div>
              <h3 style={{ fontFamily: 'libre baskerville' }} className="text-5xl font-bold mb-6 tracking-wider">ZENNY</h3>
              <p className="text-gray-900 font-[10px]  mb-4">
                Get the latest updates on new products and upcoming sales
              </p>
              <div className="flex border border-gray-700 rounded-sm p-3 mb-4">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1   text-secondary border-gray-700 rounded-r-none focus:border-highlight"
                />
                <Button className="bg-primary p-5 hover:bg-[#c58e46] text-secondary rounded-l-none">
                  <ArrowRightToLine className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-gray-900 hover:text-[#c58e46] transition-colors duration-200">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-900 hover:text-[#c58e46] transition-colors duration-200">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-900 hover:text-[#c58e46] transition-colors duration-200">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.328-1.297L6.77 14.04c.636.749 1.568 1.217 2.607 1.217 1.916 0 3.47-1.554 3.47-3.47s-1.554-3.47-3.47-3.47c-1.039 0-1.97.468-2.607 1.217L5.121 7.883c.88-.808 2.031-1.297 3.328-1.297 2.726 0 4.939 2.213 4.939 4.939s-2.213 4.939-4.939 4.939z" />
                  </svg>
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-900 hover:text-[#c58e46] transition-colors duration-200">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </Button>
              </div>
            </div>

          </div>

          {/* Row 2 - Quick Links + Customer Service on Mobile */}
          <div className="flex flex-row  gap-2 order-2 lg:col-span-2 lg:flex lg:flex-row lg:order-2">
            {/* Quick Links */}
            <div className=" w-[10vw] flex-1">
              {/* Quick Links */}
              <div>
                <h4 style={{ fontFamily: 'libre baskerville' }} className="text-lg font-semibold mb-6">About Us</h4>
                <ul className="space-y-3  text-sm ">
                  <li><Link to="/about" className="text-gray-900 hover:text-[#c58e46] transition-colors duration-200">About Us</Link></li>
                  <li><Link to="/shop" className="text-gray-900 hover:text-[#c58e46] transition-colors duration-200">Shop</Link></li>
                  <li><Link to="/collections" className="text-gray-900 hover:text-[#c58e46] transition-colors duration-200">Collections</Link></li>
                  <li><Link to="/blog" className="text-gray-900 hover:text-[#c58e46] transition-colors duration-200">Blog</Link></li>
                  <li><Link to="/contact" className="text-gray-900 hover:text-[#c58e46] transition-colors duration-200">Contact</Link></li>
                </ul>
              </div>
            </div>

            {/* Customer Service */}
            <div className=" w-[10vh] flex-1">
              {/* Customer Service */}
              <div>
                <h4 style={{ fontFamily: 'libre baskerville' }} className="text-lg font-semibold mb-6">More Info</h4>
                <ul className="space-y-3  text-sm ">
                  <li><Link to="/size-guide" className="text-gray-900 hover:text-[#c58e46] transition-colors duration-200">Size Guide</Link></li>
                  <li><Link to="/shipping" className="text-gray-900 hover:text-[#c58e46] transition-colors duration-200">Shipping Info</Link></li>
                  <li><Link to="/returns" className="text-gray-900 hover:text-[#c58e46] transition-colors duration-200">Returns</Link></li>
                  <li><Link to="/privacy" className="text-gray-900 hover:text-[#c58e46] transition-colors duration-200">Privacy Policy</Link></li>
                  <li><Link to="/terms" className="text-gray-900 hover:text-[#c58e46] transition-colors duration-200">Terms & Conditions</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Row 3 - Newsletter */}
          <div className="order-3 lg:order-4">
            {/* Newsletter */}
            <div>
              <h4 style={{ fontFamily: 'libre baskerville' }} className="text-lg font-semibold mb-6">Got Question? Call us 24/7</h4>
              <p className="text-sm  text-gray-900 hover:text-[#c58e46] mb-4"> 1234 Fashion Street, Suite 567, New York, NY</p>
              <p className="text-sm  text-gray-900 hover:text-[#c58e46] mb-4"> contact@example.com</p>
              <p className="text-sm  text-gray-900 hover:text-[#c58e46] mb-4"> +84 (212)555-1234</p>
              <p className="text-sm  text-gray-900 font-bold mb-1"> Working hours:</p>
              <p className="text-sm  text-gray-900  mb-4"> Mon – Sat 9.00 – 18.00</p>

            </div>
          </div>
        </div>








        <div className=" mt-12 pt-8 text-center">
          <p className="text-gray-700 text-sm">&copy; 2024 ZENNY. All rights reserved. | Designed with luxury in mind.</p>
        </div>
      </div>
    </footer>
  );
}