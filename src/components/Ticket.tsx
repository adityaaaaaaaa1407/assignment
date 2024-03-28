import Image from "next/image";

interface ITicketType {
  img: string;
  name: string;
  date: string;
  day: string;
  time: string;
  address: string;
  button_name: string;
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
    <>
      <div
        className="border-none border-[#000000] border-opacity-5  bg-white dark:bg-[#3B3E47] p-2 object-cover relative
    xl:w-[257px] xl:h-[625px]  shadow-[0_8px_16px_0_rgba(0,0,0,0.05)]"
      >
        <Image
          src={`/images/${img}`}
          alt=""
          className="mx-auto "
          width={226}
          height={401}
        />

        <div className="my-2  mx-2 p-0 space-x-1 text-[#A9ACB2]">
          <span className="xl:w-[10px] xl:h-[20px] bg-[#f0f0f1]  absolute border-none  overflow-visible rounded-r-full left-0 m-0 dark:bg-gradient-to-b from-[#18282A] to-[#221A2C]"></span>
          <span>-</span>
          <span>-</span>
          <span>-</span>
          <span>-</span>
          <span>-</span>
          <span>-</span>
          <span>-</span>
          <span>-</span>
          <span>-</span>
          <span>-</span>
          <span>-</span>
          <span>-</span>
          <span>-</span>
          <span>-</span>
          <span>-</span>
          <span>-</span>
          <span>-</span>
          <span>-</span>
          <span>-</span>
          <span
            className="xl:w-[10px] xl:h-[20px] 
          bg-[#f0f0f1] border-none absolute overflow-hidden right-0 rounded-l-full dark:bg-gradient-to-b from-[#18282A] to-[#221A2C] "
          ></span>
        </div>

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

        <button className=" bg-black text-white rounded-sm text-sm py-2 text-center  mt-6 xl:w-[213px] xl:h-[36px] ml-4 ">
          {button_name} Collection
        </button>
      </div>
    </>
  );
};

export default Ticket;
