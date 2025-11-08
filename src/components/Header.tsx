import { useState } from "react";
import logo from "../assets/dragon-muaythai-logo.webp";
import wbc from "../assets/wbc-logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-transparent bg-opacity-95 transition-all duration-300">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-3">
            <img src={logo} alt="Dragon Muay Thai Logo" className="w-12 h-12" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-wider font-saira">
              <span className="text-red-500">DRAGON</span>{" "}
              <span className="text-white">MUAY THAI</span>
            </h1>
            <p className="text-xs text-[#f5cf11] tracking-widest">
              GALLE · SRI LANKA
            </p>
          </div>
          <div className="ml-3">
            <img src={wbc} alt="Dragon Muay Thai Logo" className="w-12 h-12" />
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {["Home", "About", "Coach", "Classes", "Testimonials", "Contact"].map(
            (item) => (
              <span
                key={item}
                className="nav-link text-white hover:text-[#f5cf11] transition-colors cursor-pointer"
              >
                <a href={`#${item}`}>{item}</a>
              </span>
            )
          )}
          <span className="btn-hover bg-red-500 text-white px-6 py-2 rounded-md font-bold tracking-wide hover:shadow-lg transition-all cursor-pointer">
            <a href="tel:+94772333268">JOIN NOW</a>
          </span>
        </nav>

        {/* Hamburger for Mobile */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/90 text-white py-4 px-6 space-y-3">
            <a
              href="#home"
              className="block hover:text-[#f5cf11]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="block hover:text-[#f5cf11]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#services"
              className="block hover:text-[#f5cf11]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#contact"
              className="block hover:text-[#f5cf11]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
