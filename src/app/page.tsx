"use client";

import Darkmode from "@/components/Darkmode";
import Sports from "@/components/Sports";

import Spotlight from "@/components/Spotlight";

export default function Home() {
  return (
    <>
      <div className="bg-[#F7F7F8] dark:bg-[#292B32]  w-[1445px] h-[1778px]">
        <div className="mb-2 flex gap-2 ml-10 p-2 dark:text-white ">
          <Darkmode /> click here to change theme
        </div>
        <div
          className="sm:m-20 m-4 sm:mt-4 mt-2 
           flex flex-col "
        >
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
