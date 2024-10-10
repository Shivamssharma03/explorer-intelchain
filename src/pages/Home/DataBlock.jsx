import React from 'react';

// import { blocks, transactions } from './Data'
import BlocksCard from '../../components/BlocksCard';
import Transactions from '../../components/Transactions';

const DataBlock = () => {
  return (
    <div className="min-h-screen pt-8">
      <div className="flex ">
        <BlocksCard  />
        <Transactions  />
      </div>
    </div>
  );
};

export default DataBlock;
