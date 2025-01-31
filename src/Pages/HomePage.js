import React, { Suspense } from "react";
import Banner from "../Components/Banner";
import LogoPanel from "../Components/LogoPanel";
import HeaderMain from "../Components/HeaderMain";
import FooterMain from "../Components/FooterMain";
import CoreValuesBody from "../Components/CoreValuesBody";
import MiniStatsDisplay from "../Components/MiniStatsDisplay";
import HomePageBottomInfo from "../Components/HomePageBottomInfo";

function HomePage() {
  return (
    <div className="text-center bg-[#2c2444] text-lg text-white flex flex-col min-h-[100vh] w-full">
      {/* Header bar */}
      <HeaderMain />
      {/* Main body of the page */}
      <div className=" flex flex-col align-middle justify-center text-lg text-white">
        {/* Main logo display */}
        <Suspense fallback={<div>Loading...</div>}>
          <LogoPanel />
        </Suspense>

        {/* Color break banner */}
        <Suspense fallback={<div>Loading...</div>}>
          <Banner height={25} />
        </Suspense>

        {/* Core values body */}
        <div>
          <CoreValuesBody />
        </div>

        {/* Mini stats display */}
        <MiniStatsDisplay />

        {/* Color break banner */}
        <Suspense fallback={<div>Loading...</div>}>
          <Banner height={25} />
        </Suspense>

        <div className="flex align-middle justify-center items-center">
          <img
            src="/content/map.png"
            alt="Ping map"
            className=""
            loading="lazy"
          />
        </div>

        {/* Information at the bottom of the page */}
        <HomePageBottomInfo />
      </div>
      {/* Footer at the bottom of the page0 */}
      <FooterMain />
    </div>
  );
}

export default HomePage;
