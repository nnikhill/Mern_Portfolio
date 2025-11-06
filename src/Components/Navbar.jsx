import React, { useState } from "react";
import { Menu, X, User } from "lucide-react";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <header className="fixed w-full top-0 left-0 z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/80 shadow-lg transition-all duration-300">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-3">
          {/* 🔹 Logo */}
          <h1 className="text-2xl font-extrabold bg-gradient-to-r from-purple-700 to-pink-500 bg-clip-text text-transparent tracking-wide">
            Nikhil Sharma
          </h1>

          {/* 🔹 Desktop Nav Links */}
          <nav className="hidden md:flex space-x-8 text-gray-700 dark:text-gray-200 font-medium">
            {["Home", "Education", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative group"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-purple-600 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* 🔹 Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Profile Button */}
            <button
              onClick={() => setShowSidebar(!showSidebar)}
              className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:scale-105 transition-transform shadow-md"
            >
              <User className="w-5 h-5" />
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg bg-purple-100 dark:bg-gray-800 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-gray-700 transition"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* 🔹 Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden bg-white dark:bg-gray-900 px-6 py-4 border-t border-gray-200 dark:border-gray-700 shadow-md">
            <ul className="flex flex-col space-y-4 text-gray-800 dark:text-gray-200 font-medium">
              {["Home", "Education", "Skills", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-purple-600 transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      {/* Sidebar Profile */}
      {showSidebar && <Sidebar onClose={() => setShowSidebar(false)} />}
    </>
  );
};

export default Navbar;
