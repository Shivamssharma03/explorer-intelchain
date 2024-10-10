import React from "react";
import ShardComponent from "./ShardComponent";
const PageHeader = (props) => {
  return (
    <>
      <div className="flex items-center justify-between pt-0 py-4 mt-5">
        <h1 className="text-white-900 text-4xl font-medium">{props.title}</h1>
        <div className="">
          <ShardComponent />
        </div>
      </div>
    </>
  );
};

export default PageHeader;
