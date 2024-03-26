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
  lightMode,
}: ITicketType) => {
  return (
    <div className="border border-[#000000] border-opacity-5    p-2 object-cover w-50 h-auto ">
      <img src={`/images/${img}`} className="mx-auto" />
      <div className="my-8 border-b-2 border-[#818A97] border-dashed mx-3 z-10"></div>

      <div className="font-semibold mb-2 mt-12 text-center  text-[17px] ">
        {name}
      </div>
      <div className="flex space-x-3 justify-center text-sm mb-4">
        <p>{date}</p>
        <p className="font-light">|</p>
        <p>{day}</p>
        <p className="font-light">|</p>
        <p>{time}</p>
      </div>
      <span>{address}</span>

      <button className=" bg-black text-white rounded-sm text-sm p-4  text-center ml-10 mt-4">
        {button_name} Collection
      </button>
    </div>
  );
};

export default Ticket;
