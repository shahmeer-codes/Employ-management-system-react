import React from "react";
import Employnav from "../components/Employnav";
import Employnav2 from "../components/Employnav2";
import Cards from "../components/Cards";

const Employ = () => {
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
};

export default Employ;
