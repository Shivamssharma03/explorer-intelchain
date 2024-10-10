import React from "react";
import DataSlider from "../../components/contractcard/DataSlider";
import BlockTable from "./BlockTable";
import PageHeader from "../../components/PageHeader";
import SearchBar from "../../components/SearchBar";
import Tabs from "../../components/Tabs";

const Block = () => {
  return (
    <>
      <div className="mt-10 ">
        <div className="bg-transparent ">
          <SearchBar />
        </div>
        <PageHeader title={"Blocks"} />
        <div className="flex items-center justify-between  py-2">
          <div className="">
            <Tabs />
          </div>
          <div>
            <DataSlider />
          </div>
        </div>
        <div>
          <BlockTable />
        </div>
      </div>
    </>
  );
};

export default Block;
