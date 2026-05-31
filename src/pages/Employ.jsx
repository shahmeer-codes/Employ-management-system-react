import React from "react";
import { useSelector } from "react-redux";
import Employnav from "../components/Employnav";
import Employnav2 from "../components/Employnav2";
import Cards from "../components/Cards";

const Employ = () => {
  const theme = useSelector((state) => state.store.theme);

  return (
    <div
      className={`w-full min-h-screen font-sans pb-12 transition-all duration-300 ${
        theme === "dark"
          ? "bg-slate-950 text-white"
          : "bg-slate-50 text-slate-900"
      }`}
    >
      <Employnav />

      <div className="pt-24 max-w-7xl mx-auto flex flex-col gap-4">
        <Employnav2 />

        <div className="px-6 md:px-12 py-4">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2
                className={`text-3xl font-bold tracking-tight ${
                  theme === "dark"
                    ? "text-white"
                    : "text-slate-900"
                }`}
              >
                Your Tasks
              </h2>

              <p
                className={`mt-1 text-sm ${
                  theme === "dark"
                    ? "text-slate-400"
                    : "text-slate-500"
                }`}
              >
                Manage and track your assigned tasks.
              </p>
            </div>

            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <Cards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employ;