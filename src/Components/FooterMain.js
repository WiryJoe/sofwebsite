import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faYoutube,
  faOpencart,
  faPatreon,
} from "@fortawesome/free-brands-svg-icons";
import Button from "../Components/Reusable/Button";

const Banner = () => {
  return (
    <footer className="h-16 pt-4 sticky bottom-0 z-10 text-black bg-gradient-to-tr from-[#221B38] from-25% to-[#443f8a] to-75%">
      <div className="grid grid-flow-col items-center justify-evenly text-gray-200 font-bold font-mono text-center w-full text-sm lg:text-2xl">
        <Button
          text="Discord"
          icon={faDiscord}
          borderColor="bg-blue-500"
          externalLink={{
            href: "https://discord.gg/showofforce",
            target: "_blank",
            rel: "noopener noreferrer",
          }}
        />
        <Button
          text="Support Us"
          icon={faPatreon}
          borderColor="bg-orange-500"
          externalLink={{
            href: "https://www.patreon.com/showofforce",
            target: "_blank",
            rel: "noopener noreferrer",
          }}
        />
        <Button
          text="Merch Store"
          icon={faOpencart}
          borderColor="bg-yellow-500"
          externalLink={{
            href: "https://shop.showofforce.info/",
            target: "_blank",
            rel: "noopener noreferrer",
          }}
        />
        <Button
          text="YouTube"
          icon={faYoutube}
          borderColor="bg-red-500"
          externalLink={{
            href: "https://www.youtube.com/@ShowofForceOfficial",
            target: "_blank",
            rel: "noopener noreferrer",
          }}
        />
      </div>
    </footer>
  );
};

export default Banner;
