import { useState } from "react";
import "tailwindcss/tailwind.css"; // Ensure Tailwind is properly set up in your React project

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle mobile menu

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle mobile menu state
  };

  return (
    <div
      className={`bg-gray-50 dark:bg-gray-900 dark:text-white transition-colors duration-300`}
    >
      <header className="fixed w-full z-50 bg-white dark:bg-gray-800 shadow-md transition-colors duration-300">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
            DevMarket
          </a>
          {/* Hamburger Menu for mobile */}
          <button
            className="md:hidden text-gray-600 dark:text-gray-300 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#hero"
              className="text-gray-600 text-base dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Home
            </a>
            <a
              href="#features"
              className="text-gray-600 text-base dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Features
            </a>
            <a
              href="#templates"
              className="text-gray-600 text-base dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Templates
            </a>
            <a
              href="#testimonials"
              className="text-gray-600 text-base dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              className="text-gray-600 text-base dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Pricing
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <button
              id="dark-mode-toggle"
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors"
              onClick={toggleDarkMode}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800 dark:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            </button>
           
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <nav className="md:hidden bg-white dark:bg-gray-800 transition-all duration-300">
            <a
              href="#hero"
              className="block px-4 py-2 text-base text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              Home
            </a>
            <a
              href="#features"
              className="block px-4 py-2 text-base text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              Features
            </a>
            <a
              href="#templates"
              className="block px-4 py-2 text-base text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              Templates
            </a>
            <a
              href="#testimonials"
              className="block px-4 py-2 text-base text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              className="block px-4 py-2 text-base text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              Pricing
            </a>
          </nav>
        )}
      </header>
    </div>
  );
};

export default Header;
