import React from 'react';
const TransactionData = [
    {
      id: 1,
      title: 'Averege transaction fee',
      description: 'Average amount in one spent in per transection ',
      imgSrc: 'src/assets/gas1.png',
    },
    {
      id: 2,
      title: 'New transaction',
      description: 'New transaction number',
      imgSrc: 'src/assets/gas2.png',
    },
    {
      id: 3,
      title: 'Transaction fee',
      description: 'Amount of token paid as fees',
      imgSrc: 'src/assets/gas3.png',
    },
    {
        id: 4,
        title: 'Transaction growth ',
        description: 'Calculate transaction no.',
        imgSrc: 'src/assets/gas3.png',
      },
    
  ];
  



const Transaction = () => {
  return (
    <div className="  mt-2 ">
      {/* Heading Section */}
      <h1 className="text-4xl font-bold text-white mb-6">Transaction</h1>

      {/* Grid for Gas Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {TransactionData.map((ContractsItem) => (
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

export default Transaction;
