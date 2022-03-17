import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    loggedIn: false,
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setRegisteredAccount: (state, action) => {
      state.registeredAccount = action.payload;
    },
    setLoggedIn: (state, action) => {
      state.loggedIn = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserData, setLoggedIn, setRegisteredAccount } = userSlice.actions;

export default userSlice.reducer;
