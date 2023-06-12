import { createSlice } from "@reduxjs/toolkit";
import { getCookie, setCookie, expCookie } from "../utils/cookie";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userId: "",
    id: "",
  },
  reducers: {
    getUser: (state) => {
      const [userId, id] = getCookie();
      state.userId = userId;
      state.id = id;
    },
    setUser: (state, action) => {
      state.userId = action.payload.userId;
      state.id = action.payload.id;
      setCookie([state.userId, state.id], 24);
    },
    deleteUser: (state) => {
      state.userId = "";
      state.id = "";
      expCookie();
    },
  },
});

export default userSlice;
