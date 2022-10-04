import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleAccountSettingsModal } from "../../../features/ModalSlice";
import SliderModal from "../../slider modal/SliderModal";
import { Heading } from "../../styled/typography.styled";
import AccountSettingsModalHead from "./AccountSettingsModalHead";

const AccountSettingsModal = () => {
    const { isAccountSettingsModalOpen: isModalOpen } = useSelector(
        (store) => store.modals
    );
    const dispatch = useDispatch();

    return (
        <SliderModal
            showFull={true}
            isModalOpen={isModalOpen}
            zIndex={3}
            headContent={<AccountSettingsModalHead />}
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
