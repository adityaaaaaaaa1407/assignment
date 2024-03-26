interface ISportType {
  name: string;
  img: string;
  total_events: number;
  sport_name: string;
  lightMode: boolean
}

const SportCard = ({ name, img, total_events, sport_name, lightMode }: ISportType) => {
  return (
    <div className="border border-[#000000] border-opacity-5    p-2 object-cover w-full  h-auto ">
      <div className="container">
        <img src={`./images/${img}`} alt="" className="m-auto" />
        <p className="font-semibold mb-2 mt-2 text-[17px] ">{name}</p>
        <div className="grid grid-cols-2 w-full h-auto object-cover border-none bg-[#F7F7F8] p-2">
          <div className="">
            <p className="text-[#525965] text-[12px] ">Total Events</p>
            <p className="font-semibold text-[14px]">{total_events} Events</p>
          </div>
          <div>
            <p className="text-[#525965]  text-[12px]">Sport</p>
            <p className="font-semibold text-[14px]">{sport_name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportCard;
