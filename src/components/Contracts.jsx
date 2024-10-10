import React from 'react';
const ContractData = [
    {
      id: 1,
      title: 'Contract growth',
      description: 'Average gas price over time',
      imgSrc: 'src/assets/gas1.png',
    },
    {
      id: 2,
      title: 'New Contracts',
      description: 'Real-time gas price for transactions',
      imgSrc: 'src/assets/gas2.png',
    },
    {
      id: 3,
      title: 'New varified contract',
      description: 'Total Block used per period',
      imgSrc: 'src/assets/gas3.png',
    },
    {
        id: 4,
        title: 'varified contract growth ',
        description: 'Total Block used per period',
        imgSrc: 'src/assets/gas3.png',
      },
    
  ];
  



const Contracts = () => {
  return (
    <div className="  mt-2 ">
      {/* Heading Section */}
      <h1 className="text-4xl font-bold text-white mb-6">Contracts</h1>

      {/* Grid for Gas Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {ContractData.map((ContractsItem) => (
          <div key={ContractsItem.id} className="border border-orange-300 rounded-lg p-4">
            <h2 className="text-lg font-bold text-white mb-2">{ContractsItem.title}</h2>
            <p className="text-sm text-gray-400 mb-4">{ContractsItem.description}</p>
            <img
              src="src\assets\d.png"
              alt={ContractsItem.title}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contracts;
