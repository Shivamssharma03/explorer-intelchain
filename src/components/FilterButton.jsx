import React, { useState } from 'react';
import { MdOutlineFilterList } from "react-icons/md";
import { IoFilterSharp } from "react-icons/io5";

const FilterButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    ERC20: false,
    ERC721: false,
    ERC1155: false,
  });

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleFilterChange = (filterType) => {
    setSelectedFilters((prevState) => ({
      ...prevState,
      [filterType]: !prevState[filterType],
    }));
  };

  const handleReset = () => {
    setSelectedFilters({
      ERC20: false,
      ERC721: false,
      ERC1155: false,
    });
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-700 hover:bg-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
      >
        {/* <svg
          xmlns="<MdOutlineFilterList />"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 7.5h16.5m-16.5 7.5h16.5"
          />
        </svg> */}
        <IoFilterSharp />
        Filter
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
          <div className="py-1">
            <div className="px-4 py-2 text-gray-300 text-sm font-bold">
              Type
              <button
                onClick={handleReset}
                className="float-right text-blue-500 hover:text-blue-300"
              >
                Reset
              </button>
            </div>

            <div className="px-4 py-2">
              <label className="flex items-center text-gray-300">
                <input
                  type="checkbox"
                  checked={selectedFilters.ERC20}
                  onChange={() => handleFilterChange('ERC20')}
                  className="form-checkbox text-blue-500"
                />
                <span className="ml-2">ERC-20</span>
              </label>
              <label className="flex items-center text-gray-300 mt-2">
                <input
                  type="checkbox"
                  checked={selectedFilters.ERC721}
                  onChange={() => handleFilterChange('ERC721')}
                  className="form-checkbox text-blue-500"
                />
                <span className="ml-2">ERC-721</span>
              </label>
              <label className="flex items-center text-gray-300 mt-2">
                <input
                  type="checkbox"
                  checked={selectedFilters.ERC1155}
                  onChange={() => handleFilterChange('ERC1155')}
                  className="form-checkbox text-blue-500"
                />
                <span className="ml-2">ERC-1155</span>
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterButton;
