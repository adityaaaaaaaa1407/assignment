"use client";

import Sports from "@/components/Sports";

import Spotlight from "@/components/Spotlight";
import { useState } from "react";

export default function Home() {
  const [lightMode, setLightMode] = useState(true);

  function toggleMode() {
    setLightMode((prevMode) => !prevMode);
  }
  return (
    <>
      <div
        className={`m-20 mt-4 ${lightMode ? "bg-[#F7F7F8]" : "bg-[#292B32]"}`}
      >
        <div>
          <div
            className={`mb-10 ${lightMode ? "bg-white" : "bg-black"}`}
            onClick={toggleMode}
          >
            <img src={`/images/${lightMode ? "light.png" : "dark.png" }`} alt="mode" />
            <Sports lightMode={lightMode}/>
          </div>

          <div>
            <Spotlight  lightMode={lightMode}/>
          </div>
        </div>
      </div>
    </>
  );
}
