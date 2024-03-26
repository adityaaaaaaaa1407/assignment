const Advertisement = () => {
  return (
    <div className="">
      <div className="" />

      <div className={`px-4 border-2 border-t-0 p-6 border-[#006555] `}>
        <div className="bg-black m-2.5 text-center w-12 font-bold text-base absolute right-0 top-0 z-10">
          Ad
        </div>
        <img
          src="./images/ad.png"
          alt="advertisement"
          className="w-full h-55"
        />
        <p className={`text-xl font-semibold mb-2 `}>Advertisement title</p>
        <p className={`text-[13px] leading-5  `}>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          accusantium minima quam rem iure. Accusantium impedit ullam magni
          eaque itaque esse voluptatibus, quasi placeat, tenetur est modi odit
          blanditiis praesentium.{" "}
        </p>
      </div>
    </div>
  );
};

export default Advertisement;
