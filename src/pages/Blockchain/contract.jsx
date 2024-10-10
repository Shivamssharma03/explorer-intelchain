import React, { useState } from "react";
import Contractcard from "../../components/contractcard/contractcard";
import contractData from "./ContractData";
import { MdContentCopy } from "react-icons/md";
import Filterbar from "../../components/contractcard/filterbar";
import PageHeader from "../../components/PageHeader";
import SearchBar from "../../components/SearchBar";
const Contract = () => {
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
        }, 2000);
      })
      .catch((err) => {
        setCopyStatus("Failed to copy address.");
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <div className="px-2">
      <div className="bg-transparent w-[80vw] ">
        <SearchBar />
      </div>
      <PageHeader title={"Verfied Contracts"} />
      <div className="py-4 ">
        <div className="w-full flex flex-col items-center gap-4 py-4 sm:flex-row">
          <Contractcard title="Total contracts" value="147,588" change="8" />
          <Contractcard title="Verified contracts" value="192" change="1" />
        </div>
        <Filterbar/>

        {/* Contract Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-white">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="py-2 px-4 text-left">Contract</th>
                <th className="py-2 px-4 text-left">Balance ITC</th>
                <th className="py-2 px-4 text-left">Txs</th>
                <th className="py-2 px-4 text-left">Compiler / Version</th>
                <th className="py-2 px-4 text-left">Settings</th>
                <th className="py-2 px-4 text-left">Verified</th>
                <th className="py-2 px-4 text-left">License</th>
              </tr>
            </thead>
            <tbody>
              {contractData.map((contract, index) => (
                <tr key={index} className="border-b border-gray-700">
                  <td className="py-2 px-4">
                    <div className="flex items-center gap-x-2">
                      <span className="text-green-400">↗</span>
                      <div>
                        <div className="text-[#f29a2f] hover:underline">
                          <a href="#">{contract.name}</a>
                        </div>
                        <div className="flex items-center gap-x-2 text-gray-400 text-sm">
                          {contract.address}
                          <button
                            onClick={() => handleCopy(contract.address)}
                            aria-label="Copy address"
                            className="relative"
                          >
                            <MdContentCopy className="text-blue-200 cursor-pointer" />
                            {copiedAddress === contract.address && (
                              <div className="absolute -bottom-6 left-0 bg-gray-800 text-green-400 text-xs p-1 rounded-md">
                                copied
                              </div>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-2 px-4">{contract.balance}</td>
                  <td className="py-2 px-4">{contract.txs}</td>
                  <td className="py-2 px-4">
                    {contract.compiler}{" "}
                    <a href="#" className="text-[#f29a2f]">
                      {contract.version}
                    </a>
                  </td>
                  <td className="py-2 px-4">{contract.settings ? "✓" : "✗"}</td>
                  <td className="py-2 px-4">
                    <span className="text-green-400">✓</span>{" "}
                    {contract.verified}
                  </td>
                  <td className="py-2 px-4">-</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Contract;
