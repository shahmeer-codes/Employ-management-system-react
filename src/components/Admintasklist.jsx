import React from "react";
import { useSelector } from "react-redux";

const Admintasklist = () => {
  const employ = useSelector((state) => {
    return state.store.employ;
  });

  return (
    <div className="w-full max-w-4xl mx-auto px-4 mb-12">
      <div className="bg-slate-900/60 backdrop-blur-lg border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white tracking-tight">Employee Task Summary</h2>
          <p className="text-slate-400 text-sm mt-1">Real-time status overview of assigned tasks per employee.</p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800/80 bg-slate-950/40">
          <table className="w-full min-w-[650px] text-center border-collapse">
            <thead>
              <tr className="bg-slate-950 text-slate-300 border-b border-slate-800 text-sm font-bold">
                <th className="px-6 py-4 text-left">Employee Name</th>
                <th className="px-6 py-4">Under-Action Tasks</th>
                <th className="px-6 py-4">Completed Tasks</th>
                <th className="px-6 py-4">Rejected Tasks</th>
                <th className="px-6 py-4">Total Tasks</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50 text-sm">
              {employ.map((e) => {
                const total = e.tasks.length;
                return (
                  <tr
                    key={e.id}
                    className="hover:bg-slate-900/40 transition-colors duration-200"
                  >
                    <td className="px-6 py-4 text-left font-semibold text-white">
                      {e.name}
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20 min-w-[32px]">
                        {e.acceptedtask}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 min-w-[32px]">
                        {e.completedtask}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-bold bg-rose-500/10 text-rose-400 border border-rose-500/20 min-w-[32px]">
                        {e.rejectedtask}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 min-w-[32px]">
                        {total}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admintasklist;
