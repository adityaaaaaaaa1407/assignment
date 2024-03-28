"use client";

import { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";

const Darkmode = () => {
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
  }, []);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className="text-3xl  relative w-8 h-8 flex items-center dark:bg-gray-900 bg-teal-500 cursor pointer rounded-full p-1"
      onClick={() => setDarkMode(!darkMode)}
    >
      <MdDarkMode className="text-white" />
    </div>
  );
};

export default Darkmode;
