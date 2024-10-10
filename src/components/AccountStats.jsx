import React from 'react';

const AccountStats = () => {
  return (
    <div className="p-4   ">
      {/* Heading Section */}
      <h1 className="text-4xl font-bold text-white mb-6">Accounts</h1>

      {/* Grid for Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 ">
        {/* First Chart (Accounts Growth) */}
        <div className=" rounded-lg p-4 border border-orange-300">
          <h2 className="text-lg font-bold text-white mb-2">Accounts growth</h2>
          <p className="text-sm text-gray-400 mb-4 ">Cumulative accounts number per period</p>
          <img
            src="src\assets\d.png"
            alt="Accounts growth"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Second Chart (Active Accounts) */}
        <div className=" rounded-lg p-4 border border-orange-300">
          <h2 className="text-lg font-bold text-white mb-2">Active accounts</h2>
          <p className="text-sm text-gray-400 mb-4">Active accounts number per period</p>
          <img
            src="src\assets\d.png"
            alt="Active accounts"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Third Chart (New Accounts) */}
        <div className=" rounded-lg p-4 border border-orange-300">
          <h2 className="text-lg font-bold text-white mb-">New accounts</h2>
          <p className="text-sm text-gray-400 mb-4">New accounts number per day</p>
          <img
            src="src\assets\d.png"
            alt="New accounts"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AccountStats;
