import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, setlocaldata } from "../redux-toolkit/dataslice";
const Employnav = () => {
  const dispatch = useDispatch();
  const userindex = useSelector((state) => {
    return state.store.currentemployindex;
  });
  const employ = useSelector((state) => {
    return state.store.employ;
  });

  return (
    <div
      className="bg-white/40
 backdrop-blur-lg
shadow-md
border border-white/20 fixed top-0 w-full
 text-gray-500 flex justify-between p-5"
    >
      <div className="flex flex-col text-2xl font-bold">
        <h1>Hellow</h1>
        <h1>
          {employ[userindex].name}
          👋
        </h1>
      </div>
      <button
        onClick={() => {
          dispatch(logout());
          dispatch(setlocaldata());
        }}
        className="text-white font-bold h-12 w-20 rounded-2xl hover:bg-red-500 bg-red-600 active:scale-95"
      >
        logout
      </button>
    </div>
  );
};

export default Employnav;
