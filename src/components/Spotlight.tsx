"use client";

import { useState } from "react";

import Ticket from "./Ticket";
import tickets from "@/data/tickets";

export default function Spotlight() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === tickets.length - 1 ? 0 : prevSlide + 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? tickets.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="sm:w-[1240px]  sm:h-[918px] object-cover border border-black ">
      <div className="m-20 border border-black sm:w-[1085.75px] sm:h-[799px]">
        <p className="text-4xl font-extrabold text-center dark:text-white">
          Collection Spotlight
        </p>
        <div className="mt-4 text-[14px]  font-normal text-center flex flex-col dark:text-white">
          <span>
            Discover extraordinary moments with our Spotlight Collection meta
            tickets—exclusive access to premium events for an unforgettable
          </span>
          <span> experience. Grab yours today!</span>
        </div>

        <div
          className="flex justify-center items-center overflow-hidden  transition-transform duration-300 ease-in-out  mt-4 gap-8"
          id="slider"
        >
          <div
            className="w-[36.75px] h-[49px] py-4 px-3 border-2 border-[#2C9CF0] cursor-pointer justify-start"
            onClick={handlePrev}
          >
            <img src="/images/back.png" alt="back" />
          </div>
          {[0, 1, 2].map((offset) => {
            const index = (currentSlide + offset) % tickets.length;
            const ticket = tickets[index];
            return <Ticket key={index} {...ticket} />;
          })}

          <div
            className="w-[36.75px] h-[49px] py-4 px-3 border-2 border-[#2C9CF0] cursor-pointer "
            onClick={handleNext}
          >
            <img src="/images/front.png" alt="front" />
          </div>
        </div>
      </div>
    </div>
  );
}
