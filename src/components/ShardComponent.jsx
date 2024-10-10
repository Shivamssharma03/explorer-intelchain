import React, { useState } from 'react';

const ShardComponent = () => {
  const [selectedShard, setSelectedShard] = useState(null); // Track which shard is selected (null, 0, or 1)

  return (
    <div className="flex justify-end mb-4 ">
      <div className=" border border-gray-800 rounded-lg">
        {/* Shard 0 */}
        <button
          className={`px-3 py-1 no-underline text-sm  ${
            selectedShard === 0 ? 'text-white-700 bg-orange-500 rounded-l ' : 'text-orange-400'
          }`}
          onClick={() => setSelectedShard(0)}
        >
          Shard 0
        </button>

        {/* Shard 1 */}
        <button
          className={`px-3 py-1 no-underline text-sm ${
            selectedShard === 1 ? 'text-white-700 bg-orange-500 rounded-r ' : 'text-orange-400'
          }`}
          onClick={() => setSelectedShard(1)}
        >
          Shard 1
        </button>
      </div>
    </div>
  );
};

export default ShardComponent;
