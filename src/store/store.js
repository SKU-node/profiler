import { configureStore } from "@reduxjs/toolkit";
import graphSlice from "./graphSlice";

const store = configureStore({
  reducer: { graph: graphSlice.reducer },
});

export default store;
