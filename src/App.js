import * as React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About Us" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
