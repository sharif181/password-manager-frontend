import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userSerive from "../../services/auth-service";

const token = localStorage.getItem("accessToken");
const initialState = {
  isLoggin: token ? true : false,
  accessToken: token ? token : null,
};

export const fetchToken = createAsyncThunk("auth/fetchToken", async (data) => {
  const token = await userSerive.getToken(data);
  return token;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state) => {
      state.isLoggin = false;
      state.accessToken = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchToken.pending, (state) => {
        state.isLoggin = false;
        state.accessToken = null;
      })
      .addCase(fetchToken.fulfilled, (state, action) => {
        state.isLoggin = true;
        state.accessToken = action.payload;
      })
      .addCase(fetchToken.rejected, (state) => {
        state.accessToken = null;
        state.isLoggin = false;
      });
  },
});

export default authSlice.reducer;

export const { setToken } = authSlice.actions;
