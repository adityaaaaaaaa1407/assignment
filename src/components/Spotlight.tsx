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
    <div className="">
      <p className="text-4xl font-bold text-center">Collection Spotlight</p>
      <span className="text-sm ml-10 p-2 text-center">
        Discover extraordinary moments with our Spotlight Collection meta
        tickets—exclusive access to premium events for an unforgettable
        experience. Grab yours today!
      </span>
      <div
        className="flex px-25 gap-11 overflow-hidden  transition-transform duration-300 ease-in-out  mt-4"
        id="slider"
      >
        {[0, 1, 2].map((offset) => {
          const index = (currentSlide + offset) % tickets.length;
          const ticket = tickets[index];
          return <Ticket key={index} {...ticket} />;
        })}
      </div>
      <div className="flex w-full  justify-between items-center my-auto  ">
        <div
          className="w-9 h-12 py-4 px-3 border-2 border-[#2C9CF0] cursor-pointer "
          onClick={handlePrev}
        >
          <img src="/images/back.png" alt="back" />
        </div>
        <div
          className="w-9 h-12 py-4 px-3 border-2 border-[#2C9CF0] cursor-pointer "
          onClick={handleNext}
        >
          <img src="/images/front.png" alt="front" />
        </div>
      </div>
    </div>
  );
}
