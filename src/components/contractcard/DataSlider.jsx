import React, { useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const DataSlider = () => {
  const [value, setValue] = useState(1);

  const handleIncrement = () => {
    setValue(prevValue => prevValue + 1);
  };

  const handleDecrement = () => {
    setValue(prevValue => (prevValue > 1 ? prevValue - 1 : prevValue));
  };

  const handleReset = () => {
    setValue(1);
  };

  return (
    <div className="hidden items-center  space-x-2  md:flex">
      <button
        className="border-solid border-2 border-gray-500 text-center text-white px-3 py-1 h-8 rounded-md opacity-25"
        onClick={handleReset}
      >
        First
      </button>
      <button
        className="bg-gray-700 text-white px-3 py-1 h-8 rounded-md"
        onClick={handleDecrement}
      >
        <FaAngleLeft />
      </button>
      <span className="bg-[#ff7a12] text-white text-white px-3 py-1 h-8 rounded-md">
        {value}
      </span>
      <button
        className="bg-gray-700 text-white px-3 py-1 h-8 rounded-md"
        onClick={handleIncrement}
      >
        <FaAngleRight />
      </button>
    </div>
  );
};

export default DataSlider;
