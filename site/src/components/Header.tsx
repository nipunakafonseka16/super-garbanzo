import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Globe, User } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full">
      {/* Top utility bar */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center h-10 text-sm">
            <div className="flex items-center space-x-6">
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                How to buy
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Partners
              </Link>
              <Link href="#" className="flex items-center text-gray-600 hover:text-gray-900">
                <User size={16} className="mr-1" />
                Log in
              </Link>
              <div className="flex items-center text-gray-600">
                <Globe size={16} className="mr-1" />
                EN AU
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <img
                  src="https://ext.same-assets.com/1364585098/1623720687.svg"
                  alt="Cisco"
                  className="h-8 w-auto"
                />
              </Link>
            </div>

            {/* Navigation menu */}
            <nav className="hidden md:flex items-center space-x-8">
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 font-medium">
                  Products and Services
                </button>
              </div>
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 font-medium">
                  Solutions
                </button>
              </div>
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 font-medium">
                  Support
                </button>
              </div>
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 font-medium">
                  Learn
                </button>
              </div>
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 font-medium">
                  Why Cisco
                </button>
              </div>
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 font-medium">
                  Explore Cisco
                </button>
              </div>
            </nav>

            {/* Search */}
            <div className="flex items-center">
              <div className="relative">
                <button className="p-2 text-gray-600 hover:text-gray-900">
                  <Search size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
