import { configureStore } from "@reduxjs/toolkit";
import toastReducer from "./reducers/toasts";
import userReducer from "./reducers/user";

export default configureStore({
  reducer: {
    toast: toastReducer,
    user: userReducer,
  },
});
