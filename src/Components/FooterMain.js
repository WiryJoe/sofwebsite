import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faYoutube,
  faOpencart,
} from "@fortawesome/free-brands-svg-icons";

const Banner = () => {
  return (
    <footer className="h-16 pt-4 sticky bottom-0 z-10 text-black bg-gradient-to-br from-[#221B38] from-10% to-[#b6a3e4] to-90%">
      <div className="grid grid-flow-col items-center justify-evenly text-gray-200 font-bold font-mono text-center w-full text-sm lg:text-2xl">
        <a
          href="https://discord.gg/showofforce"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 rounded-lg hover:underline hover:decoration-solid hover:decoration-red-600 hover:scale-150 transition-all duration-500"
        >
          <FontAwesomeIcon icon={faDiscord} />
          Discord
        </a>
        <a
          href="https://shop.showofforce.info/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-500 rounded-lg hover:underline hover:decoration-solid hover:decoration-red-600 hover:scale-150 transition-all duration-500"
        >
          <FontAwesomeIcon icon={faOpencart} />
          Merch Store
        </a>
        <a
          href="https://www.youtube.com/@ShowofForceOfficial"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-500 rounded-lg hover:underline hover:decoration-solid hover:decoration-red-600 hover:scale-150 transition-all duration-500"
        >
          <FontAwesomeIcon icon={faYoutube} />
          YouTube
        </a>
      </div>
    </footer>
  );
};

export default Banner;
