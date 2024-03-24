import SportCard from "./SportCard";
import sports from "./../data/sports";
import Advertisement from "./Advertisement";

const Sports = () => {
  return (
    <div>
      <span className=" text-xl underline decoration-cyan-600 underline-offset-8 font-extrabold">
        Sports
      </span>
      <div className="grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  md:gap-3 gap-6 mt-8 ">
        {sports.map((sport, index) => (
          <SportCard
            key={index}
            name={sport.name}
            img={sport.img}
            total_events={sport.total_events}
            sport_name={sport.sport_name}
          />
        ))}

        <Advertisement />
      </div>
      <div className="w-full flex justify-center mt-12">
        <button className="bg-[#2C9CF0] text-white px-6 py-3 rounded-sm text-center  ">
          See More
        </button>
      </div>
    </div>
  );
};

export default Sports;
