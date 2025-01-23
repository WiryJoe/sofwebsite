import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faDiscord, faPatreon } from "@fortawesome/free-brands-svg-icons";

const Banner = () => {
  return (
    <header className="min-h-8 sticky top-0 flex flex-row z-20 bg-gradient-to-r from-[#221B38] to-[#49466e]">
      <div className="w-[20%] lg:w-[12%]">
        <Link to="/">
          <img
            src="/content/logo.png"
            alt="Show of Force gaming community logo"
            className="hero-logo absolute top-0 left-4 w-24 z-10 lg:w-56 hover:scale-110 transition-all duration-500"
            loading="lazy"
          />
          <img
            src="/content/storm-cloud-png-55-2048997215.png"
            alt="Show of Force gaming community logo"
            className="hero-logo absolute top-0 -left-16 w-24 lg:w-96"
            loading="lazy"
          />
        </Link>
      </div>
      <div className="grid grid-flow-col items-center justify-evenly text-gray-200 font-bold font-mono text-center w-full h-16 text-sm lg:text-2xl">
        <Link
          to="/"
          className="hover:underline hover:decoration-solid hover:decoration-red-600 hover:scale-150 transition-all duration-500"
        >
          Home page
        </Link>

        <Link
          to="/AboutUs"
          className="hover:underline hover:decoration-solid hover:decoration-red-600 hover:scale-150 transition-all duration-500"
        >
          About us
        </Link>

        <Link
          to="/StatsPage"
          className="hover:underline hover:decoration-solid hover:decoration-red-600 hover:scale-150 transition-all duration-500"
        >
          Stats
        </Link>

        <Link
          to="/RulesAndGuidesPage"
          className="hover:underline hover:decoration-solid hover:decoration-red-600 hover:scale-150 transition-all duration-500"
        >
          Rules and Guides
        </Link>

        <Link
          to="/MembershipPage"
          className="hover:underline hover:decoration-solid hover:decoration-red-600 hover:scale-150 transition-all duration-500"
        >
          Membership
        </Link>

        <div className="bg-blue-500 rounded-lg hover:underline hover:decoration-solid hover:decoration-red-600 hover:scale-150 transition-all duration-500 ">
          <a
            href="https://discord.gg/showofforce"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faDiscord} />
            Discord
          </a>
        </div>

        <div className="bg-orange-500 rounded-lg hover:underline hover:decoration-solid hover:decoration-red-600 hover:scale-150 transition-all duration-500 ">
          <a
            href="https://www.patreon.com/showofforce"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faPatreon} />
            Support Us
          </a>
        </div>
      </div>
    </header>
  );
};

export default Banner;
