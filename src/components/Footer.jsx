import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-200">
      
      


      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold tracking-wide text-white">
            MAK Design Solutions
          </h2>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Innovative engineering, reliable solutions.  
            We deliver product design, reverse engineering, prototyping & advanced 3D solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 border-b-2 border-green-500 inline-block pb-1 text-white">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li><a href="/" className="hover:text-green-400 transition">Home</a></li>
            <li><a href="/about/company" className="hover:text-green-400 transition">About Us</a></li>
            <li><a href="/services" className="hover:text-green-400 transition">Services</a></li>
            <li><a href="/industries" className="hover:text-green-400 transition">Industries</a></li>
            <li><a href="/contact" className="hover:text-green-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3 border-b-2 border-green-500 inline-block pb-1 text-white">
            Services
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li><a href="/services/reverse-engineering" className="hover:text-green-400 transition">Reverse Engineering</a></li>
            <li><a href="/services/prototyping" className="hover:text-green-400 transition">Prototyping</a></li>
            <li><a href="/services/3d-modeling" className="hover:text-green-400 transition">3D Modeling</a></li>
            <li><a href="/services/rendering" className="hover:text-green-400 transition">Rendering & Visualization</a></li>
            <li><a href="/services/fea" className="hover:text-green-400 transition">FEA Analysis</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <div className="mt-6 text-sm text-gray-400 space-y-1">
            <p>📍 Pune, Maharashtra, India</p>
            <p>📞 +91-XXXXXXXXXX</p>
            <p>✉️ hello@makdesign.in</p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 mt-5">
            {[
              { icon: <FaFacebookF />, href: "#" },
              { icon: <FaLinkedinIn />, href: "#" },
              { icon: <FaInstagram />, href: "#" },
              { icon: <FaYoutube />, href: "#" },
            ].map((s, idx) => (
              <a
                key={idx}
                href={s.href}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 hover:bg-green-600 transition shadow"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} MAK Design Solutions. All Rights Reserved.  
        <br />
        <span className="text-green-400">
          Designed by ArrayLogic Softwares Pvt. Ltd.
        </span>
      </div>
    </footer>
  );
}
