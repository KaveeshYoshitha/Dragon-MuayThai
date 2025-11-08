import React from "react";
import {
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";
import { GiRotaryPhone } from "react-icons/gi";

const Contact: React.FC = () => {
  return (
    <section id="Contact" className="py-20 bg-black relative cursor-default">
      <div className="container mx-auto px-8 sm:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold mb-2">
              <span className="text-yellow-500">CONTACT US</span>
            </h2>
            <div className="w-20 h-1 bg-red-600 mb-6"></div>
            <p className="text-gray-300 mb-8">
              Have questions or ready to start your Muay Thai journey? Get in
              touch with us or visit our gym in Galle.
            </p>

            <div className="space-y-6 mb-8">
              {/* Location */}
              <div className="flex items-start">
                <div className="bg-yellow-500 p-3 rounded-md mr-4 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-gray-900" size={18} />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-white">Our Location</h4>
                  <p className="text-gray-300">
                    Dragon Muay Thai Club Galle, 50 Wakwella Rd, Galle 80000
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <div className="bg-yellow-500 p-3 rounded-md mr-4 flex items-center justify-center">
                  <GiRotaryPhone className="text-gray-900" size={16} />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-white">Phone</h4>
                  <p className="text-gray-300">077 233 3268</p>
                </div>
              </div>

              {/* Training Hours */}
              <div className="flex items-start">
                <div className="bg-yellow-500 p-3 rounded-md mr-4 flex items-center justify-center">
                  <FaClock className="text-gray-900" size={16} />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-white">Training Hours</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Monday: 7.00 PM - 9.30 PM <br />
                    Tuesday: 7.00 PM - 9.30 PM <br />
                    Thursday: 7.00 PM - 9.30 PM <br />
                    Friday: 7.00 PM - 9.30 PM <br />
                    Saturday: 7.00 PM - 9.30 PM <br />
                    Sunday: 7.00 PM - 9.30 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Book Button */}
            <div className="mt-8">
              <a
                href="tel:+94772333268"
                aria-label="Call Dragon Muay Thai Club"
                className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 rounded-md text-lg transition-all duration-300"
              >
                <FaPhoneAlt className="mr-3" size={18} aria-hidden="true" />
                Call to Book a Personal Training Session
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-10">
              <a
                href="https://www.facebook.com/profile.php?id=100065513502277&mibextid=wwXIfr&mibextid=wwXIfr"
                target="_blank"
                className="bg-gray-700 hover:bg-yellow-500 text-white hover:text-gray-900 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/dragonmuaythaigalle?igsh=Z2Y5bnBjeGxrcWk0"
                target="_blank"
                className="bg-gray-700 hover:bg-yellow-500 text-white hover:text-gray-900 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="https://wa.me/94772333268"
                target="_blank"
                className="bg-gray-700 hover:bg-yellow-500 text-white hover:text-gray-900 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Right Side (Google Map) */}
          <div className="bg-gray-800 p-2 rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Dragon Muay Thai Gym Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.691359119921!2d80.21360177474891!3d6.037023593948567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae173006dd79141%3A0x71054737a37fc69d!2sDragon%20Muay%20Thai%20Club%20Galle!5e0!3m2!1sen!2slk!4v1761659374886!5m2!1sen!2slk"
              width="100%"
              height="450"
              loading="lazy"
              allowFullScreen
              className="rounded-lg border-2 border-gray-700"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
