import Image from "next/image";

const Advertisement = () => {
  return (
    <div className=" h-[511px] w-full dark:bg-[#3B3E47]   object-cover p-2 border border-[#000000] border-opacity-5   shadow-[0_8px_16px_0_rgba(0,0,0,0.05)]">
      <div className="relative ">
        <div className="bg-black m-2 text-center w-12 font-bold text-base text-white absolute right-0 top-0 z-10">
          Ad
        </div>
        <div className="border border-[#006555]  ">
          <Image
            src="/images/ad.png"
            alt="advertisement"
            className="w-full h-55"
            width={200}
            height={200}
          />
          <p className="mt-6 font-semibold text-center text-xl">
            Advertisement title
          </p>
          <div className="mr-4 ml-4 mt-2 mb-8">
            <p className="text-[#525965] text-[12.8px] dark:text-[#DFDFDF]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis accusantium minima quam rem iure. Accusantium impedit
              ullam magni eaque itaque esse voluptatibus, quasi placeat, tenetur
              est modi odit blanditiis praesentium abs .{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
