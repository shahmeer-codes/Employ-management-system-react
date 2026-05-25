import { useDispatch, useSelector } from "react-redux";
import {
  completedtask,
  rejectedtask,
  setlocaldata,
  taskaccepted,
} from "../redux-toolkit/dataslice";

const Cards = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.store.theme);
  const userindex = useSelector((state) => state.store.currentemployindex);

  const userarr = useSelector((state) => {
    return state.store.employ[userindex]?.tasks || [];
  });

  if (theme === "dark") {
    return (
      <>
        {userarr.length !== 0 ? (
          userarr.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between bg-slate-900/60 backdrop-blur-lg border border-slate-800/80 p-6 rounded-3xl shadow-xl transition-all duration-300 hover:scale-[1.01] hover:border-slate-700/80 text-white"
            >
              <div>
                {/* Card Header: Priority Badge & Deadline */}
                <div className="flex justify-between items-center mb-4">
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                      item.priority === "high"
                        ? "bg-red-500/10 text-red-400 border border-red-500/20"
                        : item.priority === "medium"
                          ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                          : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    }`}
                  >
                    {item.priority} Priority
                  </span>

                  <span className="text-xs font-semibold text-slate-400 bg-slate-950/60 border border-slate-800/60 px-3 py-1 rounded-full">
                    Due: {item.dateToBeCompleted}
                  </span>
                </div>

                {/* Title, Details, & Category */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-bold text-white tracking-tight line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed min-h-[50px]">
                    {item.details}
                  </p>
                  <div className="mt-2">
                    <span className="bg-slate-950/60 border border-slate-800 text-xs font-semibold text-indigo-400 px-2.5 py-1 rounded-lg">
                      #{item.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Task Action / Status Section */}
              <div className="flex gap-3 mt-6">
                {item.status === "null" && (
                  <>
                    <button
                      onClick={() => {
                        dispatch(taskaccepted({ taskid: idx }));
                        dispatch(setlocaldata());
                      }}
                      className="flex-1 text-white font-bold py-2.5 rounded-xl hover:bg-indigo-500 bg-indigo-600 active:scale-95 transition-all duration-300 cursor-pointer text-sm"
                    >
                      Accept
                    </button>

                    <button
                      onClick={() => {
                        dispatch(rejectedtask({ taskid: idx }));
                        dispatch(setlocaldata());
                      }}
                      className="flex-1 text-white font-bold py-2.5 rounded-xl hover:bg-rose-500 bg-rose-600 active:scale-95 transition-all duration-300 cursor-pointer text-sm"
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
                    className="w-full text-white font-bold py-2.5 rounded-xl hover:bg-emerald-500 bg-emerald-600 active:scale-95 transition-all duration-300 cursor-pointer text-sm"
                  >
                    Mark Complete
                  </button>
                )}

                {item.status === "completed" && (
                  <div className="w-full text-center text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 font-bold py-2.5 rounded-xl text-sm animate-none">
                    Completed
                  </div>
                )}

                {item.status === "rejected" && (
                  <div className="w-full text-center text-rose-400 bg-rose-500/10 border border-rose-500/20 font-bold py-2.5 rounded-xl text-sm animate-none">
                    Rejected
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-16 flex flex-col items-center justify-center text-center">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-xl font-bold text-white">No tasks today!</h3>
            <p className="text-slate-400 mt-1">You are all caught up on your assignments.</p>
          </div>
        )}
      </>
    );
  }

  // Original light UI card layout (with Completed/Completeed spelling fix)
  return (
    <>
      {userarr.length !== 0 ? (
        userarr.map((item, idx) => (
          <div
            key={idx}
            className="w-80 shrink-0 h-fit flex flex-col shadow-2xl shadow-black text-black bg-white p-5 m-10 rounded-3xl text-left"
          >
            <div className="h-10 w-full flex justify-between items-center">
              <h1
                className={`h-8 w-8 rounded-full flex justify-center items-center text-white ${
                  item.priority === "high"
                    ? "bg-red-600"
                    : item.priority === "medium"
                      ? "bg-yellow-500"
                      : "bg-green-500"
                }`}
              ></h1>

              <h1 className="h-8 rounded-2xl p-2 w-fit text-white bg-gray-600 flex justify-center items-center text-sm font-semibold">
                {item.dateToBeCompleted}
              </h1>
            </div>

            <div className="flex flex-col text-2xl font-bold mt-5 gap-4">
              <div className="text-3xl font-extrabold text-black">Title: {item.title}</div>
              <div className="text-black">Description: {item.details}</div>
              <div className="text-gray-400">{item.category}</div>
            </div>

            <div className="flex justify-between items-center mt-10">
              {item.status === "null" && (
                <>
                  <button
                    onClick={() => {
                      dispatch(taskaccepted({ taskid: idx }));
                      dispatch(setlocaldata());
                    }}
                    className="text-white font-bold h-12 w-24 rounded-2xl hover:bg-blue-500 bg-blue-600 active:scale-95 cursor-pointer text-sm"
                  >
                    Accept
                  </button>

                  <button
                    onClick={() => {
                      dispatch(rejectedtask({ taskid: idx }));
                      dispatch(setlocaldata());
                    }}
                    className="text-white font-bold h-12 w-24 rounded-2xl hover:bg-red-500 bg-red-600 active:scale-95 cursor-pointer text-sm"
                  >
                    Reject
                  </button>
                </>
              )}
              {item.status === "completed" && (
                <button className="text-white font-bold h-12 w-full rounded-2xl bg-gray-600 text-sm">
                  Completed
                </button>
              )}
              {item.status === "accepted" && (
                <button
                  onClick={() => {
                    dispatch(completedtask(idx));
                    dispatch(setlocaldata());
                  }}
                  className="text-white font-bold h-12 w-full rounded-2xl hover:bg-green-500 bg-green-600 active:scale-95 cursor-pointer text-sm"
                >
                  Complete
                </button>
              )}

              {item.status === "rejected" && (
                <button className="text-white font-bold h-12 w-full rounded-2xl bg-red-600 text-sm animate-none">
                  Rejected
                </button>
              )}
            </div>
          </div>
        ))
      ) : (
        <div className="text-2xl w-full h-full items-center font-bold flex justify-center text-black">
          <h1>No jobs today!</h1>
        </div>
      )}
    </>
  );
};

export default Cards;
