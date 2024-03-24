interface ISportType {
  name: string;
  img: string;
  total_events: number;
  sport_name: string;
}

const SportCard = ({ name, img, total_events, sport_name }: ISportType) => {
  return (
    <div>
      <img src={`./images/${img}`} alt="" className="" />
      <div>
        <p>{name}</p>
        <div>
          <p>total events</p>
          <p>{total_events}</p>
        </div>
        <div>
          <p>sport</p>
          <p>{sport_name}</p>
        </div>
      </div>
    </div>
  );
};

export default SportCard;
