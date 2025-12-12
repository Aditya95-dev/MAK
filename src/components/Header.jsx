import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function NavbarCyan() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const services = [
    { name: "Product Design & DVA", path: "/services/product-design-dva", icon: "" },
    { name: "Reverse Engineering", path: "/services/reverse-engineering", icon: "" },
    { name: "3D scanning & Product Benchmarking", path: "/services/3d-scanning-benchmarking", icon: "" },
    { name: "CAD data conversion", path: "/services/cad-data-conversion", icon: "" },
    {
      name: "Finite Element Analysis (FEA)", path: "/services/fea", icon: ""
    },
    { name: "3D Printing/Rapid prototyping", path: "/services/3d-printing-rapid-prototyping", icon: "" },
    { name: "Manufacturing/Prototyping", path: "/services/manufacturing-prototyping", icon: "" },
    { name: "Product rendering ", path: "/services/product-rendering-technical-animation", icon: "" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-md" ref={dropdownRef}>
      {/* Top Contact Bar */}
      <div className="w-full bg-gradient-to-r from-[#062a66] to-[#6ca3de] text-white text-sm py-2.5 px-6 flex justify-between items-center">
        <div className="flex gap-6 font-semibold">
          <p className="flex items-center gap-2">📞 +91-9876543210</p>
          <p className="flex items-center gap-2">✉️ contact@makdesignsolutions.com</p>
        </div>

        <div className="hidden md:flex gap-4 font-semibold">
          <a href="#" className="hover:underline transition">LinkedIn</a>
          <a href="#" className="hover:underline transition">Instagram</a>
          <a href="#" className="hover:underline transition">Facebook</a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between py-5 px-6 relative">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="w-28 h-24 md:w-32 md:h-10 rounded-lg overflow-hidden">
            <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
          </div>
        </div>

        {/* Hamburger for mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-700 focus:outline-none p-2"
          >
            {mobileMenuOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 items-center text-base font-semibold text-gray-700">
          <a href="/" className="hover:text-[#062a66] transition-colors duration-200 py-2">Home</a>
          <a href="/about" className="hover:text-[#062a66] transition-colors duration-200 py-2">About</a>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("services")}
              className="flex items-center gap-1 hover:text-[#062a66] transition-colors duration-200 py-2"
            >
              Services
              <ChevronDown
                size={18}
                className={`transition-transform duration-200 ${openDropdown === "services" ? "rotate-180" : ""}`}
              />
            </button>
            {openDropdown === "services" && (
              <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-2xl w-80 overflow-hidden animate-[fadeIn_0.2s_ease-out]">

                <div className="max-h-96 overflow-y-auto">
                  {services.map((service, index) => (
                    <a
                      key={service.name}
                      href={service.path}
                      className={`flex items-start gap-3 px-5 py-3.5 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all duration-200 group ${index !== services.length - 1 ? "border-b border-gray-100" : ""
                        }`}
                    >
                      <span className="text-2xl mt-0.5 group-hover:scale-110 transition-transform duration-200">
                        {service.icon}
                      </span>
                      <span className="text-gray-700 font-medium group-hover:text-[#062a66] transition-colors">
                        {service.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* <a href="/case-studies" className="hover:text-[#062a66] transition-colors duration-200 py-2">Case Studies</a> */}
          {/* <a href="/process" className="hover:text-[#062a66] transition-colors duration-200 py-2">Process</a> */}
          <a href="/blog" className="hover:text-[#062a66] transition-colors duration-200 py-2">Blog</a>
          <a href="/contact" className="hover:text-[#062a66] transition-colors duration-200 py-2">Contact</a>

          <a
            href="/contact"
            className="px-6 py-2.5 rounded-lg text-white bg-gradient-to-r from-[#062a66] to-[#6ca3de] hover:shadow-lg hover:scale-105 transition-all duration-200 font-semibold"
          >
            Contact Us
          </a>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t shadow-lg z-50 max-h-[calc(100vh-180px)] overflow-y-auto">
            <a href="/" className="block px-6 py-4 hover:bg-gray-50 font-medium text-base">Home</a>
            <a href="/about" className="block px-6 py-4 hover:bg-gray-50 font-medium text-base">About</a>

            {/* Services */}
            <div className="border-t">
              <button
                onClick={() => toggleDropdown("services")}
                className="w-full text-left px-6 py-4 hover:bg-gray-50 flex justify-between items-center font-medium text-base"
              >
                Services
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-200 ${openDropdown === "services" ? "rotate-180" : ""}`}
                />
              </button>
              {openDropdown === "services" && (
                <div className="bg-gradient-to-br from-gray-50 to-blue-50">
                  {services.map((service) => (
                    <a
                      key={service.name}
                      href={service.path}
                      className="flex items-center gap-3 px-8 py-3 hover:bg-white/80 transition-colors border-b border-gray-100"
                    >
                      <span className="text-xl">{service.icon}</span>
                      <span className="text-gray-700">{service.name}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* <a href="/case-studies" className="block px-6 py-4 hover:bg-gray-50 font-medium text-base">Case Studies</a> */}
            {/* <a href="/process" className="block px-6 py-4 hover:bg-gray-50 font-medium text-base">Process</a> */}
            <a href="/blog" className="block px-6 py-4 hover:bg-gray-50 font-medium text-base">Blog</a>
            <a href="/contact" className="block px-6 py-4 hover:bg-gray-50 font-medium text-base">Contact</a>

            <a
              href="/contact"
              className="block mx-6 my-4 px-6 py-3 rounded-lg text-white bg-gradient-to-r from-[#062a66] to-[#6ca3de] hover:shadow-lg text-center font-semibold transition-all duration-200"
            >
              Contact Us
            </a>
          </div>
        )}
      </div>
    </header>
  );
}