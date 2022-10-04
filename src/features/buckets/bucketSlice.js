import { createSlice } from "@reduxjs/toolkit";
import { getAllBuckets } from "./bucketActions";

const initialState = {
    bucketCount: 0,
    buckets: [],
    isLoading: false,
    isError: false,
    error: null,
};
const BucketSlice = createSlice({
    name: "buckets",
    initialState,
    extraReducers: {
        [getAllBuckets.fulfilled]: (state, { payload }) => {
            state.buckets = payload.buckets;
            state.bucketCount = payload.nbHits;
            state.isLoading = false;
            state.isError = false;
        },
        [getAllBuckets.pending]: (state) => {
            state.isLoading = true;
            state.isError = false;
        },
        [getAllBuckets.rejected]: (state, { payload }) => {
            state.isError = true;
            state.isLoading = false;
            state.error = payload.message;
            state.bucketCount = 0;
        },
    },
});

export default BucketSlice.reducer;
