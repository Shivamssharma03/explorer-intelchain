// src/components/Header.jsx
import React, { useState, useContext } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext'; // Import ThemeContext
import GasModal from '../modals/GasModal';

const Header = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext); // Use the theme context
  const [isOne, setIsOne] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  let hideTimeout = null;

  const handleMouseEnter = () => {
    clearTimeout(hideTimeout);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    hideTimeout = setTimeout(() => {
      setIsHovered(false);
    }, 300);
  };

  return (
    <header
      className={`flex justify-between items-center py-2 px-4 shadow-md border-b text-sm h-12 z-50 fixed top-0 left-0 right-0 transition-all duration-300 ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-[#F7FAFC] text-black'
      }`}
    >
      {/* Left side - ITC Price and Gas Info */}
      <div>
        ITC $0.354 | Gas{' '}
        <span
          className="relative text-yellow-500 hover:underline cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          &lt; $0.01
          {isHovered && (
            <div
              className="absolute top-full left-0 mt-2"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <GasModal />
            </div>
          )}
        </span>
      </div>

      {/* Right side - ONE/ETH Address Toggle and Theme Toggle */}
      <div className="flex items-center gap-6">
        {/* ONE/ETH Address Toggle */}
        <div className="flex items-center gap-2">
          <p className="font-semibold">ITC / ETH address</p>
          <div
            onClick={() => setIsOne(!isOne)}
            className={`w-12 h-7 flex items-center rounded-full cursor-pointer transition-colors duration-300 ${
              isOne ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          >
            <div
              className={`bg-white w-5 h-5 rounded-full shadow-md transform duration-300 ease-in-out ${
                isOne ? 'translate-x-6' : 'translate-x-0'
              }`}
            ></div>
          </div>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme} // Use the toggle function from context
          className={`p-2 rounded-full transition-colors duration-300 ${
            isDarkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-200 text-black'
          }`}
        >
          {isDarkMode ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </header>
  );
};

export default Header;
