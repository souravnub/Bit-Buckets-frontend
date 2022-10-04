import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isMainPageModalOpen: false,
    isAccountInfoModalOpen: false,
    isAccountSettingsModalOpen: false,
};

const toggleModalState = ({ ref, state, payload }) => {
    if (payload === "open") {
        state[ref] = true;
    } else {
        state[ref] = false;
    }
};

const modalSlice = createSlice({
    name: "modals",
    initialState,
    reducers: {
        closeAllModals: (state) => {
            for (const key in state) {
                state[key] = false;
            }
        },
        toggleMainPageModal: (state, { payload }) => {
            toggleModalState({ ref: "isMainPageModalOpen", state, payload });
        },
        toggleAccountSettingsModal: (state, { payload }) => {
            toggleModalState({
                ref: "isAccountSettingsModalOpen",
                state,
                payload,
            });
        },
        toggleAcccountInfoModal: (state, { payload }) => {
            toggleModalState({ ref: "isAccountInfoModalOpen", state, payload });
        },
    },
});

export default modalSlice.reducer;
export const {
    toggleMainPageModal,
    toggleAccountSettingsModal,
    toggleAcccountInfoModal,
    closeAllModals,
} = modalSlice.actions;
