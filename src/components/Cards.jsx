import { useDispatch, useSelector } from "react-redux";
import {
  completedtask,
  rejectedtask,
  setlocaldata,
  taskaccepted,
} from "../redux-toolkit/dataslice";

const Cards = () => {
  const dispatch = useDispatch();

  const userindex = useSelector((state) => state.store.currentemployindex);

  const userarr = useSelector((state) => {
    return state.store.employ[userindex]?.tasks || [];
  });

  return (
    <>
      {userarr.length !== 0 ? (
        userarr.map((item, idx) => (
          <div
            key={idx}
            className="w-80 shrink-0 h-fit flex flex-col shadow-2xl shadow-black text-black bg-white p-5 m-10 rounded-3xl"
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

              <h1 className="h-8 rounded-2xl p-2 w-fit text-white bg-gray-600 flex justify-center items-center">
                {item.dateToBeCompleted}
              </h1>
            </div>

            <div className="flex flex-col text-2xl font-bold mt-5 gap-4">
              <div className="text-3xl font-extrabold">Title: {item.title}</div>

              <div>Description: {item.details}</div>

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
                    className="text-white font-bold h-12 w-24 rounded-2xl hover:bg-blue-500 bg-blue-600 active:scale-95"
                  >
                    Accept
                  </button>

                  <button
                    onClick={() => {
                      dispatch(rejectedtask({ taskid: idx }));
                      dispatch(setlocaldata());
                    }}
                    className="text-white font-bold h-12 w-24 rounded-2xl hover:bg-red-500 bg-red-600 active:scale-95"
                  >
                    Reject
                  </button>
                </>
              )}
              {item.status === "completed" && (
                <button className="text-white font-bold h-12 w-full rounded-2xl bg-gray-600">
                  Completeed
                </button>
              )}
              {item.status === "accepted" && (
                <button
                  onClick={() => {
                    dispatch(completedtask(idx));
                    dispatch(setlocaldata());
                  }}
                  className="text-white font-bold h-12 w-full rounded-2xl hover:bg-green-500 bg-green-600 active:scale-95"
                >
                  Complete
                </button>
              )}

              {item.status === "rejected" && (
                <button className="text-white font-bold h-12 w-full rounded-2xl bg-red-600">
                  Rejected
                </button>
              )}
            </div>
          </div>
        ))
      ) : (
        <div className="text-2xl w-full h-full items-center font-bold flex justify-center">
          <h1>No jobs today!</h1>
        </div>
      )}
    </>
  );
};

export default Cards;
