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
      createtask({
        username,
        title,
        priority,
        details,
        date,
        category,
      })
    );

    dispatch(setlocaldata());

    setCategory("");
    setDetails("");
    setdate("");
    settitle("");
    setusername("");
    setpriority("");
  };

  const inputClass = `
    w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-300 border font-medium
    ${
      theme === "dark"
        ? "bg-slate-950 border-slate-800 text-white placeholder:text-slate-500 focus:border-indigo-500"
        : "bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 shadow-sm"
    }
  `;

  const labelClass = `
    text-sm font-semibold
    ${theme === "dark" ? "text-slate-300" : "text-slate-700"}
  `;

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      <div
        className={`rounded-3xl p-6 md:p-8 shadow-xl border transition-all duration-300 ${
          theme === "dark"
            ? "bg-slate-900/60 backdrop-blur-lg border-slate-800"
            : "bg-white border-slate-200"
        }`}
      >
        {/* Header */}
        <div className="mb-8">
          <h2
            className={`text-3xl font-extrabold tracking-tight ${
              theme === "dark" ? "text-white" : "text-slate-900"
            }`}
          >
            Assign New Task
          </h2>

          <p
            className={`mt-1 ${
              theme === "dark" ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Create and assign tasks to your employees.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Side */}
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className={labelClass}>Task Title</label>
                <input
                  value={title}
                  onChange={(e) => settitle(e.target.value)}
                  className={inputClass}
                  type="text"
                  placeholder="Enter task title"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className={labelClass}>Task Deadline</label>
                <input
                  value={date}
                  onChange={(e) => setdate(e.target.value)}
                  className={inputClass}
                  type="date"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className={labelClass}>Assign Employee</label>
                <select
                  value={username}
                  onChange={(e) => setusername(e.target.value)}
                  className={inputClass}
                  required
                >
                  <option value="" disabled>
                    Select Employee
                  </option>

                  {employees.map((emp) => (
                    <option key={emp.id} value={emp.name}>
                      {emp.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label className={labelClass}>Category</label>
                <input
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className={inputClass}
                  type="text"
                  placeholder="Development, Design, QA..."
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className={labelClass}>Priority</label>
                <select
                  value={priority}
                  onChange={(e) => setpriority(e.target.value)}
                  className={inputClass}
                  required
                >
                  <option value="" disabled>
                    Select Priority
                  </option>

                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className={labelClass}>Task Details</label>

                <textarea
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className={`${inputClass} min-h-[120px] resize-none`}
                  placeholder="Describe the task..."
                  required
                />
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all duration-300 active:scale-95 shadow-lg shadow-indigo-600/20"
            >
              Assign Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Createtask;