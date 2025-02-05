import { Link } from "react-router-dom";

const CardsGreedySingle = () => {
  return (
    <div
      className="flex flex-col group justify-center items-center align-middle"
      tabindex="0"
    >
      {/* Top display section */}
      <div className="w-[15vw] h-[20vh] bg-red-700 rounded-lg focus:w-[40vw] transition-all duration-300 group-focus:w-[25vw]">
        <div className="flex flex-col gap-2 h-full justify-center items-center text-center">
          <img
            src="/content/SquadLogo.png"
            alt="Squad game logo"
            className="hero-logo w-24 lg:w-48 bg-red-700 rounded-lg"
            loading="lazy"
          />
          <div className="text-3xl">Squad</div>
          <div className="group-hover:scale-110 group-hover:font-semibold">
            Click to open
          </div>
        </div>
      </div>

      {/* Bottom content section */}
      <div className="w-[15vw] h-[5vh] bg-gray-500 focus:w-[60vw] focus:h-[40vh] transition-all duration-300 group-focus:w-[60vw] group-focus:h-[40vh] rounded-lg justify-center align-middle items-center group-hover:scale-110 group-focus:group-hover:scale-100">
        {/* Pre focus content */}
        <div className="h-0 opacity-100 group-focus:opacity-0">Content</div>
        {/* Inside of the card (Post focus) */}
        <div className="m-16 flex gap-8 justify-center align-middle items-center h-[1vh] group-focus:h-[30vh] opacity-0 group-focus:opacity-100 transition-transform delay-1000">
          <img
            className="w-[25%] h-full rounded-lg"
            src="/content/cove.png"
            alt="Placeholder"
            loading="lazy"
          ></img>
          <div className="grid grid-flow-row h-[1vh] group-focus:h-[30vh] w-[1vw] group-focus:w-[40vw]">
            <div className="text-sm group-focus:text-3xl w-[1vw] group-focus:w-[40vw] h-[1vh] group-focus:h-[5vh]">
              Show of force is cool!
            </div>
            <div className="text-center w-[1vw] group-focus:w-[40vw] h-[1vh] group-focus:h-[30vh] text-sm group-focus:text-xl overflow-hidden">
              Show of force plays this game, this game, and this game. We have a
              discord that is like this, and we have cool rules, and we are cool
              and love you. Show of force plays this game, this game, and this
              game. We have a discord that is like this, and we have cool rules,
              and we are cool and love you. Show of force plays this game, this
              game, and this game. We have a discord that is like this, and we
              have cool rules, and we are cool and love you.
              <p className="pt-4">
                <Link
                  to="/RulesAndGuidesPage"
                  className="underline decoration-solid decoration-red-600"
                >
                  Find our rules here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsGreedySingle;
