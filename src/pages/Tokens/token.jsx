// Token.js
import React, { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { IoFilterOutline } from "react-icons/io5";
import { X } from "lucide-react";
import { Link } from 'react-router-dom'; // Import Link
import SearchBar from "../../components/SearchBar";
import PageHeader from "../../components/PageHeader";

// FilterDropdown component
const FilterDropdown = ({ isOpen, onClose, onFilterChange }) => {
  const [selectedTypes, setSelectedTypes] = useState([]);

  const handleTypeChange = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleApply = () => {
    onFilterChange(selectedTypes);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="absolute z-10 mt-2 w-56 rounded-md shadow-lg dark:bg-[#121212] bg-white ring-1 ring-black ring-opacity-5">
      <div className="py-1">
        <div className="px-4 py-2 text-sm text-white font-medium flex justify-between items-center">
          <span>Type</span>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={16} />
          </button>
        </div>
        <div className="px-4 py-2">
          {["ERC-20", "ERC-721", "ERC-1155"].map((type) => (
            <label key={type} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedTypes.includes(type)}
                onChange={() => handleTypeChange(type)}
                className="form-checkbox text-blue-600"
              />
              <span className="text-sm text-white">{type}</span>
            </label>
          ))}
        </div>
        <div className="px-4 py-2">
          <button
            onClick={handleApply}
            className="w-full px-4 py-2 text-sm font-medium text-white bg-[#ff9700] rounded-md hover:bg-[#ff9900e7] transition-colors"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

// Dummy data generation function
const generateDummyTokens = (count) => {
  const tokenTypes = ["ERC-20", "ERC-721", "ERC-1155"];

  const dummyTokens = [];
  for (let i = 0; i < count; i++) {
    dummyTokens.push({
      id: i + 1,
      name: `Token ${i + 1}`,
      symbol: `TKN${i + 1}`,
      address: `itc${Math.random().toString(36).substr(2, 34)}`,
      type: tokenTypes[Math.floor(Math.random() * tokenTypes.length)],
      price: Math.random() * 1000,
      marketCap: Math.random() * 10000000000,
      holders: Math.floor(Math.random() * 1000000),
    });
  }
  return dummyTokens;
};

// Generate dummy data for two shards
const tokens = [
  generateDummyTokens(300), // Shard 0
  generateDummyTokens(200), // Shard 1
];

// TokenItem component with Link integration
const TokenItem = ({ token }) => (
  <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 p-2 border-b border-gray-800 mt-1">
    <div className="flex items-center ml-1 mb-1">
      <div className="bg-[#e29a2f] w-6 h-6 rounded-full flex items-center justify-center mr-2 text-xs flex-shrink-0">
        {token.symbol[0]}
      </div>
      <div className="text-xs sm:text-sm overflow-hidden">
        {/* Token Name as Link */}
        <div className="text-[#e29a2f]">
          <Link to="/accounts/id" className="hover:underline">
            {token.name} ({token.symbol})
          </Link>
          {/* 
            TODO: Update the 'to' prop to the desired static route for token names.
            Example: to="/token-name-page"
          */}
        </div>
        {/* Token Address as Link */}
        <div className="text-gray-500 truncate">
          <Link to="/accounts/id" className="hover:underline">
            {token.address}
          </Link>
          {/* 
            TODO: Update the 'to' prop to the desired static route for token addresses.
            Example: to="/token-address-page"
          */}
        </div>
        <span className="bg-gray-800 text-xs px-1 py-0.5 rounded mt-1 inline-block">
          {token.type}
        </span>
      </div>
    </div>
    <div className="text-xs sm:text-sm flex sm:block">
      <span className="sm:hidden mr-2 w-24 text-gray-400">Price:</span>
      ${token.price.toFixed(2)}
    </div>
    <div className="text-xs sm:text-sm flex sm:block">
      <span className="sm:hidden mr-2 w-24 text-gray-400">Market cap:</span>
      ${token.marketCap.toLocaleString()}
    </div>
    <div className="text-xs sm:text-sm flex sm:block">
      <span className="sm:hidden mr-2 w-24 text-gray-400">Holders:</span>
      {token.holders.toLocaleString()}
    </div>
  </div>
);

// Main Token component
const Token = () => {
  const [activeShard, setActiveShard] = useState(0);
  const [filterText, setFilterText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const itemsPerPage = 30;

  const [debouncedFilterText, setDebouncedFilterText] = useState(filterText);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedFilterText(filterText);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [filterText]);

  const filteredTokens = tokens[activeShard].filter(
    (token) =>
      (token.name.toLowerCase().includes(debouncedFilterText.toLowerCase()) ||
        token.symbol
          .toLowerCase()
          .includes(debouncedFilterText.toLowerCase())) &&
      (selectedTypes.length === 0 || selectedTypes.includes(token.type))
  );

  const pageCount = Math.ceil(filteredTokens.length / itemsPerPage);
  const currentTokens = filteredTokens.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleFilterChange = (types) => {
    setSelectedTypes(types);
    setCurrentPage(1);
  };

  return (
    <div className="dark:bg-[#070136] bg-white dark:text-white text:black  h-screen  overflow-y-hidden max-w-screen-2xl w-full flex flex-col mt-6 p-12">
      <div className="flex-grow flex flex-col max-w-screen-xl mx-auto w-full">
        <div className="mb-4">
          <SearchBar />
        </div>

        <div>
          <PageHeader title={"Tokens"} />
        </div>

        <div className="flex justify-between mb-4 flex-wrap gap-2">
          <div className="flex items-center space-x-2 mb-1">
            <div className="relative">
              <button
                className="bg-[#161357] py-1 rounded ml-1 p-3"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <IoFilterOutline />
              </button>
              <FilterDropdown
                isOpen={isFilterOpen}
                onClose={() => setIsFilterOpen(false)}
                onFilterChange={handleFilterChange}
              />
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Token name or symbol"
                className="bg-[#161357] px-3 py-1 text-xs md:text-sm rounded w-full min-w-[150px]"
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              className="bg-[#161357] px-2 py-1 text-xs md:text-sm rounded"
              onClick={() => setCurrentPage(1)}
            >
              First
            </button>
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-1 bg-[#161357] rounded disabled:opacity-50"
              aria-label="Previous page"
            >
              <ChevronLeft size={16} />
            </button>
            <span className="bg-[#161357] px-2 py-1 text-xs md:text-sm rounded">
              {currentPage}
            </span>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, pageCount))
              }
              disabled={currentPage === pageCount}
              className="p-1 bg-[#161357] rounded disabled:opacity-50"
              aria-label="Next page"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div className="bg-[#070136] rounded-lg overflow-auto flex-grow mt-2">
          <div className="bg-[#161357] grid grid-cols-1 sm:grid-cols-4 gap-2 p-2 text-xs sm:text-sm text-gray-400 border-b border-gray-800 hidden sm:grid">
            <div className="ml-9">Token</div>
            <div>Price</div>
            <div>On-chain market cap</div>
            <div>Holders</div>
          </div>
          <div className="overflow-auto h-[calc(100vh-250px)] mt-2">
            {currentTokens.map((token) => (
              <TokenItem key={token.id} token={token} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Token;
