import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GasModalData } from './GasModalData'; // Import the gas modal data

export default function GasModal({ onMouseEnter, onMouseLeave }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev + 1) % 31); // Progress increases every second, resets after 30
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <>
      <motion.div
        className="absolute top-2 left-0 z-9 bg-gray-800 text-white rounded-md p-4 shadow-lg w-64"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        onMouseEnter={onMouseEnter} // Prevent modal from closing when hovering over it
        onMouseLeave={onMouseLeave} // Set delay when mouse leaves
      >
        {/* Header section with last update time and circle */}
        <div className="text-sm flex items-center justify-between mb-2">
          <span className="text-gray-400">Last update</span>
          <span className="text-gray-400">Sep 11, 11:02:06</span>

          {/* Circle with grey border, transparent background, and orange fill animation */}
          <div className="relative ml-2 flex items-center justify-center">
            <span className="h-4 w-4 rounded-full flex items-center justify-center relative">
              <svg className="absolute inset-0">
                <circle
                  cx="8"
                  cy="8"
                  r="6"
                  // stroke="gray"
                  strokeWidth="2"
                  fill="transparent"
                  strokeDasharray="31.4"
                  strokeDashoffset={31.4 - (progress / 30) * 31.4}
                  className="transition-all duration-1000"
                  stroke="orange"
                />
              </svg>
            </span>
          </div>
        </div>

        {/* Gas tracker prices */}
        <div className="mb-2 text-sm space-y-2">
          {GasModalData.map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <div className="flex">
                <span>{item.speed}</span>
                <span className="text-gray-400 text-xs ml-1">{item.time}</span>
              </div>
              <div className="text-right">
                <span>{item.cost}</span>
              </div>
              <div className="text-right text-gray-400">
                <span>{item.gwei}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Gas tracker overview link */}
        <Link to="/gas-tracker" className="text-yellow-600 underline text-sm">
          Gas tracker overview
        </Link>
      </motion.div>
    </>
  );
}
