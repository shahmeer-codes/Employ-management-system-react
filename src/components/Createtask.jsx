import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createtask, setlocaldata } from "../redux-toolkit/dataslice";

const Createtask = () => {
  const [title, settitle] = useState("");
  const [details, setDetails] = useState("");
  const [date, setdate] = useState("");
  const [username, setusername] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setpriority] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="h-100 w-full flex flex-col">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            createtask({ username, title, priority, details, date, category }),
            dispatch(setlocaldata()),
          );
          setCategory("");
          setDetails("");
          setdate("");
          settitle("");
          setusername("");
          setpriority("");
        }}
        className="h-100 flex flex-col flex-wrap  p-5"
      >
        <div className="flex flex-col gap-2">
          <h1 className="font-extrabold">Task title</h1>
          <input
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
            className="border-2 border-black font-bold p-2 h-12 w-200 mb-5"
            type="text"
            placeholder="Enter your task"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-extrabold">Task details</h1>
          <textarea
            value={details}
            onChange={(e) => {
              setDetails(e.target.value);
            }}
            className="border-2 border-black font-bold p-2 h-25 w-200 mb-5"
            type="text"
            placeholder="Enter your task details"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-extrabold">Task Priority</h1>
          <input
            value={priority}
            onChange={(e) => {
              setpriority(e.target.value);
            }}
            className="border-2 border-black font-bold p-2 h-12 w-200 mb-5"
            type="text"
            placeholder="Enter your priority"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-extrabold">Task deadlines</h1>
          <input
            value={date}
            onChange={(e) => {
              setdate(e.target.value);
            }}
            className="border-2 border-black font-bold p-2 h-12 w-100 mb-5"
            type="date"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-extrabold">Employ name</h1>
          <input
            value={username}
            onChange={(e) => {
              setusername(e.target.value);
            }}
            className="border-2 border-black font-bold p-2 h-12 w-100 mb-5"
            type="text"
            placeholder="Employ name whose to be assign this task"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-extrabold">Catagory</h1>
          <input
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            className="border-2 border-black font-bold p-2 h-12 w-100 mb-5"
            type="text"
            placeholder="dev,ui/ux,tester,....etc"
          />
        </div>
        <button className="text-white flex justify-center items-center font-bold h-12 w-100 rounded-2xl hover:bg-green-500 bg-green-600 active:scale-95">
          Assign task
        </button>
      </form>
    </div>
  );
};

export default Createtask;
