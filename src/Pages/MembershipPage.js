import { React, Suspense, useRef } from "react";
import SmallLogoBanner from "../Components/SmallLogoBanner";
import HeaderMain from "../Components/HeaderMain";
import FooterMain from "../Components/FooterMain";
import Banner from "../Components/Banner";
import MembershipTierCardBody from "../Components/MembershipTierCardBody";

function MembershipPage() {
  return (
    <div className="text-center bg-[#1f1a31] text-lg text-white flex flex-col min-h-[100vh] bg-gradient-to-bl from-[#1f1a31] from-30% via-[#3b3161] via-50% via-[#2c244e] via-80% to-[#2d254e] to-90%">
      {/* Header bar */}
      <HeaderMain />
      {/* Main body of the page */}
      <div className=" flex flex-col justify-center text-lg">
        {/* Small Logo plus background */}
        <SmallLogoBanner />

        {/* Main body */}
        <div>
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
                Membership
              </div>
              <div className="mx-4 w-[40vw]">
                Show of force plays this game, this game, and this game. We have
                a discord that is like this, and we have cool rules, and we are
                cool and love you. Show of force plays this game, this game, and
                this game. We have a discord that is like this, and we have cool
                rules, and we are cool and love you. Show of force plays this
                game, this game, and this game. We have a discord that is like
                this, and we have cool rules, and we are cool and love you.
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

          {/* Middle section */}
          <div className="flex flex-row justify-center items-center w-full gap-48 py-12">
            <div className="flex flex-col gap-4 w-[40vw] px-24 py-12">
              <div className="text-center text-4xl font-semibold underline decoration-red-600">
                Discord stuff
              </div>
              <div>
                Show of force plays this game, this game, and this game. We have
                a discord that is like this, and we have cool rules, and we are
                cool and love you. Show of force plays this game, this game, and
                this game. We have a discord that is like this, and we have cool
                rules, and we are cool and love you. Show of force plays this
                game, this game, and this game. We have a discord that is like
                this, and we have cool rules, and we are cool and love you.
              </div>
            </div>
            <div className="flex flex-col gap-4 w-[40vw] px-24 py-12">
              <div className="text-center text-4xl font-semibold underline decoration-red-600">
                Community stuff
              </div>
              <div>
                Show of force plays this game, this game, and this game. We have
                a discord that is like this, and we have cool rules, and we are
                cool and love you. Show of force plays this game, this game, and
                this game. We have a discord that is like this, and we have cool
                rules, and we are cool and love you. Show of force plays this
                game, this game, and this game. We have a discord that is like
                this, and we have cool rules, and we are cool and love you.
              </div>
            </div>
          </div>

          {/* Color break banner */}
          <Suspense fallback={<div>Loading...</div>}>
            <Banner height={25} padding="py-8" />
          </Suspense>

          {/* Patreon section */}
          <div className="flex flex-col justify-center">
            <div className="flex flex-row justify-center items-center gap-8">
              {/* Left image */}
              <div className=" w-[25vw]">
                <img
                  className="w-full h-auto rounded-lg"
                  src="/content/cove.png"
                  alt="Placeholder"
                  loading="lazy"
                ></img>
              </div>

              <div className="flex flex-col gap-4 justify-center items-center">
                <div className="text-4xl font-bold underline decoration-red-600">
                  Support us with your choice of Patreon tier
                </div>
                <div className="w-[30vw]">
                  Membership and perks Membership and perks Membership and perks
                  Membership and perks Membership and perks Membership and perks
                  Membership and perks
                </div>
                <p className="w-[30vw]">
                  Our membership is cool because of xyz Our membership is cool
                  because of xyz Our membership is cool because of xyz
                </p>
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

            <MembershipTierCardBody />
          </div>
        </div>
      </div>
      {/* Footer at the bottom of the page0 */}
      <FooterMain />
    </div>
  );
}

export default MembershipPage;
