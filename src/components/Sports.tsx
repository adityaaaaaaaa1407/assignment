import SportCard from "./SportCard";
import sports from "./../data/sports";

const Sports = () => {
  return (
    <div>
      <span>sports</span>
      <div className="flex justify-center gap-8">
        {sports.map((sport, index) => (
          <SportCard
            key={index}
            name={sport.name}
            img={sport.img}
            total_events={sport.total_events}
            sport_name={sport.sport_name}
          />
        ))}
      </div>
    </div>
  );
};

export default Sports;
