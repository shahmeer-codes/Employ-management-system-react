import { configureStore } from "@reduxjs/toolkit";
import data from "./dataslice";
const store = configureStore({
  reducer: {
    store: data,
  },
});
export default store;
