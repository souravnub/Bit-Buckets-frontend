import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./features/auth/authSlice";
import ModalSliceReducer from "./features/ModalSlice";
import themeSliceReducer from "./features/themeSlice";

const store = configureStore({
    reducer: {
        theme: themeSliceReducer,
        auth: authSliceReducer,
        modals: ModalSliceReducer,
    },
});

export default store;
