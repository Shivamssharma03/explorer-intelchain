import React, { useState } from 'react';
import { IoIosInformation } from "react-icons/io";

// Iicon component where the message changes every time it's hovered
const Iicon = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [message, setMessage] = useState("");

    // List of messages
    const messages = [
        "Average time taken in seconds for a block to be included in the blockchain.",
        "Total number of transactions processed in the blockchain.",
        "The number of active nodes participating in the network.",
        "The total hash rate of the blockchain network.",
        "Current difficulty to mine a new block.",
        "Total supply of tokens currently in circulation."
    ];

    // Function to get a random message from the array
    const getRandomMessage = () => {
        const randomIndex = Math.floor(Math.random() * messages.length);
        return messages[randomIndex];
    };

    // Handle hover event to set a new random message
    const handleMouseEnter = () => {
        setMessage(getRandomMessage()); // Set a random message when hovered
        setIsHovered(true);
    };

    const handleMouseLeave = () => setIsHovered(false);

    return (
        <div className="relative inline-block ">
            <button
                className="text-gray-400 hover:text-orange-300 no-underline border border-solid rounded p-0."
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <IoIosInformation className='text-sm' />
            </button>
            {isHovered && (
                <div
                    className="absolute bottom-full right-1 transform -translate-x-0 bg-orange-100 text-orange-400 text-sm rounded z-10 shadow-lg w-64 h-auto p-2 transition-opacity duration-1000"
                >
                    {message}
                </div>
            )}
        </div>
    );
};

// App component renders multiple Iicon components
const App = () => {
    return (
        <div className>
            <h1 className></h1>
            <div className="grid grid-cols-2 gap-5">
                {/* Render multiple Iicon components */}
                <Iicon />
            </div>
        </div>
    );
};

export default App;
