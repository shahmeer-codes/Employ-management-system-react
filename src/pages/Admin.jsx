import React from "react";
import { useSelector } from "react-redux";
import Createtask from "../components/Createtask";
import Admintasklist from "../components/Admintasklist";
import Adminnav from "../components/Adminnav";

const Admin = () => {
  const theme = useSelector((state) => state.store.theme);

  if (theme === "dark") {
    return (
      <div className="bg-slate-950 min-h-screen pb-12 font-sans text-white">
        <Adminnav />
        <div className="pt-24 px-4 md:px-8 max-w-7xl mx-auto flex flex-col gap-4">
          <Createtask />
          <Admintasklist />
        </div>
      </div>
    );
  }

  // Original light UI
  return (
    <div className="bg-gray-200 min-h-screen pb-12 font-sans text-black">
      <Adminnav />
      <div className="pt-25">
        <Createtask />
        <Admintasklist />
      </div>
    </div>
  );
};

export default Admin;
