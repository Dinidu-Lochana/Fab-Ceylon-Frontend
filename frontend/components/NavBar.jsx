'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, User } from 'lucide-react';
import { useRouter } from 'next/navigation';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulate auth
  const router = useRouter();

  // Example: fetch login status from localStorage (replace with real logic)
  useEffect(() => {
    const token = localStorage.getItem('authToken'); // Or whatever you use
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Clear auth token
    setIsLoggedIn(false);
    router.push('/'); // Redirect to home
  };

  const handleRegister = () => {
    router.push('/signup'); // Navigate to sign-up page
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-orange-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-white">
              FAB<span className="text-orange-500">CEYLON</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="text-white hover:text-orange-500 text-sm font-medium transition-colors">
              Home
            </Link>
            <Link href="#locations" className="text-white hover:text-orange-500 text-sm font-medium transition-colors">
              Locations
            </Link>

            {/* Dropdown Menu */}
            <div className="relative group">
              <div className="text-white hover:text-orange-500 text-sm font-medium cursor-pointer">
                Menu
              </div>
              <div className="absolute left-0 mt-0 w-56 bg-transparent border border-orange-500/30 backdrop-blur-md rounded-lg shadow-lg hidden group-hover:block z-50 transition-all">
                <Link href="/cafenuwara/menu/appetizers" className="block px-4 py-2 text-white hover:bg-orange-500/20 hover:text-orange-400 transition">
                  Cafe Nuwara
                </Link>
                <Link href="/fabceylon-kandy/menu/appetizers" className="block px-4 py-2 text-white hover:bg-orange-500/20 hover:text-orange-400 transition">
                  Fabceylon Kandy
                </Link>
                <Link href="/fabceylon-grand/menu/appetizers" className="block px-4 py-2 text-white hover:bg-orange-500/20 hover:text-orange-400 transition">
                  Fabceylon Grand
                </Link>
                <Link href="/fabceylon-kurunegala/menu/appetizers" className="block px-4 py-2 text-white hover:bg-orange-500/20 hover:text-orange-400 transition">
                  Fabceylon Kurunegala
                </Link>
              </div>
            </div>

            <Link href="#about" className="text-white hover:text-orange-500 text-sm font-medium transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-white hover:text-orange-500 text-sm font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* Right Section - Register or User Icon */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="flex items-center space-x-2">
                <User className="text-white" size={22} />
                <button
                  onClick={handleLogout}
                  className="text-white hover:text-orange-500 text-sm font-medium transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={handleRegister}
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1.5 rounded text-sm font-semibold transition"
              >
                Register
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-orange-500 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 rounded-lg mt-2">
              <Link href="#home" className="text-white hover:text-orange-500 block px-3 py-2 text-base font-medium">
                Home
              </Link>
              <Link href="#locations" className="text-white hover:text-orange-500 block px-3 py-2 text-base font-medium">
                Locations
              </Link>

              <details className="group">
                <summary className="text-white hover:text-orange-500 block px-3 py-2 text-base font-medium cursor-pointer">
                  Menu
                </summary>
                <div className="pl-4">
                  <Link href="/cafenuwara/menu" className="block px-3 py-2 text-white hover:text-orange-400 text-sm">
                    Café Nuwara
                  </Link>
                  <Link href="/fabceylon-kandy/menu" className="block px-3 py-2 text-white hover:text-orange-400 text-sm">
                    Fabceylon Kandy
                  </Link>
                  <Link href="/fabceylon-grand/menu" className="block px-3 py-2 text-white hover:text-orange-400 text-sm">
                    Fabceylon Grand
                  </Link>
                  <Link href="/fabceylon-kurunegala/menu" className="block px-3 py-2 text-white hover:text-orange-400 text-sm">
                    Kurunegala
                  </Link>
                </div>
              </details>

              <Link href="#about" className="text-white hover:text-orange-500 block px-3 py-2 text-base font-medium">
                About
              </Link>
              <Link href="#contact" className="text-white hover:text-orange-500 block px-3 py-2 text-base font-medium">
                Contact
              </Link>

              {/* Mobile Register/Logout */}
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="w-full text-left text-white hover:text-orange-500 block px-3 py-2 text-base font-medium"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={handleRegister}
                  className="w-full text-left text-white hover:text-orange-500 block px-3 py-2 text-base font-medium"
                >
                  Register
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
