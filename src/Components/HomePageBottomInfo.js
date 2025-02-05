import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faPatreon } from "@fortawesome/free-brands-svg-icons";

const HomePageBottomInfo = () => {
  return (
    <div className="">
      <div className="bg-gray-900">
        <div
          className="bg-cover bg-center h-[50vh] bg-opacity-100 flex justify-center items-center align-middle flex-col"
          style={{ backgroundImage: "url('/content/cove.png')" }}
        >
          <div className="flex flex-col justify-center items-center align-middle gap-8">
            <div className="bg-[#2c2444] h-32 w-full rounded-lg flex justify-center items-center align-middle text-5xl font-semibold">
              Join show of force today!
            </div>

            <div className="grid grid-flow-col gap-16 items-center justify-evenly text-gray-200 font-bold font-mono text-center w-full text-sm lg:text-2xl">
              <a
                href="https://discord.gg/showofforce"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 rounded-lg hover:underline hover:decoration-solid hover:decoration-red-600 hover:scale-150 transition-all duration-500 h-16 w-64 flex justify-center items-center align-middle"
              >
                <FontAwesomeIcon icon={faDiscord} />
                Join the Discord
              </a>
              <div className="bg-orange-500 rounded-lg hover:underline hover:decoration-solid hover:decoration-red-600 hover:scale-150 transition-all duration-500 h-16 w-64 flex justify-center items-center align-middle">
                <a
                  href="https://www.patreon.com/showofforce"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faPatreon} />
                  Become a member
                </a>
              </div>
            </div>
          </div>
          <div className="pt-24">Copyright © 2025 Show of Force</div>
        </div>
      </div>
    </div>
  );
};

export default HomePageBottomInfo;
