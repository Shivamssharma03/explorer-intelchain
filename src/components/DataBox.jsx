import React, { useState } from "react";
import { GrStatusInfo, GrTransaction } from "react-icons/gr";
import { IoCubeOutline, IoWalletOutline } from "react-icons/io5";
import { FaGasPump } from "react-icons/fa"; // Import different icons
import { MdAccessTime } from "react-icons/md";
import GasModal from "../modals/GasModal";

const BlueBox = ({ title, value, tooltipContent, icon: Icon, hasInfo }) => {
  const [showModal, setShowModal] = useState(false);

  const handleMouseEnter = () => setShowModal(true);
  const handleMouseLeave = () => setShowModal(false);

  return (
    <div className="-z-1">
      {/* Blue box container */}
      <div className="dark:bg-[#ff9900d5] dark:text-[#FEFEFF] bg-[#e4941dd5] text-black p-3 w-auto rounded-lg shadow-md flex items-center justify-between">
        <div className="flex items-center">
          <Icon size={30} className="mr-4" /> {/* Dynamic Icon */}
          <div>
            <h4 className="text-xs">{title}</h4>
            <p className="text-md font-semibold">{value}</p>
          </div>
        </div>

        {/* Conditional Info button */}
        {hasInfo && (
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <GrStatusInfo size={13} className="text-white cursor-pointer" />
            {/* Show the GasModal on hover */}
            {showModal && (
              <div className="absolute top-0 left-0 ">
                <GasModal/>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="z-7 grid grid-cols-1 md:grid-cols-5 gap-5 pt-8 w-auto ">
      {/* Multiple BlueBox components with different icons and conditional info icon */}
      <BlueBox
        title="Total Blocks"
        value="62,671,909"
        tooltipContent="Additional info here"
        icon={IoCubeOutline} // Pass different icon
        hasInfo={false} // No info icon for this one
      />
      <BlueBox
        title="Average Block Time"
        value="2.0 s"
        tooltipContent="Additional info here"
        icon={MdAccessTime} // Pass different icon
        hasInfo={false} // No info icon for this one
      />
      <BlueBox
        title="Epoch"
        value="2088"
        tooltipContent="Additional info here"
        icon={GrStatusInfo} // Pass different icon
        hasInfo={false} // No info icon for this one
      />
      <BlueBox
        title="Total Transactions"
        value="< $0.01"
        tooltipContent="Additional info here"
        icon={GrTransaction} // Pass different icon
        hasInfo={false} // No info icon for this one
      />
      <BlueBox
        title="Wallet Addresses"
        value="< $0.01"
        tooltipContent="Additional info here"
        icon={IoWalletOutline} // Pass different icon
        hasInfo={false} // No info icon for this one
      />
      <BlueBox
        title="Gas Tracker"
        value="< $0.01"
        tooltipContent="Additional info here"
        icon={FaGasPump} // Pass different icon
        hasInfo={true} // Show info icon with hover functionality
      />
    </div>
  );
};

export default Dashboard;
