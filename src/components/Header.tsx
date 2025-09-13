"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { usePathname } from "next/navigation";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
});

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/service" },
    { name: "For Companies", href: "/companies" },
    { name: "For Candidates", href: "/candidates" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  {/*const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu();
  };
*/}
  return (
    <>
      <nav
        className={`w-full h-[70px] sm:h-[75px] md:h-[80px] lg:h-[85px] xl:h-[90px] 2xl:h-[100px] 
          bg-white flex items-center justify-between 
          px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-20 
          shadow-md ${montserrat.className} sticky top-0 z-50`}
      >
        {/* Logo */}
        <div className="cursor-pointer">
          <Link href="/" onClick={closeMenu}>
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={180}
              height={60}
              className="w-[160px] h-[40px] sm:w-[160px] sm:h-[80px] md:w-[150px] md:h-[50px] 
                lg:w-[160px] lg:h-[55px] xl:w-[170px] xl:h-[60px] 2xl:w-[180px] 2xl:h-[65px]"
              priority
            />
          </Link>
        </div>

        {/* Desktop Menu Items */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className={`rounded-[50px] font-normal 
                    text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] 
                    leading-[100%] tracking-normal transition-all duration-200 whitespace-nowrap
                    ${isActive
                      ? "bg-[#007BFF] text-white px-6 py-3"
                      : "text-gray-800 hover:text-[#007BFF] hover:bg-gray-50 px-3 py-2"
                    }`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}

          {/* Desktop Contact Us Button with Gap Animation */}
          <li>
            <div className="flex items-center group gap-0 transition-all duration-700 ease-in-out hover:gap-3">
              <div className="relative overflow-hidden">
                <Link href="/contact">
                <button
                 // onClick={scrollToContact}
                  className="px-6 py-3 text-[14px] font-medium whitespace-nowrap bg-[#007BFF] text-white rounded-[50px] transition-all duration-300 hover:bg-blue-600"
                >
                  Contact Us
                </button>
                </Link>
              </div>
              <div
               // onClick={scrollToContact}
                className="w-10 h-10 rounded-full border border-[#007BFF] flex items-center justify-center cursor-pointer
                  transition-all duration-700 ease-in-out group-hover:bg-[#007BFF] group-hover:scale-110 group-hover:shadow-lg group-hover:translate-x-2"
              >
                <FiArrowUpRight
                  className="text-[#007BFF] group-hover:text-white transition-all duration-500 ease-out group-hover:rotate-45"
                  size={18}
                />
              </div>
            </div>
          </li>
        </ul>

        {/* Mobile Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-gray-800 hover:text-[#007BFF] transition-colors z-60"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full 
          w-[280px] sm:w-[320px] 
          bg-white shadow-2xl z-50 transform transition-all duration-300 ease-out ${
            isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        style={{
          background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
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
          <ul className="space-y-4 sm:space-y-5 flex-1 relative z-10">
            {menuItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <li
                  key={item.name}
                  className={`transform transition-all duration-300 ease-out ${
                    isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className={`block px-4 py-3 sm:px-5 sm:py-3.5 rounded-[50px] font-normal
                    text-[14px] sm:text-[15px] leading-[100%] tracking-normal transition-all duration-200 transform hover:scale-[1.02] hover:shadow-md
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

            {/* Mobile Contact Us Button with Gap Animation */}
            <li
              key="contact"
              className={`transform transition-all duration-300 ease-out ${
                isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
              }`}
              style={{ transitionDelay: `${menuItems.length * 80}ms` }}
            >
              
              <div className="flex items-center group gap-0 transition-all duration-700 ease-in-out hover:gap-3">
              <Link href="/contact">
                <div className="relative overflow-hidden">
                  
                  <button
                    //onClick={scrollToContact}
                    className="px-6 py-3 font-medium whitespace-nowrap bg-[#007BFF] text-white rounded-[50px] transition-all duration-300 hover:bg-blue-600"
                  >
                    Contact Us
                  </button>
                </div>
                <div
                 // onClick={scrollToContact}
                  className="w-10 h-10 rounded-full border border-white flex items-center justify-center cursor-pointer
                    transition-all duration-700 ease-in-out group-hover:bg-white group-hover:text-[#007BFF] group-hover:scale-110 group-hover:shadow-lg group-hover:translate-x-2"
                >
                  <FiArrowUpRight
                    className="text-white group-hover:text-[#007BFF] transition-all duration-500 ease-out group-hover:rotate-45"
                    size={18}
                  />
                </div>
                 </Link>
              </div>
             
            </li>
          </ul>

          {/* Bottom decorative element */}
          <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-tr from-blue-50 to-transparent rounded-full opacity-30 -translate-x-8 sm:-translate-x-10 translate-y-8 sm:translate-y-10"></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;