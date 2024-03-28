interface ITicketType {
  img: string;
  name: string;
  date: string;
  day: string;
  time: string;
  address: string;
  button_name: string;
  lightMode: boolean;
}

const Ticket = ({
  img,
  name,
  date,
  day,
  time,
  address,
  button_name,
}: ITicketType) => {
  return (
    <div
      className="border border-[#000000] border-opacity-5  bg-white dark:bg-[#3B3E47] p-2 object-cover
    w-[257px] h-[625px] "
    >
      <img src={`/images/${img}`} className="mx-auto " />
      <div className="my-4 border-b-2 border-[#A9ACB2] border-dashed mx-3 z-20"></div>

      <div className="font-semibold mb-2 mt-2 text-center  text-[17px]  dark:text-white">
        {name}
      </div>
      <div className="flex space-x-1 justify-center text-sm mb-2  font-medium dark:text-[#DFDFDF]">
        <p>{date}</p>
        <p className="">|</p>
        <p>{day}</p>
        <p className="">|</p>
        <p>{time}</p>
      </div>
      <div className="text-[14px] text-center  font-normal ">
        <span className="text-[#525965] dark:text-[#DFDFDF]">{address}</span>
      </div>

      <button className=" bg-black text-white rounded-sm text-sm py-2 text-center  mt-6 w-[213px] h-[36px] ml-4 ">
        {button_name} Collection
      </button>
    </div>
  );
};

export default Ticket;
