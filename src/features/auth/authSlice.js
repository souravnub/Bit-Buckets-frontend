import { createSlice } from "@reduxjs/toolkit";
import showToast from "../../utils/showToast";
import { loginUser, registerUser } from "./authActions";

const initialState = {
    token: localStorage.getItem("BitBucketsUserToken") || null,
    user: {},
    isError: false,
    message: null,
    errorsArr: [], // errors for each field (map over them and show toast)
    errorFields: [], // fields which contains error
    isLoading: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
        [registerUser.pending]: (state) => {
            state.isLoading = true;
            state.isError = false;
            state.isDuplicateEmailError = false;
        },
        [registerUser.fulfilled]: (state, { payload }) => {
            showToast("success", payload.message);
            localStorage.setItem("BitBucketsUserToken", payload.token);

            state.isLoading = false;
            state.isError = false;

            state.message = payload.message;
            state.token = payload.token;
        },
        [registerUser.rejected]: (state, { payload }) => {
            state.isError = true;
            state.isLoading = false;
            state.message = payload.message;
            state.errorFields = payload.errorFields;
            state.errorsArr = payload.errorsArr;
        },
        [loginUser.pending]: (state) => {
            state.isLoading = true;
            state.isError = false;
        },
        [loginUser.fulfilled]: (state, { payload }) => {
            showToast("success", payload.message);
            localStorage.setItem("BitBucketsUserToken", payload.token);

            state.isLoading = false;
            state.isError = false;

            state.message = payload.message;
            state.token = payload.token;
        },
        [loginUser.rejected]: (state, { payload }) => {
            state.isError = true;
            state.isLoading = false;
            state.message = payload.message;
            state.errorFields = payload.errorFields;
            state.errorsArr = payload.errorsArr;
        },
    },
});

export default authSlice.reducer;
