"use client";

import { useState } from "react";
import Link from "next/link";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
});

const Navbar: React.FC = () => {
  const [hover, setHover] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/service" },
    { name: "For Companies", href: "/companies" },
    { name: "For Candidates", href: "/candidates" },
    { name: "Contact Us", href: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`w-full h-[85px] bg-white flex items-center justify-between px-4 lg:px-10 shadow-md ${montserrat.className} sticky top-0 z-50`}
      >
        {/* Logo */}
        <div className="cursor-pointer lg:px-10">
          <Link href="/" onClick={closeMenu}>
            <Image 
              src="/images/logo.png" 
              alt="Logo" 
              width={180} 
              height={60} 
              className="w-[180px] h-[150px] lg:w-[180px] lg:h-[150px]"
              priority 
            />
          </Link>
        </div>

        {/* Desktop Menu Items - Keep original styling */}
        <ul className="hidden lg:flex items-center gap-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`px-5 py-3 rounded-[50px]
                   font-normal text-[16px] leading-[100%] tracking-normal
                  transition-none
                  ${isActive ? "bg-[#007BFF] text-white" : "text-gray-800 hover:text-[#007BFF]"}`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop Contact Button + Circular Arrow - Keep original styling */}
        <div className="hidden lg:flex items-center gap-1">
          <button className="w-[140px] h-[48px] bg-[#007BFF] text-white rounded-[50px] px-4 py-2 transition-none">
            Contact Us
          </button>

          <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={`w-10 h-10 rounded-full border-[1.5px] border-[#007BFF] flex items-center justify-center cursor-pointer transition-all duration-300
            ${hover ? "bg-[#007BFF]" : "bg-white"}`}
          >
            <FiArrowUpRight
              className={`transition-transform duration-300 ${hover ? "rotate-45 text-white" : "rotate-0 text-[#007BFF]"}`}
              size={24}
            />
          </div>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden w-10 h-10 flex items-center justify-center text-gray-800 hover:text-[#007BFF] transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? "visible bg-black bg-opacity-30 backdrop-blur-sm" 
            : "invisible bg-transparent"
        }`}
        onClick={closeMenu}
      />
      
      {/* Mobile Menu - Right Side Popup */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-all duration-500 ease-out ${
          isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
        style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <div className="p-6 h-full flex flex-col relative overflow-hidden">
          {/* Decorative gradient */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-50 to-transparent rounded-full opacity-50 -translate-y-16 translate-x-16"></div>
          
          {/* Close Button */}
          <div className="flex justify-end mb-8 relative z-10">
            <button
              onClick={closeMenu}
              className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-[#007BFF] transition-all duration-300 rounded-full hover:bg-gray-100 hover:scale-110 hover:rotate-90"
              aria-label="Close menu"
            >
              <FiX size={24} />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <ul className="space-y-4 flex-1 relative z-10">
            {menuItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <li 
                  key={item.name}
                  className={`transform transition-all duration-500 ease-out ${
                    isMenuOpen 
                      ? "translate-x-0 opacity-100" 
                      : "translate-x-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className={`block px-6 py-4 rounded-[50px] font-normal text-[16px] leading-[100%] tracking-normal transition-all duration-300 transform hover:scale-105 hover:shadow-lg
                    ${isActive 
                      ? "bg-[#007BFF] text-white shadow-lg shadow-blue-200" 
                      : "text-gray-800 hover:text-[#007BFF] hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:shadow-md"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile Contact Button */}
          <div 
            className={`mt-8 relative z-10 transform transition-all duration-500 ease-out ${
              isMenuOpen 
                ? "translate-y-0 opacity-100" 
                : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: `${menuItems.length * 100}ms` }}
          >
            <button
              onClick={closeMenu}
              className="w-full h-[48px] bg-gradient-to-r from-[#007BFF] to-[#0056b3] text-white rounded-[50px] px-4 py-2 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-300 active:scale-95"
            >
              Contact Us
            </button>
          </div>

          {/* Bottom decorative element */}
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-50 to-transparent rounded-full opacity-30 -translate-x-12 translate-y-12"></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;