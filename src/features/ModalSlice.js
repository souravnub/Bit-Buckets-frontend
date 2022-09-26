import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isMainPageModalOpen: false,
    isAccountSettingsModalOpen: false,
};

const modalSlice = createSlice({
    name: "modals",
    initialState,
    reducers: {
        toggleMainPageModal: (state, { payload }) => {
            switch (payload) {
                case "open":
                    state.isMainPageModalOpen = true;
                    break;
                case "close":
                    state.isMainPageModalOpen = false;
                    break;
                default:
                    break;
            }
        },
        toggleAccountSettingsModal: (state, { payload }) => {
            switch (payload) {
                case "open":
                    state.isAccountSettingsModalOpen = true;
                    break;
                case "close":
                    state.isAccountSettingsModalOpen = false;
                    break;
                default:
                    break;
            }
        },
    },
});

export default modalSlice.reducer;
export const { toggleMainPageModal, toggleAccountSettingsModal } =
    modalSlice.actions;
