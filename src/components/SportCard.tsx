interface ISportType {
  name: string;
  img: string;
  total_events: number;
  sport_name: string;
}

const SportCard = ({ name, img, total_events, sport_name }: ISportType) => {
  return (
    <div className="border border-slate-500 p-2 object-cover w-full  h-auto ">
      <div className="container">
        <img src={`./images/${img}`} alt="" className="m-auto" />
        <p className="font-bold mb-2 mt-2 text-[17px] ">{name}</p>
        <div className="grid grid-cols-2 w-full h-auto object-cover border-none bg-[#F7F7F8] p-2">
          <div className="">
            <p className="text-[#525965] text-[12px] ">Total Events</p>
            <p className="font-bold text-[14px]">{total_events} Events</p>
          </div>
          <div>
            <p className="text-[#525965]  text-[12px]">Sport</p>
            <p className="font-bold text-[14px]">{sport_name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportCard;
