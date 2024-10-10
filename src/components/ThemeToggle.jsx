import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <button
      className="p-2 bg-gray-500 text-white rounded"
      onClick={toggleTheme}
    >
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </button>
  );
};

export default ThemeToggle;
