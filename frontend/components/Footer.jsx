// components/Footer.jsx
import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#111010] text-white py-12 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Section */}
        <div className="space-y-4">
          <h3 className="font-serif text-2xl font-bold mb-4">F A B C E Y L O N</h3>
          <p className="text-sm text-gray-300">
            Fab Ceylon offers an authentic Sri Lankan culinary experience with a modern twist.
            Our restaurants provide warm hospitality and delicious cuisine across multiple locations.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="font-serif text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-gray-300 hover:text-orange-500 transition duration-300">Home</Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-300 hover:text-orange-500 transition duration-300">About Us</Link>
            </li>
            <li>
              <Link href="/menu" className="text-gray-300 hover:text-orange-500 transition duration-300">Menu</Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-300 hover:text-orange-500 transition duration-300">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Locations */}
        <div className="space-y-4">
          <h3 className="font-serif text-xl font-bold mb-4">Our Locations</h3>
          <ul className="space-y-2">
            <li className="text-gray-300">Cafe Nuwara</li>
            <li className="text-gray-300">Fab Ceylon Kandy</li>
            <li className="text-gray-300">Fab Ceylon Grand</li>
            <li className="text-gray-300">Fab Ceylon Kurunegala</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="font-serif text-xl font-bold mb-4">Contact Us</h3>
          <div className="flex items-center space-x-2">
            <Phone size={16} className="text-orange-500" />
            <span className="text-gray-300">+94 11 123 4567</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail size={16} className="text-orange-500" />
            <span className="text-gray-300">info@fabceylon.com</span>
          </div>
          <div className="flex space-x-4 mt-4">
            <Facebook className="w-5 h-5 text-gray-300 hover:text-orange-500 cursor-pointer transition-colors" />
            <Instagram className="w-5 h-5 text-gray-300 hover:text-orange-500 cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 text-gray-300 hover:text-orange-500 cursor-pointer transition-colors" />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-8 text-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Fab Ceylon. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
