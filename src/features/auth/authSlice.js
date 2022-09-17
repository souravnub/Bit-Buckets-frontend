import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./authActions";

const initialState = {
    token: null,
    user: {},
    isError: false,
    error: null,
    isLoading: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
        [registerUser.pending]: (state) => {
            state.isLoading = true;
            state.isError = false;
        },
        [registerUser.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.token = payload.token;
            state.isError = false;
        },
        [registerUser.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        },
    },
});

export default authSlice.reducer;
