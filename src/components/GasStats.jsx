import React from 'react';
import gasData from './GasStatsData';



const GasStats = () => {
  return (
    <div className="p-2 ">
      {/* Heading Section */}
      <h1 className="text-4xl font-bold text-white mb-6">Gas</h1>

      {/* Grid for Gas Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 ">
        {gasData.map((gasItem) => (
          <div key={gasItem.id} className="rounded-lg p-4 border border-orange-300">
            <h2 className="text-lg font-bold text-white mb-2">{gasItem.title}</h2>
            <p className="text-sm text-gray-400 mb-4 ">{gasItem.description}</p>
            <img
              src="src\assets\d.png"
              alt={gasItem.title}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GasStats;
