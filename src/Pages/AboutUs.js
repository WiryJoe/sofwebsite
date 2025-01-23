import React from "react";
import SmallLogoBanner from "../Components/SmallLogoBanner";
import HeaderMain from "../Components/HeaderMain";
import FooterMain from "../Components/FooterMain";

function AboutUs() {
  return (
    <div className="text-center bg-[#282c34] text-lg text-white flex flex-col min-h-[100vh]">
      {/* Header bar */}
      <HeaderMain />
      {/* Main body of the page */}
      <div className=" flex flex-col align-middle justify-center text-lg">
        {/* Small Logo plus background */}
        <SmallLogoBanner />
        {/* Color break */}
        <div className="w-full h-8 bg-red-400">
          <div>About us</div>
        </div>
        {/* Short bio (What games we play, what our servers are like, how our discord is like, how we enforce rules etc) */}
        <div>Show of force is cool!</div>
        <div>
          Show of force plays this game, this game, and this game. We have a
          discord that is like this, and we have cool rules, and we are cool and
          love you.
        </div>

        {/* Squad info */}
        {/* Arma Info */}
        {/* Etc */}
        <div>Our games</div>
        <div className="grid grid-flow-row grid-cols-2 grid-rows-4">
          <div>Left image</div>
          <div>Right text</div>
          <div>Left text</div>
          <div>Right image</div>
          <div>Left image</div>
          <div>Right text</div>
          <div>Left text</div>
          <div>Right image</div>
        </div>

        {/* Detailed server stats */}
        <div className="bg-green-900">Color break and server stats</div>
        {/* Our admins and leadership */}
        <div className="grid grid-flow-row grid-cols-4 grid-rows-1">
          <div className="flex flex-col">
            <div>PFP of admin</div>
            <p>Their name</p>
          </div>
          <div className="flex flex-col">
            <div>PFP of admin</div>
            <p>Their name</p>
          </div>
          <div className="flex flex-col">
            <div>PFP of admin</div>
            <p>Their name</p>
          </div>
          <div className="flex flex-col">
            <div>PFP of admin</div>
            <p>Their name</p>
          </div>
        </div>
        {/* Color Break */}
        <div className="bg-purple-900">Color break</div>
        {/* Links to socials and other in app pages */}
        <div>Cool area to plug socials</div>
      </div>
      {/* Footer at the bottom of the page0 */}
      <FooterMain />
    </div>
  );
}

export default AboutUs;
