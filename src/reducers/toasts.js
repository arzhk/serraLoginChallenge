import { createSlice } from "@reduxjs/toolkit";

export const toastSlice = createSlice({
  name: "toast",
  initialState: {
    show: false,
    type: "",
    text: "",
  },
  reducers: {
    toggle: (state, action) => {
      state.show = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
    setText: (state, action) => {
      state.text = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggle, setType, setText } = toastSlice.actions;

export default toastSlice.reducer;
