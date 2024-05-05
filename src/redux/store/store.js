import { configureStore } from "@reduxjs/toolkit";
import jobsSlice from "../reducers/jobSlice";

const store = configureStore({
  reducer: {
    jobs: jobsSlice,
  },
});

export default store;
