import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userSerive from "../../services/auth-service";

const initialState = {
  isLoggin: false,
  accessToken: null,
};

export const fetchToken = createAsyncThunk("auth/fetchToken", async (data) => {
  const token = await userSerive.getToken(data);
  return token;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
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
