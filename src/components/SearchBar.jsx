import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  const [isClicked, setIsClicked] = useState(false);

  // Handle focus and blur events to toggle the border color
  const handleFocus = () => {
    setIsClicked(true); // Set the border to orange when clicked
  };

  const handleBlur = () => {
    setIsClicked(false); // Revert the border when focus is lost
  };

  return (
    <div className="flex justify-center items-center p-2 rounded-md mt-10">
      <div
        className={`flex items-center w-full max-w-7xl bg-transparent rounded-md border ${
          isClicked ? 'border-orange-500' : 'border-gray-800 hover:border-orange-300'
        } transition duration-300 ease-in-out hover:shadow-lg`}
      >
        {/* Search Icon - Always Visible */}
        <FaSearch
          className="ml-3 text-gray-500 transition-opacity duration-300 ease-in-out"
          size={20}
        />
        <input
          type="text"
          placeholder="Search by address / transaction hash / block / token..."
          className="w-full p-2 pl-5 rounded-md border-none h-14 bg-transparent text-white focus:outline-none"
          onFocus={handleFocus} // Change border color on focus
          onBlur={handleBlur} // Revert border color on blur (when clicking outside)
        />
      </div>
    </div>
  );
};

export default SearchBar;
 