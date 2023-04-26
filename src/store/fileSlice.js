import { createSlice } from "@reduxjs/toolkit";

const fileSlice = createSlice({
  name: "file",
  initialState: {
    file: "",
  },
  reducers: {
    setFile: (state, action) => {
      state.file = action.payload;
    },
  },
});

export default fileSlice;
