import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleAccountSettingsModal } from "../../features/ModalSlice";
import SliderModal from "../slider modal/SliderModal";
import { Heading } from "../styled/typography.styled";

const AccountSettingsModal = () => {
    const { isAccountSettingsModalOpen: isModalOpen } = useSelector(
        (store) => store.modals
    );
    const dispatch = useDispatch();

    return (
        <SliderModal
            isModalOpen={isModalOpen}
            zIndex={2}
            onClose={() => {
                if (isModalOpen) {
                    dispatch(toggleAccountSettingsModal("close"));
                }
            }}>
            <Heading>user info modal</Heading>
        </SliderModal>
    );
};

export default AccountSettingsModal;
