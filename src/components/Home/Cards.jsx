import Card from "./Card.jsx";
const card1 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const Cards = () => {
  return (
    <div className="pt-[10rem] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-5 justify-center items-center overflow-hidden">
      {card1.map((i, ind) => (
        <Card key={ind} i={i} index={ind} />
      ))}
    </div>
  );
};

export default Cards;
