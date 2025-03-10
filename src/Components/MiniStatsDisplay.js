import { Link } from "react-router-dom";

const MiniStatsDisplay = () => {
  return (
    <div className="py-12 bg-gray-900 flex flex-col justify-center items-center">
      {/* Top half */}
      <div className="flex flex-row w-[75%] justify-center items-start">
        {/* Left side */}
        <div className="flex flex-col items-center w-1/2 gap-8">
          <div className="text-white font-bold mb-2 mx-16 underline decoration-red-600 text-5xl">
            Show of force stats
          </div>
          <img
            className="w-[75%] h-full rounded-lg"
            src="/content/cove.png"
            alt="Show of Force gaming community logo"
            loading="lazy"
          ></img>
        </div>
        {/* Right side */}
        <div className="grid grid-flow-row gap-11 h-full justify-items-start w-1/2 border-2 border-red-700 text-3xl p-4">
          <p>Discord users: a bunch</p>
          <p>Patreon users: a bunch</p>
          <p>Unique users: a bunch</p>
          <p>Our Admins: a bunch</p>
          <p>Daily player count: a bunch</p>
        </div>
      </div>
      {/* Bottom half */}
      <div className="flex flex-row gap-24 pt-8">
        <div className="flex flex-row gap-24 text-2xl justify-center align-middle items-center">
          <p>Important stats: A bunch</p>
          <p>Important stats: A bunch</p>
          <p>Important stats: A bunch</p>
        </div>
        <div className=" border-2 border-gray-500 text-2xl text-center h-12 flex justify-center align-middle items-center rounded-lg hover:underline hover:decoration-solid hover:decoration-red-600 hover:scale-150 transition-all duration-500">
          <Link to="/StatsPage" className="">
            See the full stats
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MiniStatsDisplay;
