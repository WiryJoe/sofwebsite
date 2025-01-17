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
        <div className="pt-96 pb-96">
          <CoreValuesBody />
        </div>

        {/* Color break banner */}
        <Suspense fallback={<div>Loading...</div>}>
          <Banner height={25} />
        </Suspense>
      </div>
      {/* Footer at the bottom of the page0 */}
      <FooterMain />
    </div>
  );
}

export default App;
