import * as React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import StatsPage from "./Pages/StatsPage";
import RulesAndGuidesPage from "./Pages/RulesAndGuidesPage";
import MembershipPage from "./Pages/MembershipPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="AboutUs" element={<AboutUs />} />
        <Route path="StatsPage" element={<StatsPage />} />
        <Route path="RulesAndGuidesPage" element={<RulesAndGuidesPage />} />
        <Route path="MembershipPage" element={<MembershipPage />} />
      </Routes>
    </div>
  );
}

export default App;
