import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;

      state.userData = action.payload.userData; // or action.payload only bcz userData is same at name also
    },

    logout: (state) => {
      //this also can access action but there is no need of action so i have excluded it
      state.status = false;
      state.userData = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
