import React, { useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import { AnimatePresence } from 'framer-motion';
import GasModal from '../modals/GasModal';

export default function InfoButton() {
  // Add the useState hook to manage the hover state
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative z-9 flex justify-center items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <FaInfoCircle className="text-blue-600 cursor-pointer" size={16} />
      
      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && (
         <GasModal/>
        )}
      </AnimatePresence>
    </div>
  );
}
