import { createSlice } from "@reduxjs/toolkit";

const graphSlice = createSlice({
  name: "graph",
  initialState: {
    data: [],
  },
  reducers: {
    setGraph: (state, action) => {
      state.data = action.payload;
    },
  },
});

export default graphSlice;
