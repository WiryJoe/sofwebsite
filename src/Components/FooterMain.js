import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faYoutube,
  faOpencart,
} from "@fortawesome/free-brands-svg-icons";

const Banner = () => {
  return (
    <footer className="min-h-16 pt-4 sticky bottom-0 grid grid-flow-col gap-1 z-10 text-black bg-white">
      <a
        href="https://discord.gg/showofforce"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faDiscord} />
        Discord
      </a>
      <a
        href="https://shop.showofforce.info/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faOpencart} />
        Merch Store
      </a>
      <a
        href="https://www.youtube.com/@ShowofForceOfficial"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faYoutube} />
        YouTube
      </a>
    </footer>
  );
};

export default Banner;
