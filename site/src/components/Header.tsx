import { Search, Globe, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-10 text-sm">
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                How to buy
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                Partners
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                Support
              </a>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                <User size={16} className="mr-2" />
                Log in
              </a>
              <div className="flex items-center text-gray-600">
                <Globe size={16} className="mr-2" />
                EN AU
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <img
                  src="https://ext.same-assets.com/1364585098/1623720687.svg"
                  alt="Cisco"
                  className="h-10 w-auto"
                />
              </a>
            </div>

            {/* Navigation menu */}
            <nav className="hidden lg:flex items-center space-x-8">
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 font-medium py-8 border-b-2 border-transparent hover:border-blue-600 transition-all duration-200">
                  Products and Services
                </button>
              </div>
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 font-medium py-8 border-b-2 border-transparent hover:border-blue-600 transition-all duration-200">
                  Solutions
                </button>
              </div>
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 font-medium py-8 border-b-2 border-transparent hover:border-blue-600 transition-all duration-200">
                  Support
                </button>
              </div>
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 font-medium py-8 border-b-2 border-transparent hover:border-blue-600 transition-all duration-200">
                  Learn
                </button>
              </div>
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 font-medium py-8 border-b-2 border-transparent hover:border-blue-600 transition-all duration-200">
                  Why Cisco
                </button>
              </div>
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="p-3 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-full transition-all duration-200">
                  <Search size={20} />
                </button>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-200">
                Get started
              </Button>
              <button className="lg:hidden p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-all duration-200">
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
