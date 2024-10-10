import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoIosInformation } from "react-icons/io";
import { CiGrid41 } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";
import { LuWallet } from "react-icons/lu";
import { IoCubeOutline } from "react-icons/io5";
import { MdContentCopy } from "react-icons/md";
import { IoQrCode } from "react-icons/io5";
import Dropdown from "./DropDown";
import DataSlider from "../../components/contractcard/DataSlider";
import { TbFileTypeCsv } from "react-icons/tb";

// Adjust the truncate logic for the "Miner" field
const displayMiner = (str) => {
  const availableWidth = window.innerWidth; // or another measure to decide truncation
  if (availableWidth < 500) {
    return str.slice(0, 6) + "...";
  }
  return str; // full address when there's enough space
};

const formatNumber = (num) => {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 3 }).format(
    num
  );
};

const TransactionRow = ({ transaction }) => (
  <div className="flex flex-wrap border-b border-gray-700 py-2">
    <div className="w-1/6 py-2 px-4 text-blue-400">{transaction.shard}</div>
    <div className="w-1/6 py-2 px-4">
      <div className="flex items-center">
        <span className="text-blue-400 mr-2">
          {displayMiner(transaction.hash)}
        </span>
      </div>
      <div className="text-gray-500 text-sm">{transaction.age}</div>
    </div>
    <div className="w-1/6 py-2 px-4">
      <span className="bg-gray-700 text-white px-2 py-1 rounded">
        {transaction.type}
      </span>
      <div className="mt-1 text-green-500">{transaction.status}</div>
    </div>
    <div className="w-1/6 py-2 px-4">{transaction.block}</div>
    <div className="w-1/6 py-2 px-4">
      <div className="flex items-center">
        <div className="w-6 h-6 rounded-full bg-orange-500 mr-2"></div>
        <span className="text-gray-300">
          {displayMiner(transaction.from)}
        </span>
      </div>
      <div className="flex items-center mt-1">
        <div className="w-6 h-6 rounded-full bg-blue-500 mr-2"></div>
        <span className="text-gray-300">
          {displayMiner(transaction.to)}
        </span>
      </div>
    </div>
    <div className="w-1/6 py-2 px-4 text-right">{formatNumber(transaction.value)}</div>
    <div className="w-1/6 py-2 px-4 text-right">{transaction.fee}</div>
  </div>
);

const TransactionTable = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Simulating data fetching
    setTimeout(() => {
      setTransactions([
        {
          shard: "0 > 0",
          hash: "0x8e25a84368...8af9",
          age: "2d ago",
          type: "Coin transfer",
          status: "Success",
          block: "62591052",
          from: "ITC1...56pc",
          to: "ITC1...zwfv",
          value: 18941001.781,
          fee: 0.0189,
        },
        {
          shard: "0 > 0",
          hash: "0xaf51dc0cb1...14b9",
          age: "3w ago",
          type: "Coin transfer",
          status: "Success",
          block: "61718424",
          from: "ITC1...56pc",
          to: "ITC1...zwfv",
          value: 32185906.477,
          fee: 0.0189,
        },
        {
          shard: "0 > 0",
          hash: "0x47f228dae0...040b",
          age: "3w ago",
          type: "Coin transfer",
          status: "Success",
          block: "61635052",
          from: "ITC1...56pc",
          to: "ITC1...zwfv",
          value: 26784388.671,
          fee: 0.0189,
        },
        {
          shard: "0 > 0",
          hash: "0xccec4f09d5...0e20",
          age: "1mo ago",
          type: "Coin transfer",
          status: "Success",
          block: "60857076",
          from: "ITC1...zwfv",
          to: "ITC1...56pc",
          value: 150000000,
          fee: 0.0021,
        },
      ]);
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="text-white p-4">
      <div className="w-full">
        <div className="flex flex-wrap text-gray-400 border-b border-gray-700">
          <div className="w-1/6 py-2 px-4">Shard</div>
          <div className="w-1/6 py-2 px-4">Txn hash</div>
          <div className="w-1/6 py-2 px-4">Type</div>
          <div className="w-1/6 py-2 px-4">Block</div>
          <div className="w-1/6 py-2 px-4">From/To</div>
          <div className="w-1/6 py-2 px-4 text-right">Value ITC</div>
          <div className="w-1/6 py-2 px-4 text-right">Fee ITC</div>
        </div>
        <div>
          {isLoading ? (
            <div
              className="py-4 px-4 text-center bg-yellow-900 text-yellow-300"
            >
              scanning new transactions...
            </div>
          ) : (
            transactions.map((tx, index) => (
              <TransactionRow key={index} transaction={tx} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

const AddressDetails = () => {
  const [activeTab, setActiveTab] = useState("Transactions");
  const tabs = [
    "Transactions",
    "Staking",
    "Token transfers",
    "Tokens",
    "Internal txns",
    "Coin balance history",
  ];
  return (
    <div className="p-5">
      <div className="head flex items-center h-8 py-7">
        <h1 className="text-grey-900  text-4xl font-semibold mr-4">
          Address details
        </h1>
        <h1 className="bg-[#FFFFFF3D] p-1 rounded">EOA</h1>
      </div>
      <div className="flex items-center text-2xl gap-x-4">
        <div>O</div>
        <h1 className="text-grey-900 font-semibold mr-4">
          ITC1tvhgyvt94gkf7sqgude5tu6709kt9vg66pzwfv
        </h1>
        <button>
          <MdContentCopy />
        </button>
        <div className="border-solid border-2 border-blue-400 rounded text-blue-400 hover:border-blue-700 hover:text-blue-700">
          <button className="p-2">
            <IoQrCode />
          </button>
        </div>
      </div>

      {/* Staking Overview */}
      <div className="Stakingoverview py-4">
        <a href="#" className="text-blue-400 text-xl flex items-center">
          <h1 className="hover:underline">Staking Overview</h1>
          <span className="text-white pl-1 -rotate-45">
            <FaArrowRight />
          </span>
        </a>
      </div>

      {/* Details */}
      <div className="details text-2xl flex flex-col lg:flex-row items-start gap-x-20">
        <div className="flex items-start gap-x-20 flex-col">
          <div className="flex items-center gap-x-4 mb-5">
            <IoIosInformation className="border-solid border-2 border-gray-300 rounded hover:border-blue-400 transition-colors duration-300" />
            <p className="text-white font-bold">Balance</p>
          </div>
          {/* Add other fields similarly */}
        </div>
        <div className="value flex flex-col items-start">
          <p className="text-white text-right mb-5">
            2,572,065,150.15865888 ITC{" "}
            <span className="text-gray-400">($29,747,399.54)</span>
          </p>
        </div>
      </div>

      <div className="mt-6 border-gray-700 pt-4">
        <div className="flex space-x-4 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 text-xl font-medium rounded-md ${
                activeTab === tab
                  ? "bg-orange-600 text-white"
                  : "text-gray-300 hover:text-blue-700"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}{" "}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between py-5">
        <div className="filter text-3xl">Filter</div>
        <div className="flex items-center gap-x-7">
          <div className="flex items-center gap-x-1 text-2xl text-blue-400 hover:text-blue-600">
            <TbFileTypeCsv />
            <div className="hover:underline">Download CSV</div>
          </div>
          <DataSlider />
        </div>
      </div>

      {/* Address Details Table */}
      <TransactionTable />
    </div>
  );
};

export default AddressDetails;
