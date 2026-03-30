import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Trending from "./partials/Trending";
import Popular from "./partials/Popular";
import Movies from "./partials/Movies";
import TvShow from "./partials/TvShow";

function App() {
  return (
    <div className="w-screen h-screen bg-[#1F1E24] flex ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvshow" element={<TvShow />} />
      </Routes>
    </div>
  );
}

export default App;


//  37