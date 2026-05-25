import React from "react";
import { useSelector } from "react-redux";
import Employnav from "../components/Employnav";
import Employnav2 from "../components/Employnav2";
import Cards from "../components/Cards";

const Employ = () => {
  const theme = useSelector((state) => state.store.theme);

  if (theme === "dark") {
    return (
      <div className="w-full min-h-screen bg-slate-950 font-sans text-white pb-12">
        <Employnav />
        <div className="pt-24 max-w-7xl mx-auto flex flex-col gap-4">
          <Employnav2 />
          <div className="px-6 md:px-12 py-4">
            <h2 className="text-2xl font-bold text-white tracking-tight mb-6">Your Tasks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Cards />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Original light UI layout (with original classes: bg-white, pt-25, cards container w-370 h-110, overflow-x-auto, bg-gray-300, rounded-4xl)
  return (
    <div className="w-full h-screen bg-white">
      <Employnav />
      <div className="pt-25">
        <Employnav2 />
        <div className="flex justify-center items-center">
          <div
            id="cards"
            className="flex bg-gray-300 mb-30 w-370 h-110 rounded-4xl gap-6 overflow-x-auto scrollbar-hide"
          >
            <Cards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employ;
