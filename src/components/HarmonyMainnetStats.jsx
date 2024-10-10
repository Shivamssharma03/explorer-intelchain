import React from 'react';
import stats from './ChartData';
import Iicon from './Iicon';
import ShardComponent from './ShardComponent';

const StatCard = ({ title, value }) => (
  <div className="bg-orange-500 p-4 rounded-lg flex flex-col justify-between">
    <div className="flex justify-between items-start mb-2">
      <h3 className="text-sm text-white-400">{title}</h3>
      {/* i icon component */}
      <Iicon />
    </div>
    <p className="text-xl font-bold text-white">{value}</p>
  </div>
);

const HarmonyMainnetStats = () => {
  return (
    <div className=" text-white-900 p-6 rounded-lg mt-10"> {/* Added top margin here */}
      {/* Flex container for heading and ShardComponent */}
      <div className="flex justify-between items-center mb-5">
        <h5 className="text-4xl font-bold">Intelchain</h5>
        {/* ShardComponent placed next to heading */}
        <ShardComponent />
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default HarmonyMainnetStats;
