import React from "react";
import { useSelector } from "react-redux";

const Admintasklist = () => {
  const employ = useSelector((state) => {
    return state.store.employ;
  });

  return (
    <div className="flex justify-center items-center">
      <table className=" border-2 w-350 mb-50 border-black text-center">
        <thead>
          <tr className="bg-black text-white h-10">
            <th className="border-2 border-black p-2">Name</th>
            <th className="border-2 border-black p-2">Under-action task</th>
            <th className="border-2 border-black p-2">Completed task</th>
            <th className="border-2 border-black p-2">Rejected task</th>
            <th className="border-2 border-black p-2">Total tasks</th>
          </tr>
        </thead>
        <tbody>
          {employ.map((e) => {
            return (
              <tr key={e.id}>
                <td className="border-2 border-black p-2">{e.name}</td>
                <td className="border-2 border-black p-2">{e.acceptedtask}</td>
                <td className="border-2 border-black p-2">{e.completedtask}</td>
                <td className="border-2 border-black p-2">{e.rejectedtask}</td>
                <td className="border-2 border-black p-2">{e.tasks.length}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Admintasklist;
