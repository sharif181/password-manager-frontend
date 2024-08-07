import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import passwordServices from "../../services/password-services";

const initialState = {
  isLoading: false,
  isError: false,
  error: null,
  passwords: [],
};

export const fetchPassword = createAsyncThunk(
  "password/fetchPassword",
  async () => {
    const passwords = await passwordServices.getAllPassword();
    return passwords;
  }
);

const passwordSlice = createSlice({
  name: "password",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPassword.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.passwords = [];
        state.error = null;
      })
      .addCase(fetchPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.passwords = action.payload;
        state.error = null;
        state.isError = false;
      })
      .addCase(fetchPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.passwords = [];
        state.error = action.payload;
      });
  },
});

export default passwordSlice.reducer;
