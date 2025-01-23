import React from "react";
import SmallLogoBanner from "../Components/SmallLogoBanner";
import HeaderMain from "../Components/HeaderMain";
import FooterMain from "../Components/FooterMain";

function RulesAndGuidesPage() {
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
          <div>Stats</div>
        </div>
      </div>
      {/* Footer at the bottom of the page0 */}
      <FooterMain />
    </div>
  );
}

export default RulesAndGuidesPage;
