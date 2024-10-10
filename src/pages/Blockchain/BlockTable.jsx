import React, { useState, useEffect } from 'react';
import { CopyIcon, Flame } from 'lucide-react';

const truncateAddress = (address) => `${address.slice(0, 6)}...${address.slice(-4)}`;

const formatNumber = (num) => new Intl.NumberFormat('en-US').format(num);

const formatPercentage = (num) => `${num.toFixed(2)}%`;

const BlockRow = ({ block }) => (
  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-700 py-4 space-y-2 sm:space-y-0 sm:space-x-4">
    <div className="flex-1 text-left sm:px-2">
      <div className="text-[#e29a2f]">{block.number}</div>
      <div className="text-gray-500 text-sm">{block.age}</div>
    </div>
    <div className="flex-1 text-left sm:text-center sm:px-2">
      {formatNumber(block.size)} bytes
    </div>
    <div className="flex-1 text-left sm:text-center sm:px-2">
      <div className="flex items-center space-x-2">
        <div className="w-6 h-6 rounded-full bg-red-500"></div>
        <span className="text-[#e29a2f]">{truncateAddress(block.miner)}</span>
        <CopyIcon size={16} className="text-gray-400 cursor-pointer" />
      </div>
    </div>
    <div className="flex-1 text-left sm:text-center sm:px-2">{block.txn}</div>
    <div className="flex-1 text-left sm:text-center sm:px-2">
      <div>{formatNumber(block.gasUsed)}</div>
      <div className="flex items-center space-x-2 text-sm">
        <span className="text-[#e29a2f]">{formatPercentage(block.gasUsedPercentage)}</span>
        <span className="text-red-400">{formatPercentage(block.gasUsedChange)}</span>
      </div>
    </div>
    <div className="flex-1 text-right sm:px-2">{block.reward}</div>
    <div className="flex-1 text-right sm:px-2">
      <div className="flex justify-end items-center space-x-1">
        <Flame size={16} className="text-gray-400" />
        <span>{block.burntFees}</span>
      </div>
      <div className="text-green-400 text-sm">{block.burntFeesPercentage}</div>
    </div>
  </div>
);

const BlockTable = () => {
  const [blocks, setBlocks] = useState([]);
  const [newBlocksCount, setNewBlocksCount] = useState(0);

  const fetchNewBlock = () => {
    const lastBlock = blocks[0] || { number: 62718765 };
    const newBlock = {
      number: lastBlock.number + 1,
      age: '6m ago',
      size: Math.floor(Math.random() * 1000) + 1000,
      miner: 'ITC1...42ux',
      txn: Math.floor(Math.random() * 5) + 1,
      gasUsed: Math.floor(Math.random() * 300000) + 20000,
      gasUsedPercentage: Math.random() * 1,
      gasUsedChange: -(Math.random() * 2 + 98),
      reward: '0.00000000',
      burntFees: '0.00000000',
      burntFeesPercentage: '0%'
    };
    setBlocks((prevBlocks) => [newBlock, ...prevBlocks.slice(0, 7)]); // Ensure only the last 8 blocks are shown
    setNewBlocksCount((count) => count + 1);
  };

  useEffect(() => {
    const interval = setInterval(fetchNewBlock, 1000); // Fetch new block every second
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-white p-4">
      <div className="w-full">
        <div className="text-gray-400 border-b border-gray-700 py-2 px-4">
          <div className="flex flex-col sm:flex-row justify-between">
            <div className="flex-1 sm:text-left text-center">Block</div>
            <div className="flex-1 text-left sm:text-center">Size, bytes</div>
            <div className="flex-1 text-left sm:text-center">Miner</div>
            <div className="flex-1 text-left sm:text-center">Txn</div>
            <div className="flex-1 text-left sm:text-center">Gas used</div>
            <div className="flex-1 text-right">Reward ITC</div>
            <div className="flex-1 text-right">Burnt fees ITC</div>
          </div>
        </div>
        {newBlocksCount > 0 && (
          <div className="py-2 px-4 text-center bg-[#ff7a12] text-white">
            {newBlocksCount} more {newBlocksCount === 1 ? 'block has' : 'blocks have'} come in
          </div>
        )}
        {blocks.map((block) => (
          <BlockRow key={block.number} block={block} />
        ))}
      </div>
    </div>
  );
};

export default BlockTable;
