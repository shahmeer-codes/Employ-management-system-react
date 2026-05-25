import React from "react";
import { useSelector } from "react-redux";

const Employnav2 = () => {
  const userindex = useSelector((state) => {
    return state.store.currentemployindex;
  });
  const user = useSelector((state) => {
    return state.store.employ[userindex];
  });

  if (!user) return null;

  const stats = [
    {
      value: user.totaltask,
      label: "New Tasks",
      colorClass: "text-indigo-400",
      bgClass: "bg-indigo-500/10 border-indigo-500/20",
    },
    {
      value: user.completedtask,
      label: "Completed",
      colorClass: "text-emerald-400",
      bgClass: "bg-emerald-500/10 border-emerald-500/20",
    },
    {
      value: user.acceptedtask,
      label: "Accepted",
      colorClass: "text-amber-400",
      bgClass: "bg-amber-500/10 border-amber-500/20",
    },
    {
      value: user.rejectedtask,
      label: "Rejected",
      colorClass: "text-rose-400",
      bgClass: "bg-rose-500/10 border-rose-500/20",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-6 md:px-12 mt-8 mb-6">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className={`flex flex-col justify-between p-6 border rounded-2xl bg-slate-900/60 backdrop-blur-md shadow-lg transition-transform duration-300 hover:scale-[1.02] ${stat.bgClass}`}
        >
          <span className={`text-4xl md:text-5xl font-black ${stat.colorClass}`}>
            {stat.value}
          </span>
          <span className="text-sm md:text-base font-bold text-slate-300 mt-2">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Employnav2;
