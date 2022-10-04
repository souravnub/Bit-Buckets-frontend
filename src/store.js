import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./features/auth/authSlice";
import ModalSliceReducer from "./features/ModalSlice";
import themeSliceReducer from "./features/themeSlice";
import bucketSliceReducer from "./features/buckets/bucketSlice";

const store = configureStore({
    reducer: {
        theme: themeSliceReducer,
        auth: authSliceReducer,
        modals: ModalSliceReducer,
        buckets: bucketSliceReducer,
    },
});

export default store;
