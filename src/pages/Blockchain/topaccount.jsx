import React, { useState } from "react";
import AccountData from "./AccountData"; // Corrected import path and filename
import { MdContentCopy } from "react-icons/md";
import DataSlider from "../../components/contractcard/DataSlider";
import PageHeader from "../../components/PageHeader";
import SearchBar from "../../components/SearchBar";
import { Link } from "react-router-dom";
// AccountsTable Component
const AccountsTable = ({ copyStatus, handleCopy, copiedAddress }) => (
  <div className="w-full">
    {/* Table Header */}
    <div className="flex border-b border-gray-700 bg-gray-800 text-gray-400 py-2 z-[1]">
      <div className="flex-1 px-2">Rank</div>
      <div className="flex-1 px-2">Address</div>
      <div className="flex-1 px-2">Public Tag</div>
      <div className="flex-1 px-2">Balance ONE</div>
      <div className="flex-1 px-2">Percentage</div>
      <div className="flex-1 px-2">Txn count</div>
    </div>

    {/* Table Body */}
    {AccountData.map((contract, index) => (
      <div
        key={index}
        className="relative flex border-b border-gray-700 text-white py-2"
      >
        <div className="flex-1 px-2">{contract.id}</div>
        <div className="flex-1 px-2">
          <div className="flex items-center gap-x-2 text-[#e29a2f] text-sm">
            <Link to="/address/id " className="hover:underline">
              {contract.address}
            </Link>
            <button
              onClick={() => handleCopy(contract.address)}
              aria-label="Copy address"
              className="relative"
            >
              <MdContentCopy className="text-blue-200 cursor-pointer" />
              {copiedAddress === contract.address && (
                <div className="absolute -bottom-8 left-0 bg-gray-800 text-green-400 text-xs p-1 rounded-md">
                  Copied!
                </div>
              )}
            </button>
          </div>
        </div>
        <div className="flex-1 px-2">{contract.publicTag}</div>
        <div className="flex-1 px-2">{contract.amount.toLocaleString()}</div>
        <div className="flex-1 px-2">{contract.percentage.toFixed(2)}%</div>
        <div className="flex-1 px-2">{contract.count.toLocaleString()}</div>
      </div>
    ))}
  </div>
);

// TopAccount Component
const TopAccount = () => {
  const [copyStatus, setCopyStatus] = useState("");
  const [copiedAddress, setCopiedAddress] = useState("");

  const handleCopy = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopiedAddress(text);
        setCopyStatus("Address copied to clipboard!");
        setTimeout(() => {
          setCopyStatus("");
          setCopiedAddress("");
        }, 2000); // Clear the message after 2 seconds
      })
      .catch((err) => {
        setCopyStatus("Failed to copy address.");
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <div className=" mt-10">
      <div className="bg-transparent">
        <SearchBar />
      </div>
      <PageHeader title={"Top Accounts"} />
      <div className="flex justify-end pb-4">
        <DataSlider />
      </div>
      <div className="px-5">
        <AccountsTable
          copyStatus={copyStatus}
          handleCopy={handleCopy}
          copiedAddress={copiedAddress}
        />
      </div>
    </div>
  );
};

export default TopAccount;
