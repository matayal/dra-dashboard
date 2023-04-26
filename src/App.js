import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Components/Home";
import SharedLayout from "./Components/SharedLayout";
import LoadSTS from "./Components/LoadSTS";
import GraphComponent from "./Components/GraphComponent";
import ConstructGraph from "./Components/ConstructGraph";
import Error from "./Components/Error";
import Community from "./Components/Community";

function App() {
  return (
    <div className="home-space">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="load-sts" element={<LoadSTS />} />
            <Route path="construct-graph" element={<ConstructGraph />} />
            <Route path="graphs" element={<GraphComponent />} />
            <Route path="community" element={<Community />} />

            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
