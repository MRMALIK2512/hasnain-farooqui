"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  "Home",
  "About",
  "Initiatives",
  "Gallery",
  "Media",
  "Contact",
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  return (
    <header className="w-full bg-[#fdfdf9] border-b border-[#ece7df] relative z-50">
      <nav className="max-w-[1440px] mx-auto h-[80px] flex items-center justify-between px-5 sm:px-8 lg:px-12">
        
        {/* LEFT / LOGO AREA */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="flex items-center justify-center">
            {/* Added font-serif to match the elegant logo style */}
            <span className="font-serif text-[40px] leading-none text-[#c58a37]">
              HF
            </span>
          </div>

          <div className="flex flex-col mt-1">
            <h1 className="text-[13px] sm:text-[14px] font-bold tracking-[0.12em] uppercase text-[#1f2937] leading-none">
              Hasnain Imtiaz Farooqui
            </h1>
            <p className="text-[11px] font-medium text-[#6b7280] mt-1.5">
              For The People, Always
            </p>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navItems.map((item, index) => (
            <button
              key={item}
              // 2. UPDATED: Set active item on click
              onClick={() => setActiveItem(item)}
              className={`relative text-[14px] font-medium transition-colors duration-300 ${
                activeItem === item
                  ? "text-[#1f2937]" 
                  : "text-[#4b5563] hover:text-[#c58a37]"
              }`}
            >
              {item}
              {/* 3. UPDATED: Underline now renders conditionally based on activeItem */}
              {activeItem === item && (
                <span className="absolute -bottom-[6px] left-0 w-full h-[2px] bg-[#c58a37] rounded-full"></span>
              )}
            </button>
          ))}
        </div>

        {/* RIGHT / CTA */}
        <div className="flex items-center gap-4">
          {/* Fixed padding (px-6 py-2.5) and added rounded-md to match design */}
          <button className="hidden lg:block px-6 py-2.5 bg-[#c58a37] hover:bg-[#b67c2c] rounded-md transition-all duration-300 text-white font-medium text-[14px]">
            Get In Touch
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[#1f2937] p-1"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {isOpen && (
        <div className="lg:hidden absolute top-[80px] left-0 w-full bg-[#fdfdf9] border-b border-[#ece7df] px-5 py-6 shadow-lg">
          <div className="flex flex-col gap-6">
            {navItems.map((item, index) => (
             <button
                key={item}
                onClick={() => {
                  setActiveItem(item);
                  setIsOpen(false);
                }}
                className={`text-left text-[15px] font-medium ${
                  activeItem === item ? "text-[#c58a37]" : "text-[#4b5563]"
                }`}
              >
                {item}
              </button>
            ))}
            
            {/* Fixed mobile button height and made it full width for better UI */}
            <button className="mt-2 w-full bg-[#c58a37] hover:bg-[#b67c2c] text-white rounded-md font-medium text-[15px] px-6 py-3 transition-colors">
              Get In Touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
}