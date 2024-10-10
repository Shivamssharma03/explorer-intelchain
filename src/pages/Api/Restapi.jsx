import { useState } from "react";
import { SchemaData, RoutesData } from "./RestapiData";
import { RiFileCopyLine } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa";

const RestApi = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeSubIndex, setActiveSubIndex] = useState(null);
  const [copySuccess, setCopySuccess] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null); // State to hold the index of copied item

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const toggleSubAccordion = (subIndex) => {
    setActiveSubIndex(subIndex === activeSubIndex ? null : subIndex);
  };

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index); // Set the index of the item that was copied
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000); // Reset copy success message
  };

  return (
    <>
      <div className="min-h-screen h-auto dark:bg-[#040020] bg-white dark:text-white text-black flex justify-center flex-col items-center max-w-screen-2xl w-[80vw]">
        <div className=" max-w-screen-xl sm:w-[95%] w-[95%] py-8 my-5">
          <h1 className="text-4xl font-medium dark:text-white text-black my-10">API Documentation</h1>
          {RoutesData.map((item, index) => (
            <div
              key={index}
              className="border border-[#ffe6bf] w-full bg-gradient-to-r from-[#040020] to-[#060136] rounded-md px-0 cursor-pointer mb-3"
              
            >
              <div className="flex items-center h-12 py-4 justify-between">
                <div className="flex items-center">
                  <button
                    className="bg-[#FF9700] w-20 text-sm font-bold h-9 rounded-md text-white px-8 flex justify-center items-center mx-3"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>{item.title}</span>
                  </button>
                  <span className="text-white font-bold mx-2">{item.routes}</span>
                  <span className="text-white mx-3">{item.text}</span>
                </div>
                <div className="flex gap-2 mx-2">
                  <button className="bg-black text-white rounded-xl" onClick={() => toggleAccordion(index)}>
                    <FaAngleDown/>
                  </button>
                  <button
                    className="bg-[#FF9700] hover:bg-[#ff7728] text-white font-bold py-2 px-2 rounded flex items-center"
                    onClick={() => copyToClipboard(item.title, index)} // Pass index to copyToClipboard
                  >
                    <RiFileCopyLine className="inline-block mr-1" /> 
                    {copySuccess && copiedIndex === index && ( // Check if copiedIndex matches current index
                      <span className="ml-2 text-white">Copied!</span>
                    )}
                  </button>
                </div>
              </div>
              {/* Accordion Content */}
              <div
                className={`transition-all duration-1000 ease-in-out ${
                  activeIndex === index
                    ? "max-h-screen-lg opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {activeIndex === index && (
                  <div className="bg-gray-900 text-white p-3 rounded-lg shadow-lg">
                    <div className="flex justify-between items-center bg-[#101112] py-5 px-5">
                      <h2 className="text-xl font-bold">Parameters</h2>
                      <button
                        className="text-blue-500 text-white px-4 py-2 rounded border-solid border-[3px] font-bold border-blue-500 bg-[#1A202C] transition-colors text-sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Try it out
                      </button>
                    </div>
                    <div className="mb-6 bg-[#2D3748] py-10 px-6">
                      <div className="flex items-center ">
                        <span className="w-24 my-2">Name</span>
                        <span className="w-24 my-2">Description</span>
                      </div>
                      <div className="flex items-center my-2 mx-3">
                        <span className="w-24 text-white">q</span>
                        <input
                          type="text"
                          value="USDT"
                          className="bg-white text-black px-3 py-2 rounded w-16 sm:w-[30%]"
                          placeholder="Enter query"
                          onClick={(e) => e.stopPropagation()}
                        />
                      </div>
                      <div className="text-sm text-white mt-1 my-2 mx-3 flex flex-col">
                        <span className="my-2">string</span>
                        <span>(query)</span>
                      </div>
                    </div>
                    <div className="w-full flex bg-[#101112] item-center px-5">
                      <h2 className="text-xl font-bold mt-8 mb-4 bg-[#101112] pb-2">
                        Responses
                      </h2>
                    </div>
                    <div className="bg-gray-800 p-4 rounded">
                      <div className="flex items-center justify-between my-6">
                        <div className="flex items center gap-10">
                          <span className="font-semibold">Code</span>
                          <span className="font-semibold">Description</span>
                        </div>
                        <span className="font-semibold">Links</span>
                      </div>
                      <div className="flex items-center justify-between my-6">
                        <div className="flex items-center gap-10">
                          <span>200</span>
                          <span>search response</span>
                        </div>
                        <span className="text-gray-400">No links</span>
                      </div>
                      <div className=" flex justify-around pr-8">
                        <div className="max-w-screen-lg w-full flex flex-col">
                          <span className="text-sm text-gray-400 py-3">
                            Media type
                          </span>
                          <select
                            className="bg-gray-700 text-white px-3 rounded mt-1 w-[50%] py-3 my-3"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <option>application/json</option>
                          </select>
                        </div>
                      </div>
                      <div className="text-green-400 text-sm mt-2">
                        Controls Accept header.
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Schema Accordions */}
        <div className="sm:w-[95%] w-[95%] max-w-screen-xl py-8 mx-auto bg-[#1E1E1E] text-white">
          {SchemaData.map((item, index) => (
            <div
              key={index}
              className="mb-2 border border-[#3C3C3C] rounded bg-[#2B2B2B] overflow-hidden"
            >
              <div
                className="flex items-center gap-3 p-4 cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <h2 className="font-bold">{item.title}</h2>
                <button className="bg-[#1C1C1C] text-sm font-bold py-1 px-3 rounded border border-[#3C3C3C]">
                  {activeIndex === index ? "-" : "+"}
                </button>
              </div>
              <div
                className={`transition-all duration-500 ease-in-out ${
                  activeIndex === index ? "max-h-screen" : "max-h-0"
                } overflow-hidden`}
              >
                {item.content ? (
                  <div className="bg-[#262626] p-4">
                    {item.content.map((subItem, subIndex) => (
                      <div key={subIndex} className="mb-2">
                        <div className="flex gap-3 items-center mb-1 w-[20%] justify-between">
                          <span>{subItem.label}</span>
                          {subItem.subContent ? (
                            <button
                              className="bg-[#1C1C1C] text-xs font-bold py-1 px-2 rounded border border-[#3C3C3C]"
                              onClick={() => toggleSubAccordion(subIndex)}
                            >
                              {activeSubIndex === subIndex ? "-" : "+"}
                            </button>
                          ) : (
                            <span>{subItem.value}</span>
                          )}
                        </div>
                        {subItem.subContent && (
                          <div
                            className={`transition-all duration-500 ease-in-out pl-4 border-l border-[#3C3C3C] ${
                              activeSubIndex === subIndex ? "max-h-screen" : "max-h-0"
                            } overflow-hidden`}
                          >
                            {subItem.subContent.map((subContentItem, innerIndex) => (
                              <div key={innerIndex} className="ml-2 mb-2">
                                <span className="block text-sm">
                                  {subContentItem.label}: {subContentItem.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-[#262626] p-4">No content available</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RestApi;
