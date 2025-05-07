// components/Footer.jsx
import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";

const FooterNuwara = () => {
  return (
    <footer className="w-full bg-[#efeded] text-black pt-12 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* About Section */}
        <div>
          <h3 className="font-serif text-2xl font-bold mb-4">F A B C E Y L O N</h3>
          <p className="text-sm text-black-300 leading-relaxed">
            Fab Ceylon offers an authentic Sri Lankan culinary experience with a modern twist.
            Our restaurants provide warm hospitality and delicious cuisine across multiple locations.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-serif text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Menu", path: "/menu" },
              { name: "Contact", path: "/contact" },
            ].map((link) => (
              <li key={link.path}>
                <Link href={link.path} className="text-black-300 hover:text-orange-500 transition duration-300">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Locations */}
        <div>
          <h3 className="font-serif text-xl font-bold mb-4">Our Locations</h3>
          <ul className="space-y-2 text-black-300">
            <li>Cafe Nuwara</li>
            <li>Fab Ceylon Kandy</li>
            <li>Fab Ceylon Grand</li>
            <li>Fab Ceylon Kurunegala</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-serif text-xl font-bold mb-4">Contact Us</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Phone size={16} className="text-black-500" />
              <span className="text-black-300 text-sm">+94 11 123 4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={16} className="text-black-500" />
              <span className="text-black-300 text-sm">info@fabceylon.com</span>
            </div>
            <div className="flex space-x-4 pt-2">
              <Facebook className="w-5 h-5 text-black-300 hover:text-orange-500 transition-colors" />
              <Instagram className="w-5 h-5 text-black-300 hover:text-orange-500 transition-colors" />
              <Twitter className="w-5 h-5 text-black-300 hover:text-orange-500 transition-colors" />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-10 pt-6 text-center">
        <p className="text-sm text-black-400">
          &copy; {new Date().getFullYear()} Fab Ceylon. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterNuwara;
