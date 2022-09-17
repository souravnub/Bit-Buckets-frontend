import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../api/axiosClient";

export const registerUser = createAsyncThunk(
    "auth/register",
    async (credentials, { rejectWithValue }) => {
        try {
            await axiosClient.post("/auth/register", credentials);
        } catch (err) {
            console.log(err);
            if (err.response.data.message) {
                rejectWithValue(err.response.data.message);
            } else {
                rejectWithValue(err.message);
            }
        }
    }
);
