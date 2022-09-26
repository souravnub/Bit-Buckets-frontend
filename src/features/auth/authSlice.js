import { createSlice } from "@reduxjs/toolkit";
import showToast from "../../utils/showToast";
import { getUserInfo, loginUser, registerUser } from "./authActions";

const initialState = {
    // token : localStorage.getItem('BitBucketsUserToken') || null
    token: localStorage.getItem("BitBucketsUserToken") || "sdf",
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
    reducers: {
        logout: (state) => {
            // if token is not present => already logged out ,,hence cannot logout again
            if (!state.token) {
                showToast("error", "Unable to perform logout");
            } else {
                showToast("success", "Logged out successfully");
                state.user = {};
                state.token = null;
                localStorage.removeItem("BitBucketsUserToken");
            }
        },
    },
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
        [getUserInfo.pending]: (state) => {
            state.isLoading = true;
            state.isError = false;
        },
        [getUserInfo.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.isError = false;

            state.user = payload.user;
            state.message = payload.message;
        },
        [getUserInfo.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.isError = true;
            state.error = payload.message;
        },
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
