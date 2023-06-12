import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    id: "",
  },
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload;
    },
  },
});

export default userSlice;
