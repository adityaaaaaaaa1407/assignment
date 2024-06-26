import SportCard from "./SportCard";
import sports from "./../data/sports";
import Advertisement from "./Advertisement";

const Sports = () => {
  return (
    <div className="xl:w-[1249px] xl:h-[673px]  dark:text-white ">
      <span className=" text-xl underline decoration-cyan-600 underline-offset-8 font-extrabold ">
        Sports
      </span>
      <div className="grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  md:gap-3 gap-6 mt-8 ">
        {sports.map((sport, index) => (
          <div key={index} className="flex sm:flex-row flex-col sm:ml-0 ml-20 ">
            <SportCard {...sport} />
          </div>
        ))}
        <div className="xl:ml-0 ml-20 bg-white ">
          <Advertisement />
        </div>
      </div>
      <div className="w-full flex sm:justify-center mt-12 sm:ml-0 ml-24">
        <button className="bg-[#2C9CF0] text-white sm:px-6 px-16 py-3 rounded-sm text-center  ">
          See More
        </button>
      </div>
    </div>
  );
};

export default Sports;
