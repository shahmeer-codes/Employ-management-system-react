import React from "react";
import { useSelector } from "react-redux";

const Employnav2 = () => {
  const userindex = useSelector((state) => {
    return state.store.currentemployindex;
  });
  const user = useSelector((state) => {
    return state.store.employ[userindex];
  });

  return (
    <div className="flex justify-between m-10 ">
      <div className="flex flex-col justify-between shadow-2xl text-blue-700 p-5 bg-blue-300 font-bold text-4xl h-35 w-fit min-w-50 rounded-2xl">
        <h1>{user.totaltask}</h1>
        <h1>New task</h1>
      </div>
      <div className="flex flex-col justify-between p-5 shadow-2xl text-green-700 bg-green-300 font-bold text-4xl h-35 w-fit min-w-70 rounded-2xl">
        <h1>{user.completedtask}</h1>
        <h1>Complelted</h1>
      </div>
      <div className="flex flex-col justify-between p-5 shadow-2xl text-yellow-700 bg-yellow-300 font-bold text-4xl h-35 w-fit min-w-50 rounded-2xl">
        <h1>{user.acceptedtask}</h1>
        <h1>Accepted </h1>
      </div>
      <div className="flex flex-col justify-between p-5 shadow-2xl text-red-700 bg-red-300 font-bold text-4xl h-35 w-fit min-w-50 rounded-2xl">
        <h1>{user.rejectedtask}</h1>
        <h1>Rejected</h1>
      </div>
    </div>
  );
};

export default Employnav2;
