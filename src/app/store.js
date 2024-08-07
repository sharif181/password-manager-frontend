import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import passwordReducer from "../features/password/passwordSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    passwords: passwordReducer,
  },
});

export default store;
