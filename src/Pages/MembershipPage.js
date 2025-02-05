import React from "react";
import SmallLogoBanner from "../Components/SmallLogoBanner";
import HeaderMain from "../Components/HeaderMain";
import FooterMain from "../Components/FooterMain";

function MembershipPage() {
  return (
    <div className="text-center bg-[#1f1a31] text-lg text-white flex flex-col min-h-[100vh] bg-gradient-to-br from-[#1f1a31] from-30% via-[#3b3161] via-50% via-[#2c244e] via-80% to-[#2d254e] to-90%">
      {/* Header bar */}
      <HeaderMain />
      {/* Main body of the page */}
      <div className=" flex flex-col justify-center text-lg">
        {/* Small Logo plus background */}
        <SmallLogoBanner />

        {/* Main body */}
        <div>
          {/* Upper title section */}
          <div className="flex flex-row justify-around items-center w-full">
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
            <div>
              <div className="mx-4 text-center text-6xl font-semibold bg-black h-[10vh] w-[30vw]">
                Membership
              </div>
              <div className="mx-4 text-center">Paragraph</div>
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

          {/* Middle section */}
          <div className="flex flex-row justify-center items-center w-full gap-48 py-12 border-solid border-4 border-red-800">
            <div className="flex flex-col gap-4">
              <div className="text-center text-4xl font-semibold">
                Discord stuff
              </div>
              <div>Paragraph</div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-center text-4xl font-semibold">
                Community stuff
              </div>
              <div>Paragraph</div>
            </div>
          </div>

          {/* Patreon section */}
          <div>
            <div>Patreonnnnnn!!!!!!!</div>
            <div>
              <div>Membership and perks</div>
              <p>Our membership is cool because of xyz</p>
              <div className="grid grid-flow-row grid-cols-2 grid-rows-4 gap-y-12">
                <div>
                  <div>Big box</div>
                  <div>Biiiiiiggg box</div>
                  <div>Big text</div>
                </div>
                <div>Right text</div>
                <div>Left text</div>
                <div>Right image</div>
                <div>Left image</div>
                <div>Right text</div>
                <div>Left text</div>
                <div>Right image</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer at the bottom of the page0 */}
      <FooterMain />
    </div>
  );
}

export default MembershipPage;
