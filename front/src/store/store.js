import { configureStore } from "@reduxjs/toolkit";
import graphSlice from "./graphSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: { graph: graphSlice.reducer, user: userSlice.reducer },
});

export default store;
