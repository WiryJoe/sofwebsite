import React from "react";
import SmallLogoBanner from "../Components/SmallLogoBanner";
import HeaderMain from "../Components/HeaderMain";
import FooterMain from "../Components/FooterMain";
import { useState } from "react";

function StatsPage() {
  const [haveStats, setHaveStats] = useState(false);

  return (
    <div className="text-center bg-[#1f1a31] text-lg text-white flex flex-col bg-gradient-to-br from-[#1f1a31] from-30% via-[#3b3161] via-50% via-[#2c244e] via-80% to-[#2d254e] to-90%">
      {/* Header bar */}
      <HeaderMain />
      {/* Small Logo plus background */}
      <SmallLogoBanner />
      {/* Color break */}

      {/* Main body */}
      <div className="flex flex-col items-center min-h-[80vh]">
        {/* Upper title section */}
        <div className="flex flex-row justify-around items-start w-full pt-12">
          {/* Left image */}
          <div className=" w-[25vw]">
            <img
              className="w-full h-auto rounded-lg"
              src="/content/cove.png"
              alt="Placeholder"
              loading="lazy"
            ></img>
          </div>

          {/* Center content */}
          <div className="flex flex-col gap-4 justify-center items-center text-center">
            <div className="mx-4 py-2 text-6xl font-semibold border-solid border-2 border-red-600 rounded-lg h-[10vh] w-[30vw]">
              Player Stats
            </div>
            <div className="mx-4 w-[40vw]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>

          {/* Right image */}
          <div className=" w-[25vw]">
            <img
              className="w-full h-auto rounded-lg"
              src="/content/cove.png"
              alt="Placeholder"
              loading="lazy"
            ></img>
          </div>
        </div>

        {/* Input section */}
        <div className="w-[30vw] h-[5vh] my-8">
          <input
            type="text"
            icon="search"
            className="border-2 border-red-600 h-full w-full rounded-lg px-4 text-black"
            placeholder="Place your steam 64 ID here..."
            // value={value}
            // onChange={(e) => {
            //   setValue(e.target.value);
            // }}
          />
        </div>

        {/* Player info */}
        {haveStats && (
          <div className="flex flex-row gap-8 bg-gradient-to-br from-[#1f1a31] from-30% via-[#3b3161] via-50% via-[#2c244e] via-80% to-[#2d254e] to-90%">
            {/* Player profile */}
            <div className="flex flex-col gap-8 m-8 pt-8 w-[30vw] h-[50vh] bg-gray-600 items-center">
              <div className="flex flex-row items-center">
                {/* Profile picture */}
                <div className="min-w-32 min-h-32 mx-4 rounded-full bg-center bg-cover bg-[url('http://static.boredpanda.com/blog/wp-content/uploads/2014/10/surprised-shocked-animals-funny-27__880.jpg')]"></div>
                <div className="flex flex-grow-1 min-w-[20vw] max-w-[25vw] justify-center text-4xl font-semibold underline decoration-solid decoration-red-600">
                  Player name
                </div>
              </div>
              <p>
                <span className="font-semibold text-2xl underline decoration-solid decoration-red-600">
                  Stat 1:
                </span>{" "}
                blabalabala
              </p>
              <p>
                <span className="font-semibold text-2xl underline decoration-solid decoration-red-600">
                  Stat 2:
                </span>{" "}
                blabalabala
              </p>
              <p>
                <span className="font-semibold text-2xl underline decoration-solid decoration-red-600">
                  Stat 3:
                </span>{" "}
                blabalabala
              </p>
              <p>
                <span className="font-semibold text-2xl underline decoration-solid decoration-red-600">
                  Stat 4:
                </span>{" "}
                blabalabala
              </p>
            </div>

            {/* Server stats */}
            <div className="flex flex-col gap-8 m-8 pt-20 w-[30vw] h-[50vh] bg-gray-600 items-center">
              <div className="flex flex-row gap-12">
                {/* Row 1 */}
                <div className="flex flex-col gap-12">
                  <p>
                    <span className="font-semibold text-2xl underline decoration-solid decoration-red-600">
                      Stat 1:
                    </span>{" "}
                    blabalabala
                  </p>
                  <p>
                    <span className="font-semibold text-2xl underline decoration-solid decoration-red-600">
                      Stat 2:
                    </span>{" "}
                    blabalabala
                  </p>
                  <p>
                    <span className="font-semibold text-2xl underline decoration-solid decoration-red-600">
                      Stat 3:
                    </span>{" "}
                    blabalabala
                  </p>
                  <p>
                    <span className="font-semibold text-2xl underline decoration-solid decoration-red-600">
                      Stat 4:
                    </span>{" "}
                    blabalabala
                  </p>
                </div>

                {/* Row 2 */}
                <div className="flex flex-col gap-12">
                  <p>
                    <span className="font-semibold text-2xl underline decoration-solid decoration-red-600">
                      Stat 1:
                    </span>{" "}
                    blabalabala
                  </p>
                  <p>
                    <span className="font-semibold text-2xl underline decoration-solid decoration-red-600">
                      Stat 2:
                    </span>{" "}
                    blabalabala
                  </p>
                  <p>
                    <span className="font-semibold text-2xl underline decoration-solid decoration-red-600">
                      Stat 3:
                    </span>{" "}
                    blabalabala
                  </p>
                  <p>
                    <span className="font-semibold text-2xl underline decoration-solid decoration-red-600">
                      Stat 4:
                    </span>{" "}
                    blabalabala
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Footer at the bottom of the page0 */}
      <FooterMain />
    </div>
  );
}

export default StatsPage;
