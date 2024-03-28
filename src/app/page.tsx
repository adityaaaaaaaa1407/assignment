"use client";

import Darkmode from "@/components/Darkmode";
import Sports from "@/components/Sports";

import Spotlight from "@/components/Spotlight";

export default function Home() {
  return (
    <>
      <div className="bg-[#F7F7F8] dark:bg-[#292B32]">
        <div
          className="sm:m-20 m-4 sm:mt-4 mt-2 
           flex flex-col "
        >
          <div className="mb-4">
            <Darkmode />
          </div>
          <div className="mb-10 ">
            <Sports />
          </div>

          <div className="">
            <Spotlight />
          </div>
        </div>
      </div>
    </>
  );
}
