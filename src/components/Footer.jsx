import React , {useContext} from "react";
import { FaPen, FaSyncAlt, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full  bg-white dark:bg-[#060036] border-t  h-20 border-gray-500 mt-auto z-50 opacity-100">
      <hr className="border-grey-900 border-t-0" />
      <div className="flex h-full justify-end items-center space-x-8 py-4 dark:text-white text-black  pr-8">
        <a 
          href="https://github.com/your-repo/issues" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center hover:underline space-x-2 text-sm cursor-pointer hover:text-[#F1B516]"
   
      
        >
          <FaPen />
          <span className="hover:underline">Submit an issue</span>
        </a>
        <a 
          href="https://github.com/your-repo/issues/new?labels=enhancement" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center hover:underline space-x-2 cursor-pointer text-sm hover:text-[#F1B516]"
        >
          <FaSyncAlt />
          <span className="hover:underline">Feature request</span>
        </a>
        <a 
          href="https://twitter.com/your-twitter-handle" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center hover:underline space-x-2 cursor-pointer text-sm hover:text-[#F1B516]"
        >
          <FaTwitter />
          <span className="hover:underline">Twitter</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
