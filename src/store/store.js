import { configureStore } from "@reduxjs/toolkit";
import fileSlice from "./fileSlice";

const store = configureStore({
  reducer: { file: fileSlice.reducer },
});

export default store;
