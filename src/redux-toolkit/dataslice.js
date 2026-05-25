import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  admin: {
    name: "Administrator",
    email: "admin@example.com",
    password: "123",
  },
  employ: [
    {
      name: "Shahmeer",
      id: 1,
      email: "shahmeer@example.com",
      password: "123",
      totaltask: 0,
      acceptedtask: 0,
      completedtask: 0,
      rejectedtask: 0,
      tasks: [], // start empty
    },
    {
      name: "Ali",
      id: 2,
      email: "ali@example.com",
      password: "123",
      totaltask: 0,
      acceptedtask: 0,
      completedtask: 0,
      rejectedtask: 0,
      tasks: [], // start empty
    },
    {
      name: "Zara",
      id: 3,
      email: "zara@example.com",
      password: "123",
      totaltask: 0,
      acceptedtask: 0,
      completedtask: 0,
      rejectedtask: 0,
      tasks: [], // start empty
    },
    {
      name: "Ahmed",
      id: 4,
      email: "ahmed@example.com",
      password: "123",
      totaltask: 0,
      acceptedtask: 0,
      completedtask: 0,
      rejectedtask: 0,
      tasks: [], // start empty
    },
    {
      name: "Sadia",
      id: 5,
      email: "sadia@example.com",
      password: "123",
      totaltask: 0,
      acceptedtask: 0,
      rejectedtask: 0,
      completedtask: 0,
      status: null,
      tasks: [], // start empty
    },
  ],
  admincreatedindex: [],
  admincreatedtaskindex: [],
  user: "Login",
  currentemployindex: null,
  theme: "light",
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setlocaldata: (state) => {
      localStorage.setItem("admin", JSON.stringify(state.admin));
      localStorage.setItem("employ", JSON.stringify(state.employ));
      localStorage.setItem("theme", state.theme);
    },
    getdata: (state) => {
      const adminData = localStorage.getItem("admin");
      const employData = localStorage.getItem("employ");
      const themeData = localStorage.getItem("theme");

      if (adminData) {
        state.admin = JSON.parse(adminData);
      }

      if (employData) {
        state.employ = JSON.parse(employData);
      }

      if (themeData) {
        state.theme = themeData;
      }
    },
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    createtask: (state, action) => {
      const employindex = state.employ.findIndex(
        (e) => e.name === action.payload.username,
      );
      if (employindex === -1) {
        console.error("Employee not found:", action.payload.username);
        return;
      }
      state.admincreatedindex.push(employindex);

      const newTaskIndex = state.employ[employindex].tasks.length;
      state.admincreatedtaskindex.push(newTaskIndex); // store index per employee
      console.log("details : ", newTaskIndex);

      state.employ[employindex].tasks.unshift({
        title: action.payload.title,
        details: action.payload.details,
        dateToBeCompleted: action.payload.date,
        category: action.payload.category,
        priority: action.payload.priority,
        status: "null",
      });
      state.employ[employindex].totaltask += 1;
    },
    completedtask: (state, action) => {
      const task = state.employ[state.currentemployindex].tasks[action.payload];

      if (task.status === "accepted") {
        task.status = "completed";

        state.employ[state.currentemployindex].completedtask += 1;
        state.employ[state.currentemployindex].acceptedtask -= 1;
      }
    },

    taskaccepted: (state, action) => {
      if (
        state.employ[state.currentemployindex].tasks[action.payload.taskid]
          .status == "null"
      ) {
        state.employ[state.currentemployindex].tasks[
          action.payload.taskid
        ].status = "accepted";
        state.employ[state.currentemployindex].acceptedtask += 1;
        state.employ[state.currentemployindex].totaltask -= 1;
      }
    },
    rejectedtask: (state, action) => {
      if (
        state.employ[state.currentemployindex].tasks[action.payload.taskid]
          .status == "null"
      ) {
        state.employ[state.currentemployindex].tasks[
          action.payload.taskid
        ].status = "rejected";
        state.employ[state.currentemployindex].rejectedtask += 1;
        state.employ[state.currentemployindex].totaltask -= 1;
      }
    },
    logout: (state) => {
      state.user = "login";
      state.currentemployindex = null;
    },
    authcheck: (state, action) => {
      // Admin login
      if (
        action.payload.username === state.admin.email &&
        action.payload.password === state.admin.password
      ) {
        state.user = "admin";
        return;
      }

      // Employee login
      state.currentemployindex = state.employ.findIndex(
        (e) =>
          e.email === action.payload.username &&
          e.password === action.payload.password,
      );

      if (state.currentemployindex >= 0) {
        state.user = "employ";
        return;
      }

      // Invalid login
      alert("❌ invalid username or password");
      state.user = "login";
    },
  },
});
export const {
  setlocaldata,
  getdata,
  authcheck,
  logout,
  createtask,
  taskaccepted,
  rejectedtask,
  completedtask,
  toggleTheme,
} = dataSlice.actions;
export default dataSlice.reducer;
