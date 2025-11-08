import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-6 text-center text-gray-400">
      <div className="container mx-auto px-6">
        <h3 className="text-xl font-bold text-yellow-500 mb-2">
          Dragon Muay Thai Club Galle
        </h3>
        <p className="text-gray-400 text-sm mb-4">
          © {new Date().getFullYear()} All Rights Reserved | Built with Strength
          & Discipline by{" "}
          <a
            className="text-[#00BFA6]"
            href="https://www.yoshiwave.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            YoshiWave{" "}
          </a>{" "}
          🥊
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://www.facebook.com/profile.php?id=100065513502277&mibextid=wwXIfr&mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-yellow-500 text-white hover:text-gray-900 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/dragonmuaythaigalle?igsh=Z2Y5bnBjeGxrcWk0"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-yellow-500 text-white hover:text-gray-900 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/94772333268"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-yellow-500 text-white hover:text-gray-900 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
