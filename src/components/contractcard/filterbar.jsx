import React from "react";
// import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { IoMdSearch } from "react-icons/io";
import DataSlider from "./DataSlider";
const Filterbar = () => {
  return (
    <>
      <div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <button className="border-solid border-2 border-gray-500 text-white px-3 py-1 rounded-md flex items-center">
              <span className="mr-2">Filter</span>
              {/* <ChevronRight size={16} /> */}
            </button>
            <div className="border-solid border-2 border-gray-500 text-white pl-2 pr-4 py-1 rounded-md w-100">
              <form action="" className="flex items-center ">
                <IoMdSearch className="text-xl mr-4" />
                <input
                  type="text"
                  placeholder="Search by contract name or address"
                  className="bg-transparent text-white  rounded-md w-64"
                />
              </form>
            </div>
          </div>
          <DataSlider/>
        </div>
      </div>
    </>
  );
};

export default Filterbar;
