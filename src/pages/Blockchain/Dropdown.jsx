import React, { useState, useRef, useEffect } from "react";
// import { ChevronDown, Search } from 'lucide-react';

import { CiGrid41 } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";

const TokenItem = ({ symbol, name, balance }) => (
  <div className="flex items-center p-2 hover:bg-gray-700">
    <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center mr-2">
      {symbol[0]}
    </div>
    <div className="flex-grow">
      <div className="text-white">{name}</div>
      <div className="text-gray-400 text-sm">
        {balance} {symbol}
      </div>
    </div>
  </div>
);

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);

  const tokens = [
    { symbol: "PEBE", name: "PeppaBeer", balance: "5,000,000" },
    { symbol: "EUSK", name: "Mintbes", balance: "20,000" },
    { symbol: "TRTM", name: "TRITIUM", balance: "21.21" },
    { symbol: "ONE", name: "oneminer.finance", balance: "10" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredTokens = tokens.filter(
    (token) =>
      token.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      token.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-x-5 h-15"
      >
        <div className="text-right mb-5 border-solid border-2 rounded-lg p-1.5 hover:border-blue-500 hover:text-blue-500 duration-300 flex items-center h-15">
        <CiGrid41 className="mr-2" />
        <span>8 ($0.00)</span>
        <FaAngleDown className="ml-2" />
        </div>
      </button>
      {isOpen && (
        <div className="absolute w-200 bg-gray-800 rounded-md shadow-lg z-10">
          <div className="p-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by token name"
                className="w-200 bg-gray-700 text-white rounded-md pl-8 pr-4 py-2"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {/* <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} /> */}
            </div>
          </div>
          <div className="px-2 py-1 text-gray-400">
            ERC-20 tokens ({filteredTokens.length})
          </div>
          <div className="max-h-60 overflow-y-auto">
            {filteredTokens.map((token, index) => (
              <TokenItem key={index} {...token} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
