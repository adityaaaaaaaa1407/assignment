"use client";

import { useState } from "react";

import Ticket from "./Ticket";
import tickets from "@/data/tickets";
import Image from "next/image";

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
    <div className="xl:w-[1240px]  xl:h-[918px] object-cover border dark:border-[#18282A] border-[#F9F8FF] dark:bg-gradient-to-b dark:from-[#18282A] dark:to-[#221A2C] bg-gradient-to-b from-[#F9F8FF] to-[#F3F9FF]  ">
      <div className="m-20  xl:w-[1085.75px] xl:h-[799px]">
        <p className="text-4xl font-extrabold text-center dark:text-white">
          Collection Spotlight
        </p>
        <div className="mt-4 lg:text-[14px]  mb-12 font-normal text-center flex flex-col dark:text-white">
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
            className="xl:w-[36.75px] xl:h-[49px] py-4 px-3 border-2 border-[#2C9CF0] cursor-pointer justify-start"
            onClick={handlePrev}
          >
            <Image src="/images/back.png" width={200} height={200} alt="back" />
          </div>
          {[0, 1, 2].map((offset) => {
            const index = (currentSlide + offset) % tickets.length;
            const ticket = tickets[index];
            return <Ticket key={index} {...ticket} />;
          })}

          <div
            className="xl:w-[36.75px] lg:h-[49px] py-4 px-3 border-2 border-[#2C9CF0] cursor-pointer "
            onClick={handleNext}
          >
            <Image
              src="/images/front.png"
              width={200}
              height={200}
              alt="front"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
