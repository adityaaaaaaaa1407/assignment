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
    <div>
      <img src={`/images/${img}`} />
      <div>{name}</div>
      <p>{date}</p>
      <p className="font-light">|</p>
      <p>{day}</p>
      <p className="font-light">|</p>
      <p>{time}</p>
      <span>{address}</span>
      <button>{button_name}</button>
    </div>
  );
};

export default Ticket;
