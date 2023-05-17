import { configureStore } from "@reduxjs/toolkit";
import graphSlice from "./graphSlice";

const store = configureStore({
  reducer: { file: graphSlice.reducer },
});

export default store;
