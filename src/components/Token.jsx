import React from 'react';
const TokenData = [
    {
      id: 1,
      title: 'Token growth',
      description: 'Average gas price over time',
      imgSrc: 'src/assets/gas1.png',
    },
    
  ];
  
const Token = () => {
  return (
    <div className=" mt-2  ">
      {/* Heading Section */}
      <h1 className="text-4xl font-bold dark:text-white text-black  mb-6">Tokens</h1>

      {/* Grid for Gas Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {TokenData.map((TokenItem) => (
          <div key={TokenItem.id} className=" rounded-lg p-4 border border-orange-300">
            <h2 className="text-lg font-bold text-white mb-2">{TokenItem.title}</h2>
            <p className="text-sm text-gray-400 mb-4">{TokenItem.description}</p>
            <img
              src="src\assets\d.png"
              alt={TokenItem.title}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Token;
