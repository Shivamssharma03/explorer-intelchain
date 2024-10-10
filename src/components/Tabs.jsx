import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="inline-flex  p-2 rounded-lg">
      <div
        className={`px-4 py-2 rounded-lg cursor-pointer ${
          activeTab === "All"
            ? "bg-[#ffb545] text-white"
            : "bg-[#ff7a12] text-white"
        }`}
        onClick={() => setActiveTab("All")}
      >
        All
      </div>
      <div
        className={`px-4 py-2 rounded-lg cursor-pointer ml-2 ${
          activeTab === "Forked"
            ? "bg-[#ffb545] text-white"
            : "bg-[#ff7a12] text-white"
        }`}
        onClick={() => setActiveTab("Forked")}
      >
        Forked
      </div>
      <div
        className={`px-4 py-2 rounded-lg cursor-pointer ml-2 ${
          activeTab === "Uncles"
            ? "bg-[#ffb545] text-white"
            : "bg-[#ff7a12] text-white"
        }`}
        onClick={() => setActiveTab("Uncles")}
      >
        Uncles
      </div>
    </div>
  );
};

export default Tabs;
