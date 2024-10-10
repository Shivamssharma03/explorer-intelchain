import { useState } from "react";
import TransactionPageData from './TransactionPageData'
import SearchBar from "../../components/SearchBar";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import PageHeader from "../../components/PageHeader";

const TransactionPage = () => {
  // State to track whether 'Mined' or 'Pending' is selected
  const [activeTab, setActiveTab] = useState("Mined");

  return (
    // whole page div
    <div className="flex flex-col min-h-screen h-full">
      <SearchBar />
      <PageHeader title={"Transactions"}/>
      {/* <div className="my-6 mx-8">
        <h2 className="text-4xl sm:text-5xl font-semibold text-white">Transactions</h2>
      </div> */}
      <div className="flex gap-4 px-8 py-8 mx-2">
        <button
          className={`p-2 rounded-sm text-white ${activeTab === "Mined" ? "bg-[#FF9700]" : " bg-[#ffb545]"}`}
          onClick={() => setActiveTab("Mined")}
        >
          Mined
        </button>
        <button
          className={`p-2 rounded-sm text-white ${activeTab === "Pending" ? "bg-[#FF9700]" : "bg-[#ffb545]"}`}
          onClick={() => setActiveTab("Pending")}
        >
          Pending
        </button>
      </div>

      {/* Conditional Rendering based on the activeTab */}
      {activeTab === "Mined" ? (
        // TransactionTable Div
        <div className="flex justify-center items-center" id="TransactionTable">
          <div className="bg-[#060134] text-white font-sans max-w-screen-xl w-full rounded-md">
            {/* Header */}
            <div className="px-4 py-2 bg-[#374151] text-sm">
              350 more transactions have come in
            </div>

            {/* Table Header */}
            <div className="px-2 sm:px-8 py-2  flex-wrap text-xs sm:text-sm text-gray-400 gap-2 sm:gap-10 justify-center hidden md:flex">
              <div className="w-12 sm:w-12 font-semibold">Shard</div>
              <div className="w-28 sm:w-40 font-semibold">Txn Hash</div>
              <div className="w-20 sm:w-28 font-semibold">Type</div>
              <div className="w-16 sm:w-24 font-semibold">Method</div>
              <div className="hidden sm:block w-24 font-semibold">Block</div>
              <div className="w-28 sm:w-36 font-semibold">From/To</div>
              <div className="w-20 sm:w-24 text-[#60a5fa] text-lg">Value ITC</div>
              <div className="w-20 sm:w-24 text-[#60a5fa] text-lg">Fee ITC</div>
            </div>

            {/* Transactions */}
            {TransactionPageData.map((tx, index) => (
              <div
                key={index}
                className="py-2 flex flex-wrap text-xs sm:text-sm gap-2 sm:gap-10 items-center mx-4 sm:mx-7 px-2 sm:px-4 border-b border-gray-700"
              >
                <div className="w-12 sm:w-20 flex justify-center">{tx.shard}</div>

                <div className="w-28 sm:w-32 text-[#60a5fa]">
                  {tx.txnHash}
                  <span className="ml-1 sm:ml-2 text-gray-500 text-[10px] sm:text-xs">
                    {tx.timeAgo}
                  </span>
                </div>

                {/* <div className="w-20 sm:w-28 flex flex-col">
                  <span className="bg-[#1e3a8a] text-[#93c5fd] px-2 py-1 rounded text-[10px] sm:text-xs">
                    {tx.type}
                  </span>
                  <span
                    className={`px-3 my-1 rounded-sm flex items-center   ${
                      tx.status === "Failed" ? "text-red-500 bg-red-950 text-sm font-bold" : ""
                    } ${tx.status === "Success" ? "text-green-400 bg-green-950 text-sm font-bold" : ""}`}
                  >
                    {tx.status}
                  </span>
                </div> */}
                {tx.contactType === "Contract Call" && 
                  <div className="w-20 sm:w-28 flex flex-col">
                  <button className="bg-yellow-900 text-[#ffb341]  px-2 py-2 rounded sm:text-[13px] text-xs font-bold">
                  Contract Call
                  </button>
                <button
                  className={`px-3 rounded-sm flex py-1 my-2 items-center justify-evenly  ${
                  tx.status === "Failed" ? "text-red-500 bg-red-950 text-sm font-bold" : ""
                  } ${tx.status === "Success" ? "text-green-400 bg-green-950 text-sm font-bold" : ""}`}
                    >
                  <span className="font-lg mr-1">
                  </span>
                {tx.status === "Failed" && <IoIosCloseCircleOutline  size={18}/>}
                {tx.status== "Success" && <FaCheckCircle/>}
                {tx.status}
                </button>           
                </div>}
                {tx.contactType === "Token Transfer" && 
                  <div className="w-20 sm:w-28 flex flex-col ">
                  <button className="bg-yellow-900 text-[#ffb341]  px-2 py-2 rounded sm:text-[13px] text-xs font-bold">
                  Token Transfer
                  </button>
                <button
                  className={`px-2 py-1 my-2 rounded-sm flex items-center justify-evenly font-bold  ${
                  tx.status === "Failed" ? "text-red-500 bg-red-950 text-sm font-bold" : ""
                  } ${tx.status === "Success" ? "text-green-400 bg-green-950 text-sm font-bold" : ""}`}
                    >
                  <span className="font-lg mr-1">
                  </span>
                {tx.status === "Failed" && <IoIosCloseCircleOutline  size={18}/>}
                {tx.status== "Success" && <FaCheckCircle/>}
                {tx.status}
                </button>           
                </div>}





                <div className="w-16 sm:w-24">
                  <span className="bg-[#374151] text-gray-300 px-2 py-1 rounded sm:text-[13px] text-xs flex justify-center">
                    {tx.method}
                  </span>
                </div>

                <div className="hidden sm:flex w-24 justify-center">
                  {tx.block}
                </div>

                <div className="w-28 sm:w-36 flex items-center justify-center">
                  <p className="text-gray-500 mr-1">↓</p>
                  <div className="flex flex-col items-start">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-yellow-500 mr-1"></div>
                      <span className="truncate">{tx.fromTo}</span>
                    </div>
                    <span className="text-[10px] sm:text-xs text-gray-500">
                      Heartbeat
                    </span>
                  </div>
                </div>

                <div className="w-20 sm:w-24 flex justify-center">
                  <p className="flex md:hidden">Value ITC:</p> {tx.valueITC}
                </div>

                <div className="w-20 sm:w-24 flex justify-center">
                  <p className="flex md:hidden">Fee ITC:</p> {tx.feeITC}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Pending message
        <div className="flex mx-8 px-8 min-h-screen h-full" id="PendingMessage">
          <p className="text-white text-xl">No data pending</p>
        </div>
      )}
    </div>
  );
};

export default TransactionPage;
