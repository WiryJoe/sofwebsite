import CardsGreedySingle from "../Components/CardsGreedySingle";

const CardsGreedy = () => {
  return (
    <div className="flex gap-8 justify-center align-top items-start min-h-[40vh] max-h-[60vh]">
      <CardsGreedySingle />
      <CardsGreedySingle />
      <CardsGreedySingle />
    </div>
  );
};

export default CardsGreedy;
