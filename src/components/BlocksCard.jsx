import { blocks } from '../pages/Home/Data';
import { IoIosCube } from "react-icons/io";

const BlocksCard = () => {
  return (
    <div className="mx-3 rounded-lg shadow-md w-[50%] flex flex-col items-center">
      <h2 className="text-lg font-semibold mb-2 dark:text-white text-black">Latest Blocks</h2>
      {blocks.map((item, index) => (
        <div
          key={index}
          className="w-full max-w-80 m-2 h-56 flex flex-col text-white py-2 px-4 text-lg rounded-md border border-gray-700 bg-gradient-to-b from-[#040020] to-[#060136]"
        >
          <div className="flex justify-between px-2 my-3 ">
            <div className="flex gap-3 mx-2 mt-2 items-center">
              <i><IoIosCube size={22} /></i> 
              <p className="text-blue-500 font-bold text-xl hover:border-b-[3px] hover:border-b-blue-500">
                {item.blockNumber}
              </p>
            </div>
            <div>
              <p>{item.time}</p>
            </div>
          </div>
          <div className="flex gap-2 my-2">
            <ul className="my-3 px-2">
              <li className="flex justify-between">
                <p>Shard</p>
              </li>
              <li className="flex justify-between">
                <p>Txn</p>
              </li>
              <li className="flex justify-between">
                <p>Reward</p>
              </li>
              <li className="flex justify-between">
                <p>Miner</p>
              </li>
            </ul>
            <ul className="my-3 mx-6">
              <li className="flex justify-between">
                <p>{item.shard}</p>
              </li>
              <li className="flex justify-between">
                <p>{item.txn}</p>
              </li>
              <li className="flex justify-between">
                <p>{item.reward}</p>
              </li>
              <li className="flex justify-between">
                <p>{item.miner}</p>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlocksCard;
