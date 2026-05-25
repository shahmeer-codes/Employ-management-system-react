import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createtask, setlocaldata } from "../redux-toolkit/dataslice";

const Createtask = () => {
  const [title, settitle] = useState("");
  const [details, setDetails] = useState("");
  const [date, setdate] = useState("");
  const [username, setusername] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setpriority] = useState("");

  const dispatch = useDispatch();
  const employees = useSelector((state) => state.store.employ);
  const theme = useSelector((state) => state.store.theme);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) {
      alert("❌ Please select an employee.");
      return;
    }
    if (!priority) {
      alert("❌ Please select a task priority.");
      return;
    }

    dispatch(
      createtask({ username, title, priority, details, date, category })
    );
    dispatch(setlocaldata());

    setCategory("");
    setDetails("");
    setdate("");
    settitle("");
    setusername("");
    setpriority("");
  };

  if (theme === "dark") {
    // Premium dark theme layout
    return (
      <div className="w-full max-w-4xl mx-auto px-4 py-8">
        <div className="bg-slate-900/60 backdrop-blur-lg border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl">
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">Assign New Task</h2>
            <p className="text-slate-400 mt-1">Fill in the details to assign a task to a team member.</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-300">Task Title</label>
                  <input
                    value={title}
                    onChange={(e) => settitle(e.target.value)}
                    className="bg-slate-950/80 border border-slate-800 text-white placeholder:text-slate-500 rounded-xl px-4 py-3 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all duration-300 font-medium"
                    type="text"
                    placeholder="Enter task title"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-300">Task Deadline</label>
                  <input
                    value={date}
                    onChange={(e) => setdate(e.target.value)}
                    className="bg-slate-950/80 border border-slate-800 text-white rounded-xl px-4 py-3 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all duration-300 font-medium"
                    type="date"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-300">Assign To (Employee)</label>
                  <select
                    value={username}
                    onChange={(e) => setusername(e.target.value)}
                    className="bg-slate-950/80 border border-slate-800 text-white rounded-xl px-4 py-3 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all duration-300 font-medium"
                    required
                  >
                    <option value="" disabled className="bg-slate-950 text-slate-500">
                      Select an employee...
                    </option>
                    {employees.map((emp) => (
                      <option key={emp.id} value={emp.name} className="bg-slate-950 text-white">
                        {emp.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-300">Category</label>
                  <input
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="bg-slate-950/80 border border-slate-800 text-white placeholder:text-slate-500 rounded-xl px-4 py-3 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all duration-300 font-medium"
                    type="text"
                    placeholder="e.g. Development, Design, QA"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-300">Priority</label>
                  <select
                    value={priority}
                    onChange={(e) => setpriority(e.target.value)}
                    className="bg-slate-950/80 border border-slate-800 text-white rounded-xl px-4 py-3 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all duration-300 font-medium"
                    required
                  >
                    <option value="" disabled className="bg-slate-950 text-slate-500">
                      Select priority...
                    </option>
                    <option value="high" className="bg-slate-950 text-white">High</option>
                    <option value="medium" className="bg-slate-950 text-white">Medium</option>
                    <option value="low" className="bg-slate-950 text-white">Low</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-slate-300">Task Details</label>
                  <textarea
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="bg-slate-950/80 border border-slate-800 text-white placeholder:text-slate-500 rounded-xl px-4 py-3 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all duration-300 font-medium min-h-[110px] resize-y"
                    placeholder="Enter details of the task..."
                    required
                  />
                </div>
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <button className="w-full md:w-auto px-8 py-3 text-white font-bold bg-indigo-600 hover:bg-indigo-500 active:scale-95 rounded-xl shadow-lg shadow-indigo-600/30 transition-all duration-300 cursor-pointer">
                Assign Task
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // Original light UI layout (preserving dropdown logic and Hello/Employee/Category spelling updates)
  return (
    <div className="h-100 w-full flex flex-col font-bold">
      <form onSubmit={handleSubmit} className="h-100 flex flex-col flex-wrap p-5">
        <div className="flex flex-col gap-2">
          <h1 className="font-extrabold text-black text-left">Task title</h1>
          <input
            value={title}
            onChange={(e) => settitle(e.target.value)}
            className="border-2 border-black font-bold p-2 h-12 w-200 mb-5 bg-white text-black"
            type="text"
            placeholder="Enter your task"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-extrabold text-black text-left">Task details</h1>
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className="border-2 border-black font-bold p-2 h-25 w-200 mb-5 bg-white text-black"
            placeholder="Enter your task details"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-extrabold text-black text-left">Task Priority</h1>
          <select
            value={priority}
            onChange={(e) => setpriority(e.target.value)}
            className="border-2 border-black font-bold p-2 h-12 w-200 mb-5 bg-white text-black"
            required
          >
            <option value="" disabled className="bg-white text-slate-500">
              Select priority...
            </option>
            <option value="high" className="bg-white text-black">high</option>
            <option value="medium" className="bg-white text-black">medium</option>
            <option value="low" className="bg-white text-black">low</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-extrabold text-black text-left">Task deadlines</h1>
          <input
            value={date}
            onChange={(e) => setdate(e.target.value)}
            className="border-2 border-black font-bold p-2 h-12 w-100 mb-5 bg-white text-black"
            type="date"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-extrabold text-black text-left">Employee name</h1>
          <select
            value={username}
            onChange={(e) => setusername(e.target.value)}
            className="border-2 border-black font-bold p-2 h-12 w-100 mb-5 bg-white text-black"
            required
          >
            <option value="" disabled className="bg-white text-slate-500">
              Select employee...
            </option>
            {employees.map((emp) => (
              <option key={emp.id} value={emp.name} className="bg-white text-black">
                {emp.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-extrabold text-black text-left">Category</h1>
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border-2 border-black font-bold p-2 h-12 w-100 mb-5 bg-white text-black"
            type="text"
            placeholder="dev,ui/ux,tester,....etc"
            required
          />
        </div>
        <button className="text-white flex justify-center items-center font-bold h-12 w-100 rounded-2xl hover:bg-green-500 bg-green-600 active:scale-95 cursor-pointer">
          Assign task
        </button>
      </form>
    </div>
  );
};

export default Createtask;
