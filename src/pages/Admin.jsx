import React from "react";
import { useSelector } from "react-redux";
import Createtask from "../components/Createtask";
import Admintasklist from "../components/Admintasklist";
import Adminnav from "../components/Adminnav";

const Admin = () => {
  const theme = useSelector((state) => state.store.theme);

  return (
    <div
      className={`min-h-screen pb-12 font-sans transition-all duration-300 ${
        theme === "dark"
          ? "bg-slate-950 text-white"
          : "bg-slate-50 text-slate-900"
      }`}
    >
      <Adminnav />

      <div className="pt-24 px-4 md:px-8 max-w-7xl mx-auto flex flex-col gap-6">
        <Createtask />
        <Admintasklist />
      </div>
    </div>
  );
};

export default Admin;