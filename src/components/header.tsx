import { useState } from 'react';
import { Button } from './ui/button';
import { ShoppingCart, LayoutDashboard } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-xl font-bold text-black">Coffe Bucks</div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {/* <a href="#" className="text-black">Home</a>
            <a href="#" className="text-black">About</a>
            <a href="#" className="text-black">Services</a>
            <a href="#" className="text-black">Contact</a> */}
          </nav>

          {/* CTA */}
          <div className="flex items-center space-x-5">
            <div className="hidden md:block">
              <Button className="bg-blue-600 text-white hover:bg-blue-700">
                <ShoppingCart className="w-5 h-5" />
                    Cart
              </Button>
            </div>
            <div className="hidden md:block">
              <Button className="bg-blue-600 text-white hover:bg-blue-700">
                <LayoutDashboard className="w-5 h-5" />
                    Dashboard
              </Button>
            </div>
            <div className="hidden md:block">
              <Button className="bg-blue-600 text-white hover:bg-blue-700">
                <LayoutDashboard className="w-5 h-5" />
                    History
              </Button>
            </div>
            <div className="hidden md:block">
              <Button className="bg-blue-600 text-white hover:bg-blue-700">
                <LayoutDashboard className="w-5 h-5" />
                    Export
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 z-50 bg-white shadow-md md:hidden px-4 pb-4 space-y-2">
          {/* <nav className="space-y-2">
            <a href="#" className="block text-black">Home</a>
            <a href="#" className="block text-black">About</a>
            <a href="#" className="block text-black">Services</a>
            <a href="#" className="block text-black">Contact</a>
          </nav> */}
          <div className="pt-2 space-y-2">
            <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                <ShoppingCart className="w-5 h-5" />
                    Cart
            </Button>
            <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                <LayoutDashboard className="w-5 h-5" />
                    Dashboard
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
