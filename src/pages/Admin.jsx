import React from "react";
import Createtask from "../components/Createtask";
import Admintasklist from "../components/Admintasklist";
import Adminnav from "../components/Adminnav";

const Admin = () => {
  return (
    <div className="bg-slate-950 min-h-screen pb-12 font-sans">
      <Adminnav />
      <div className="pt-24 px-4 md:px-8 max-w-7xl mx-auto flex flex-col gap-4">
        <Createtask />
        <Admintasklist />
      </div>
    </div>
  );
};

export default Admin;
