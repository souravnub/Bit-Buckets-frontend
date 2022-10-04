import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../api/axiosClient";

export const getAllBuckets = createAsyncThunk(
    "buckets/allBuckets",
    async (payload, { rejectWithValue }) => {
        try {
            const res = await axiosClient.get("buckets", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem(
                        "BitBucketsUserToken"
                    )}`,
                },
            });
            return res.data;
        } catch (err) {
            console.log(err);
            const { message } = err.response.data;
            return rejectWithValue({ message });
        }
    }
);
