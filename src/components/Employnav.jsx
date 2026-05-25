import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, setlocaldata, toggleTheme } from "../redux-toolkit/dataslice";

const Employnav = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.store.theme);
  const userindex = useSelector((state) => state.store.currentemployindex);
  const employ = useSelector((state) => state.store.employ);
  const currentUser = employ[userindex];

  if (theme === "dark") {
    return (
      <div className="bg-slate-900/80 backdrop-blur-lg border-b border-slate-800 fixed top-0 w-full text-white flex justify-between items-center px-6 md:px-12 py-4 z-50 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
          <h1 className="text-xl md:text-2xl font-bold tracking-tight text-slate-100">
            Hello, <span className="text-emerald-400">{currentUser?.name || "Employee"}</span> 👋
          </h1>
          <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold px-2.5 py-0.5 rounded-full w-fit">
            Employee Portal
          </span>
        </div>
        <div className="flex items-center">
          <button
            onClick={() => {
              dispatch(toggleTheme());
              dispatch(setlocaldata());
            }}
            className="text-white font-bold px-4 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all duration-300 active:scale-95 cursor-pointer mr-4 text-sm"
          >
            ☀️ Light Mode And Change Layout
          </button>
          <button
            onClick={() => {
              dispatch(logout());
              dispatch(setlocaldata());
            }}
            className="text-white font-bold px-5 py-2.5 bg-red-600 hover:bg-red-500 rounded-xl transition-all duration-300 active:scale-95 cursor-pointer shadow-lg shadow-red-600/20 text-sm"
          >
            Log out
          </button>
        </div>
      </div>
    );
  }

  // Original light UI navigation (with Hello spelling fix)
  return (
    <div
      className="bg-white/40
 backdrop-blur-lg
shadow-md
border border-white/20 fixed top-0 w-full
 text-gray-500 flex justify-between p-5 z-50 animate-none"
    >
      <div className="flex flex-col text-2xl font-bold text-black">
        <h1>Hello</h1>
        <h1>
          {currentUser?.name || "Employee"}
          👋
        </h1>
      </div>
      <div className="flex items-center">
        <button
          onClick={() => {
            dispatch(toggleTheme());
            dispatch(setlocaldata());
          }}
          className="text-white font-bold h-12 px-4 rounded-2xl hover:bg-slate-700 bg-slate-800 active:scale-95 cursor-pointer mr-4 text-sm"
        >
          🌙 Dark Mode And Change Layout
        </button>
        <button
          onClick={() => {
            dispatch(logout());
            dispatch(setlocaldata());
          }}
          className="text-white font-bold h-12 w-20 rounded-2xl hover:bg-red-500 bg-red-600 active:scale-95 cursor-pointer text-sm"
        >
          logout
        </button>
      </div>
    </div>
  );
};

export default Employnav;
