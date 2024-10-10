// src/components/ChartItem.js

import React from 'react';

const ChartItem = ({ title, description, imageUrl, altText }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <h2 className="text-lg font-bold text-white mb-2">{title}</h2>
      <p className="text-sm text-gray-400 mb-4">{description}</p>
      <img
        src={imageUrl}
        alt={altText}
        className="w-full h-auto object-cover rounded-lg"
      />
    </div>
  );
};

export default ChartItem;
