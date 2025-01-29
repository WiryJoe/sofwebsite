import React from "react";
import SmallLogoBanner from "../Components/SmallLogoBanner";
import HeaderMain from "../Components/HeaderMain";
import FooterMain from "../Components/FooterMain";

function MembershipPage() {
  return (
    <div className="text-center bg-[#282c34] text-lg text-white flex flex-col min-h-[100vh]">
      {/* Header bar */}
      <HeaderMain />
      {/* Main body of the page */}
      <div className=" flex flex-col align-middle justify-center text-lg">
        {/* Small Logo plus background */}
        <SmallLogoBanner />
        {/* Color break */}
        <div className="w-full h-full bg-red-400">
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
      {/* Footer at the bottom of the page0 */}
      <FooterMain />
    </div>
  );
}

export default MembershipPage;
