import React from 'react';

export default function HomeCard({ icon: Icon, title, value }) {
  return (
  

    <div className="flex flex-col rounded-md bg-blue-500 p-4">
      <div className="flex items-center justify-center">
        {Icon && <Icon className="text-white text-2xl" />}
      </div>
      <div className="flex flex-col items-center text-white mt-2">
        <p className="text-sm">{title}</p>
        <p className="text-lg font-semibold">{value}</p>
      </div>
    </div>
    
  );
}
