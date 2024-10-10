import { useState } from "react";
import TransactionsData from "./TransactionsData";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { GrTransaction } from "react-icons/gr";
import { FaArrowDown } from "react-icons/fa";
import { FaBasketballBall } from "react-icons/fa";
import { RiFileCopyLine } from "react-icons/ri";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";
import {Link} from "react-router-dom"


const Transactions = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [copySuccess, setCopySuccess] = useState(false);
  const [copySuccess1, setCopySuccess1] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [copiedIndex1, setCopiedIndex1] = useState(null); // Track which item is copied

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopySuccess(true);
    setCopiedIndex(index);
    setTimeout(() => {
      setCopySuccess(false);
      setCopiedIndex(null);
    }, 500); // Reset copy success message after 2 seconds
  };
  const copyToClipboard1 = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopySuccess1(true);
    setCopiedIndex1(index);
    setTimeout(() => {
      setCopySuccess1(false);
      setCopiedIndex(null);
    }, 500); // Reset copy success message after 2 seconds
  };

  return (
    <>
    <div className="bg-white rounded-lg shadow-md w-full mx-3">
    <h2 className="text-lg font-semibold  dark:text-white text-black text-center dark:bg-[#070136] bg-white ">Latest Transactions</h2>
    <div className="dark:bg-[#070136] bg-white max-w-screen-lg w-full flex flex-col mx-auto min-h-screen h-auto  py-4">
      <div className="w-full bg-[#654321] font-md px-4 py-2 rounded-t-md">
        <p className="text-blue-500">
          1000 more Transactions <span className="text-white">have come in</span>
        </p>
      </div>

      {TransactionsData.map((item, index) => (
        <div
          key={item.id}
          className="flex flex-col sm:flex-row text-white w-full border-b border-gray-700 py-4 my-4 flex-wrap sm:h-full"
        >
          {/* Left Section */}
          <div className="flex flex-col sm:w-1/2 w-full p-3">
          
          {item.contactType === "Contact Call" && 
           <div className="flex gap-3 items-center mb-3">
           <button className="bg-yellow-900 text-[#ffb341] font-bold text-sm py-1 flex justify-center items-center rounded-sm px-2">
           Contact Call
          </button>
          <button
            className={`px-3 py-1 rounded-sm flex items-center justify-center  ${
              item.status === "Failed" ? "text-red-500 bg-red-950 text-sm font-bold" : ""
            } ${item.status === "Success" ? "text-green-400 bg-green-950 text-sm font-bold" : ""}`}
          >
            <span className="font-lg mr-1">
              
              
            </span>
            {item.status === "Failed" && <IoIosCloseCircleOutline  size={18}/>}
            {item.status== "Success" && <FaCheckCircle/>}
            {item.status}
          </button>           
          </div>}
          {item.contactType === "Token Transfer" && 
           <div className="flex gap-3 items-center mb-3">
           <button className="bg-yellow-900 text-[#ffb341] font-bold text-sm py-1 flex justify-center items-center rounded-sm px-2">
           Token Transfer
          </button>
          <button
            className={`px-3 py-1 rounded-sm flex items-center justify-center  ${
              item.status === "Failed" ? "text-red-500 bg-red-950 text-sm font-bold" : ""
            } ${item.status === "Success" ? "text-green-400 bg-green-950 text-sm font-bold" : ""}`}
          >
            <span className="font-lg mr-1">
            </span>
            {item.status === "Failed" && <IoIosCloseCircleOutline  size={18}/>}
            {item.status== "Success" && <FaCheckCircle/>}
            {item.status}
          </button>           
          </div>}
            <div className="flex gap-3 items-center">
              <i>
                <GrTransaction />
              </i>
              <Link to= "/" className="text-[#FF9700]">{item.user}</Link>
            <p>{item.timeAgo}</p>
            </div>
          </div>

          {/* Middle Section */}
          <div className="sm:w-1/3 w-full p-3 sm:border-none border-gray-700">
            <div className="flex gap-3 items-center">
              <i>
                <FaArrowDown />
              </i>
              <i>
                <FaBasketballBall />
              </i>
              <p>{item.details.name}</p>
              <button
                className="bg-gray-950"
                onClick={() => copyToClipboard(item.details.name, index)} // Pass index to copyToClipboard
              >
                <RiFileCopyLine className="inline-block mr-1 bg-black" />
                {copySuccess && copiedIndex === index && (
                  <span className="text-white">!</span>
                )}
              </button>
            </div>

            <div className="relative inline-block mt-3">
              <div
                className="flex gap-3 items-center hover:border hover:border-blue-500 hover:rounded-md  hover:text-blue-500 px-2 py-1 cursor-pointer"
                onMouseEnter={() => setHoveredItem(item.id)} // Set hovered item
                onMouseLeave={() => setHoveredItem(null)} // Reset hovered item
              >
                <i><RiVerifiedBadgeFill /></i>
                <p>{item.heartbeatType}</p>
                <button
                className="bg-gray-950"
                onClick={() => copyToClipboard1(item.details.name, index)} // Pass index to copyToClipboard
              >
              <RiFileCopyLine className="inline-block mr-1 bg-black" />
                {copySuccess1 && copiedIndex1 === index && (
                  <span className="text-white"></span>
                )}
              </button>

              </div>

              {/* Tooltip */}
              {hoveredItem === item.id && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 p-2 bg-gray-700 text-white text-sm rounded flex flex-col">
                  <p>{item.heartbeatType}</p>
                  <Link>{item.user}</Link>
                </div>
              )}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col sm:w-1/6 w-full p-3 sm:border-none border-gray-700">
            <div className="flex gap-3">
              <p>ITC</p>
              <p>{item.one}</p>
            </div>
            <div className="flex gap-3">
              <p>Fee</p>
              <p>{item.fee}</p>
            </div>
            <div className="flex gap-3">
              <p>Shard</p>
              <p>{item.shard}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
    
    
    
    </>
    
  );
};

export default Transactions;
