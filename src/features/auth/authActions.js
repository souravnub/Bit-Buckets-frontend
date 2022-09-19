import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../api/axiosClient";

export const registerUser = createAsyncThunk(
    "auth/register",
    async (credentials, { rejectWithValue }) => {
        try {
            const res = await axiosClient.post("auth/register", credentials);
            return res.data;
        } catch (err) {
            console.log(err);
            const { message, errorsArr, errorFields } = err.response.data;
            if (errorsArr && errorFields && message) {
                return rejectWithValue({ message, errorsArr, errorFields });
            }
            return rejectWithValue({ message });
        }
    }
);

export const loginUser = createAsyncThunk(
    "auth/login",
    async (credentials, { rejectWithValue }) => {
        try {
            const res = await axiosClient.post("/auth/login", credentials);
            return res.data;
        } catch (err) {
            const { message, errorsArr, errorFields } = err.response.data;
            if (errorsArr && errorFields && message) {
                return rejectWithValue({ message, errorsArr, errorFields });
            }
            return rejectWithValue({ message });
        }
    }
);

export const getUserInfo = createAsyncThunk(
    "auth/user",
    async (props, { rejectWithValue, getState }) => {
        try {
            const { auth } = getState();
            const res = await axiosClient.get("/users/me", {
                headers: { Authorization: `Bearer ${auth.token}` },
            });
            return res.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);
