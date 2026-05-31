import React from "react";
import { useSelector } from "react-redux";

const Admintasklist = () => {
  const employ = useSelector((state) => state.store.employ);
  const theme = useSelector((state) => state.store.theme);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 mb-12">
      <div
        className={`rounded-3xl p-6 md:p-8 shadow-xl border ${
          theme === "dark"
            ? "bg-slate-900/60 border-slate-800"
            : "bg-white border-slate-200"
        }`}
      >
        <div className="mb-6">
          <h2
            className={`text-2xl font-bold ${
              theme === "dark" ? "text-white" : "text-slate-900"
            }`}
          >
            Employee Task Summary
          </h2>

          <p
            className={`text-sm mt-1 ${
              theme === "dark" ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Real-time status overview of assigned tasks.
          </p>
        </div>

        <div
          className={`overflow-x-auto rounded-2xl border ${
            theme === "dark"
              ? "border-slate-800 bg-slate-950/40"
              : "border-slate-200 bg-white"
          }`}
        >
          <table className="w-full min-w-[700px] text-center">
            <thead>
              <tr
                className={`border-b ${
                  theme === "dark"
                    ? "bg-slate-950 text-slate-300 border-slate-800"
                    : "bg-slate-100 text-slate-700 border-slate-200"
                }`}
              >
                <th className="px-6 py-4 text-left">Employee</th>
                <th className="px-6 py-4">Accepted</th>
                <th className="px-6 py-4">Completed</th>
                <th className="px-6 py-4">Rejected</th>
                <th className="px-6 py-4">Total</th>
              </tr>
            </thead>

            <tbody>
              {employ.map((e) => (
                <tr
                  key={e.id}
                  className={`border-b ${
                    theme === "dark"
                      ? "border-slate-800 hover:bg-slate-900/50"
                      : "border-slate-100 hover:bg-slate-50"
                  }`}
                >
                  <td className="px-6 py-4 text-left font-semibold">
                    {e.name}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        theme === "dark"
                          ? "bg-amber-500/10 text-amber-400"
                          : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {e.acceptedtask}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        theme === "dark"
                          ? "bg-emerald-500/10 text-emerald-400"
                          : "bg-emerald-100 text-emerald-700"
                      }`}
                    >
                      {e.completedtask}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        theme === "dark"
                          ? "bg-rose-500/10 text-rose-400"
                          : "bg-rose-100 text-rose-700"
                      }`}
                    >
                      {e.rejectedtask}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        theme === "dark"
                          ? "bg-indigo-500/10 text-indigo-400"
                          : "bg-indigo-100 text-indigo-700"
                      }`}
                    >
                      {e.tasks.length}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admintasklist;