import React from "react";

const contractcard = (props) => {
  return (
    <>
      <div className="bg-orange-600 p-4 rounded-lg w-full">
        <h2 className="text-white-400 mb-2">{props.title}</h2>
        <div className="flex items-baseline">
          <span className="text-2xl font-bold text-white mr-2">{props.value}</span>
          <span className="text-black">+{props.change} </span>
          <span className="px-4">(24h) </span>
        </div>
      </div>
    </>
  );
};

export default contractcard;
