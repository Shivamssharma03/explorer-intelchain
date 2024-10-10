import React, { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import AccountStats from './AccountStats';
import GasStats from './GasStats';
import BlockStats from './BlockStats';
import Token from './Token';
import Contracts from './Contracts';
import Transaction from './Transaction';

const DashboardFilter = () => {
  const [isTimeDropdownOpen, setIsTimeDropdownOpen] = useState(false);
  const [isAllDropdownOpen, setIsAllDropdownOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState('1 month');
  const [selectedAll, setSelectedAll] = useState('All');

  const timeOptions = ['1 month', '3 months', '6 months', '1 year'];
  const allOptions = ['All', 'Account', 'Transaction', 'Block', 'Token', 'Gas', 'Contacts'];

  // Function to handle opening of "All" dropdown and close "Time" dropdown
  const toggleAllDropdown = () => {
    setIsAllDropdownOpen(!isAllDropdownOpen);
    if (isTimeDropdownOpen) {
      setIsTimeDropdownOpen(false);
    }
  };

  // Function to handle opening of "Time" dropdown and close "All" dropdown
  const toggleTimeDropdown = () => {
    setIsTimeDropdownOpen(!isTimeDropdownOpen);
    if (isAllDropdownOpen) {
      setIsAllDropdownOpen(false);
    }
  };

  // Function to render the components based on selected "All" option
  const renderComponent = () => {
    if (selectedAll === 'All') {
      return (
        <>
          <AccountStats />
          <GasStats />
          <BlockStats />
          <Token />
          <Contracts />
          <Transaction/>
        </>
      );
    }
    switch (selectedAll) {
      case 'Account':
        return <AccountStats />;
      case 'Transaction':
        return <Transaction />;
      case 'Block':
        return <BlockStats />;
      case 'Token':
        return <Token />;
      case 'Gas':
        return <GasStats />;
      case 'Contacts':
        return <Contracts />;
      default:
        return <div>Select an option from "All"</div>;
    }
  };

  return (
    <div>
      <div className="flex items-center flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0 p-2 rounded-lg w-[40]">
        
        {/* All Section Dropdown */}
        <div className="relative flex-shrink-0" style={{ flexBasis: '10%' }}> {/* Flexible width for the 'All' button */}
          <button
            className="flex items-center justify-between bg-gray-800 text-white text-sm font-normal px-3 py-2 rounded-md w-full border border-transparent hover:border-orange-300 border-2"
            onClick={toggleAllDropdown}
          >
            <span>{selectedAll}</span>
            <ChevronDown size={16} className="ml-2" />
          </button>
          {isAllDropdownOpen && (
            <ul className="absolute left-0 mt-2 w-full bg-gray-800 text-white text-sm font-normal rounded-md shadow-lg z-10">
              {allOptions.map((option) => (
                <li
                  key={option}
                  className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                  onClick={() => {
                    setSelectedAll(option);
                    setIsAllDropdownOpen(false);
                  }}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
        
        {/* Time Section Dropdown */}
        <div className="relative flex-shrink-0" style={{ flexBasis: '10%' }}>
          <button
            className="flex items-center justify-between bg-gray-800 text-white text-sm font-normal px-3 py-2 rounded-md w-full border border-transparent hover:border-orange-300 border-2"
            onClick={toggleTimeDropdown}
          >
            <span>{selectedTime}</span>
            <ChevronDown size={16} className="ml-2" />
          </button>
          {isTimeDropdownOpen && (
            <ul className="absolute left-0 mt-2 w-full bg-gray-800 text-white text-sm font-normal rounded-md shadow-lg">
              {timeOptions.map((option) => (
                <li
                  key={option}
                  className="px-3 py-2 hover:bg-gray-700 cursor-pointer"
                  onClick={() => {
                    setSelectedTime(option);
                    setIsTimeDropdownOpen(false);
                  }}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Search Input */}
        <div className="relative flex-grow"> {/* Allows the search input to take up the remaining space */}
          <input
            type="text"
            placeholder="Find chart, metric..."
            className="w-full bg-gray-800 text-white text-sm font-normal px-3 py-2.5 rounded-md pl-10 border border-transparent hover:border-orange-300 border-2"
          />
          <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* Render the selected component */}
      <div className="mt-4 p-4 bg-gray-900 rounded-lg text-white">
        {renderComponent()}
      </div>
    </div>
  );
};

export default DashboardFilter;
