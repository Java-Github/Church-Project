import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "./assets/logo.jpeg";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Ministries", href: "#ministries" },
    { label: "Events", href: "#events" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center gap-2">
              {/* This is the logo image: */}
              <img
                src={logo}
                alt="St' Paul Anglican Church Logo"
                className="w-8 h-8 rounded-full object-cover"
              />
              <span>St' Paul Anglican Church</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-blue-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition-colors"
            >
              Visit Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-blue-900"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block mt-4 bg-blue-900 text-white px-6 py-2 rounded-md text-center hover:bg-blue-800 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Visit Us
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
