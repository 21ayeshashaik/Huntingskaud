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
        className={`w-full h-[70px] sm:h-[75px] md:h-[80px] lg:h-[85px] xl:h-[90px] 2xl:h-[100px] 
        bg-white flex items-center justify-between 
        px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-20 
        shadow-md ${montserrat.className} sticky top-0 z-50`}
      >
        {/* Logo - Responsive sizing */}
        <div className="cursor-pointer">
          <Link href="/" onClick={closeMenu}>
            <Image 
              src="/images/logo.png" 
              alt="Logo" 
              width={180} 
              height={60} 
              className="w-[160px] h-[140px] sm:w-[160px] sm:h-[80px] md:w-[150px] md:h-[50px] 
              lg:w-[160px] lg:h-[55px] xl:w-[170px] xl:h-[160px] 2xl:w-[180px] 2xl:h-[65px]"
              priority 
            />
          </Link>
        </div>

        {/* Desktop Menu Items - Responsive for medium screens and up */}
        <ul className="hidden md:flex items-center gap-1 lg:gap-2 xl:gap-3 2xl:gap-4">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`px-2 py-2 md:px-3 md:py-2 lg:px-4 lg:py-2.5 xl:px-5 xl:py-3 2xl:px-6 2xl:py-3.5 
                  rounded-[50px] font-normal 
                  text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] 
                  leading-[100%] tracking-normal transition-all duration-200 whitespace-nowrap
                  ${isActive ? "bg-[#007BFF] text-white" : "text-gray-800 hover:text-[#007BFF] hover:bg-gray-50"}`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop Contact Button + Circular Arrow - All large screens */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-3 2xl:gap-4">
          <Link href="/contact">
            <button className="w-[110px] h-[38px] lg:w-[120px] lg:h-[42px] xl:w-[140px] xl:h-[46px] 2xl:w-[160px] 2xl:h-[50px] 
            bg-[#007BFF] text-white rounded-[50px] px-4 py-2 transition-all duration-200 hover:bg-[#0056b3] hover:scale-105
            text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] font-medium">
              Contact Us
            </button>
          </Link>

          <div
            onMouseEnter={() => setHover(true)}
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            onMouseLeave={() => setHover(false)}
            className={`group w-8 h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 2xl:w-11 2xl:h-11 
              rounded-full border-[1.5px] border-[#007BFF] flex items-center justify-center cursor-pointer transition-all duration-300
              ${hover ? "bg-[#007BFF] scale-110" : "bg-white hover:scale-105"}`}
          >
            <FiArrowUpRight
              className="transform transition-transform duration-300 text-[#007BFF] group-hover:rotate-45 group-hover:text-white
                w-3 h-3 lg:w-4 lg:h-4 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5"
            />
          </div>
        </div>

        {/* Medium Screen Contact Button (tablet) - Only contact button, no arrow */}
        <div className="hidden md:flex lg:hidden">
          <Link href="/contact">
            <button className="w-[110px] h-[38px] md:w-[120px] md:h-[42px] 
            bg-[#007BFF] text-white rounded-[50px] px-4 py-2 transition-all duration-200 hover:bg-[#0056b3] hover:scale-105
            text-[12px] md:text-[13px] font-medium">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-gray-800 hover:text-[#007BFF] transition-colors z-60"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu - Right Side Popup - Only for small screens */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full 
        w-[280px] sm:w-[320px] 
        bg-white shadow-2xl z-50 transform transition-all duration-300 ease-out ${
          isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
        style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
        }}
      >
        <div className="p-4 sm:p-6 h-full flex flex-col relative overflow-hidden">
          {/* Decorative gradient */}
          <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-bl from-blue-50 to-transparent rounded-full opacity-50 -translate-y-8 sm:-translate-y-12 translate-x-8 sm:translate-x-12"></div>
          
          {/* Close Button */}
          <div className="flex justify-end mb-6 sm:mb-8 relative z-10">
            <button
              onClick={closeMenu}
              className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-gray-600 hover:text-[#007BFF] transition-all duration-300 rounded-full hover:bg-gray-100 hover:scale-110 hover:rotate-90"
              aria-label="Close menu"
            >
              <FiX size={20} />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <ul className="space-y-2 sm:space-y-3 flex-1 relative z-10">
            {menuItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <li 
                  key={item.name}
                  className={`transform transition-all duration-300 ease-out ${
                    isMenuOpen 
                      ? "translate-x-0 opacity-100" 
                      : "translate-x-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className={`block px-4 py-3 sm:px-5 sm:py-3.5 rounded-[50px] font-normal 
                    text-[14px] sm:text-[15px] leading-[100%] tracking-normal transition-all duration-200 transform hover:scale-102 hover:shadow-md
                    ${isActive 
                      ? "bg-[#007BFF] text-white shadow-lg shadow-blue-200/50" 
                      : "text-gray-800 hover:text-[#007BFF] hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:shadow-sm"
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
            className={`mt-6 sm:mt-8 relative z-10 transform transition-all duration-300 ease-out ${
              isMenuOpen 
                ? "translate-y-0 opacity-100" 
                : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: `${menuItems.length * 80}ms` }}
          >
            <Link href="/contact">
              <button
                onClick={closeMenu}
                className="w-full h-[44px] sm:h-[48px] bg-gradient-to-r from-[#007BFF] to-[#0056b3] text-white rounded-[50px] px-4 py-2 transition-all duration-200 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-300/30 active:scale-95 text-[14px] sm:text-[15px] font-medium"
              >
                Contact Us
              </button>
            </Link>
          </div>

          {/* Bottom decorative element */}
          <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-tr from-blue-50 to-transparent rounded-full opacity-30 -translate-x-8 sm:-translate-x-10 translate-y-8 sm:translate-y-10"></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;