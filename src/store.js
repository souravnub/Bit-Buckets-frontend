import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import themeSlice from "./features/themeSlice";

const store = configureStore({
    reducer: {
        theme: themeSlice,
        auth: authSlice,
    },
});

export default store;
