import "./App.css";
import React, { Suspense } from "react";
import Banner from "./Components/Banner";
import LogoPanel from "./Components/LogoPanel";
import HeaderMain from "./Components/HeaderMain";
import FooterMain from "./Components/FooterMain";
import CoreValuesBody from "./Components/CoreValuesBody";

function App() {
  return (
    <div className="text-center bg-[#282c34] text-lg text-white flex flex-col min-h-[100vh]">
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
        <div className="pt-4 pb-4">
          <CoreValuesBody />
        </div>

        {/* Color break banner */}
        <Suspense fallback={<div>Loading...</div>}>
          <Banner height={25} />
        </Suspense>

        <div className="pt-12">
          <p>Show of force stats</p>
        </div>
        <div className="grid grid-flow-col gap-48 h-48 py-12 align-middle justify-center">
          <p>Discord users: a bunch</p>
          <p>Patreon users: a bunch</p>
          <p>Unique users: a bunch</p>
        </div>

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

        <div className="p-32 bg-slate-400">
          Filler area "Join show of force or something"
        </div>

        <div className="p-32">Links to socials and other in site pages</div>

        <div className="p-12 bg-red-400">Copyright 2025 Show of Force</div>
      </div>
      {/* Footer at the bottom of the page0 */}
      <FooterMain />
    </div>
  );
}

export default App;
