import { createSlice } from "@reduxjs/toolkit";
import { getCookie, setCookie, expCookie } from "../utils/cookie";

const userSlice = createSlice({
  name: "user",
  initialState: {
    id: "",
    uuid: "",
  },
  reducers: {
    getUser: (state) => {
      const [id, uuid] = getCookie() || ["", ""];
      state.id = id;
      state.uuid = uuid;
    },
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.uuid = action.payload.uuid;
      setCookie([id, uuid], 24);
    },
    deleteUser: (state) => {
      state.id = "";
      state.uuid = "";
      expCookie();
    },
  },
});

export default userSlice;
