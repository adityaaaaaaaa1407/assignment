import Image from "next/image";

interface ISportType {
  name: string;
  img: string;
  total_events: number;
  sport_name: string;
}

const SportCard = ({ name, img, total_events, sport_name }: ISportType) => {
  return (
    <div className="border border-[#000000] border-opacity-5 bg-white dark:bg-[#3B3E47]   p-2 object-cover xl:h-[511px] xl:w-[238.5px]  shadow-[0_8px_16px_0_rgba(0,0,0,0.05)]">
      <div className="container">
        <Image
          src={`/images/${img}`}
          alt=""
          className="m-auto"
          width={385.41}
          height={218}
        />
        <p className="font-semibold mb-2 mt-2 text-[17px] dark:text-white">
          {name}
        </p>
        <div className="grid grid-cols-2 w-[218.4px] h-[54px] object-cover border-none dark:bg-[#292B32] bg-[#F7F7F8] p-3">
          <div className="">
            <p className="text-[#525965] dark:text-[#DFDFDF] text-[12px] ">
              Total Events
            </p>
            <p className="font-medium  text-[14px]">{total_events} Events</p>
          </div>
          <div>
            <p className="text-[#525965] dark:text-[#DFDFDF] text-[12px]">
              Sport
            </p>
            <p className=" font-medium text-[14px]">{sport_name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportCard;
