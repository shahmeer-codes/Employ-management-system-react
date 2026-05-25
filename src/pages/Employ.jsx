import React from "react";
import Employnav from "../components/Employnav";
import Employnav2 from "../components/Employnav2";
import Cards from "../components/Cards";

const Employ = () => {
  return (
    <>
      <div className=" w-full h-screen bg-white">
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
    </>
  );
};

export default Employ;
