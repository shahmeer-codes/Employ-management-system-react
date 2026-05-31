import { useDispatch, useSelector } from "react-redux";
import {
  completedtask,
  rejectedtask,
  setlocaldata,
  taskaccepted,
} from "../redux-toolkit/dataslice";

const Cards = () => {
  const dispatch = useDispatch();

  const userindex = useSelector(
    (state) => state.store.currentemployindex
  );

  const userarr = useSelector(
    (state) => state.store.employ[userindex]?.tasks || []
  );

  const theme = useSelector((state) => state.store.theme);

  return (
    <>
      {userarr.length !== 0 ? (
        userarr.map((item, idx) => (
          <div
            key={idx}
            className={`flex flex-col justify-between p-6 rounded-3xl transition-all duration-300 hover:scale-[1.02]
            ${
              theme === "dark"
                ? "bg-slate-900/60 backdrop-blur-lg border border-slate-800/80 shadow-xl text-white hover:border-slate-700"
                : "bg-white border border-gray-200 shadow-lg text-gray-900 hover:shadow-2xl hover:border-gray-300"
            }`}
          >
            <div>
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border
                  ${
                    item.priority === "high"
                      ? theme === "dark"
                        ? "bg-red-500/10 text-red-400 border-red-500/20"
                        : "bg-red-100 text-red-700 border-red-200"
                      : item.priority === "medium"
                      ? theme === "dark"
                        ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
                        : "bg-amber-100 text-amber-700 border-amber-200"
                      : theme === "dark"
                      ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                      : "bg-emerald-100 text-emerald-700 border-emerald-200"
                  }`}
                >
                  {item.priority} Priority
                </span>

                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full border
                  ${
                    theme === "dark"
                      ? "text-slate-400 bg-slate-950/60 border-slate-800"
                      : "text-gray-600 bg-gray-100 border-gray-200"
                  }`}
                >
                  Due: {item.dateToBeCompleted}
                </span>
              </div>

              {/* Title */}
              <h3
                className={`text-xl font-bold tracking-tight mb-3
                ${
                  theme === "dark"
                    ? "text-white"
                    : "text-gray-900"
                }`}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className={`text-sm leading-relaxed min-h-[70px]
                ${
                  theme === "dark"
                    ? "text-slate-300"
                    : "text-gray-600"
                }`}
              >
                {item.details}
              </p>

              {/* Category */}
              <div className="mt-4">
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-lg border
                  ${
                    theme === "dark"
                      ? "bg-slate-950/60 border-slate-800 text-indigo-400"
                      : "bg-indigo-50 border-indigo-200 text-indigo-700"
                  }`}
                >
                  #{item.category}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-6">
              {item.status === "null" && (
                <>
                  <button
                    onClick={() => {
                      dispatch(taskaccepted({ taskid: idx }));
                      dispatch(setlocaldata());
                    }}
                    className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-xl transition-all duration-300 active:scale-95 cursor-pointer"
                  >
                    Accept
                  </button>

                  <button
                    onClick={() => {
                      dispatch(rejectedtask({ taskid: idx }));
                      dispatch(setlocaldata());
                    }}
                    className="flex-1 bg-rose-600 hover:bg-rose-500 text-white font-semibold py-3 rounded-xl transition-all duration-300 active:scale-95 cursor-pointer"
                  >
                    Reject
                  </button>
                </>
              )}

              {item.status === "accepted" && (
                <button
                  onClick={() => {
                    dispatch(completedtask(idx));
                    dispatch(setlocaldata());
                  }}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-3 rounded-xl transition-all duration-300 active:scale-95 cursor-pointer"
                >
                  Mark Complete
                </button>
              )}

              {item.status === "completed" && (
                <div
                  className={`w-full text-center font-bold py-3 rounded-xl border
                  ${
                    theme === "dark"
                      ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
                      : "text-emerald-700 bg-emerald-100 border-emerald-200"
                  }`}
                >
                  ✓ Completed
                </div>
              )}

              {item.status === "rejected" && (
                <div
                  className={`w-full text-center font-bold py-3 rounded-xl border
                  ${
                    theme === "dark"
                      ? "text-rose-400 bg-rose-500/10 border-rose-500/20"
                      : "text-rose-700 bg-rose-100 border-rose-200"
                  }`}
                >
                  ✕ Rejected
                </div>
              )}
            </div>
          </div>
        ))
      ) : (
        <div className="col-span-full py-16 flex flex-col items-center justify-center text-center">
          <div className="text-6xl mb-4">🎉</div>

          <h3
            className={`text-2xl font-bold ${
              theme === "dark"
                ? "text-white"
                : "text-gray-900"
            }`}
          >
            No Tasks Available
          </h3>

          <p
            className={`mt-2 ${
              theme === "dark"
                ? "text-slate-400"
                : "text-gray-500"
            }`}
          >
            You're all caught up. Enjoy your day!
          </p>
        </div>
      )}
    </>
  );
};

export default Cards;