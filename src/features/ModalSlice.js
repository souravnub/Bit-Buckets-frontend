import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modalStates: {
        isMainPageModalOpen: false,
        isAccountInfoModalOpen: false,
        isAccountSettingsModalOpen: false,
        isAvatarSelectionModalOpen: false,
        isConfirmDeleteAcocuntModalOpen: false,
    },
    modalOpeningStack: [],
};

const toggleModalState = ({ ref, state, payload }) => {
    if (payload === "open") {
        state.modalStates[ref] = true;
        state.modalOpeningStack.push(ref);
    } else {
        state.modalStates[ref] = false;
        state.modalOpeningStack = state.modalOpeningStack.filter(
            (modal) => modal !== ref
        );
    }
};

const modalSlice = createSlice({
    name: "modals",
    initialState,
    reducers: {
        closeAllModals: (state) => {
            for (const key in state.modalStates) {
                state.modalStates[key] = false;
            }
        },
        closeLatestModal: (state) => {
            const currentModalToggleRef =
                state.modalOpeningStack[state.modalOpeningStack.length - 1];

            if (currentModalToggleRef) {
                toggleModalState({
                    ref: currentModalToggleRef,
                    state,
                    payload: "close",
                });
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
        toggleAvatarSelectionModal: (state, { payload }) => {
            toggleModalState({
                ref: "isAvatarSelectionModalOpen",
                state,
                payload,
            });
        },
        toggleConfirmDeleteAccountModal: (state, { payload }) => {
            toggleModalState({
                ref: "isConfirmDeleteAcocuntModalOpen",
                state,
                payload,
            });
        },
    },
});

export default modalSlice.reducer;
export const {
    toggleMainPageModal,
    toggleAccountSettingsModal,
    toggleAcccountInfoModal,
    toggleAvatarSelectionModal,
    toggleConfirmDeleteAccountModal,
    closeAllModals,
    closeLatestModal,
} = modalSlice.actions;
