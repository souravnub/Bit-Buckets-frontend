import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { toggleAcccountInfoModal } from "../../../features/ModalSlice";
import SliderModal from "../../slider modal/SliderModal";
import { Heading, TextFaded } from "../../styled/typography.styled";
import { AccountInfoModalHeadContainer } from "./accountInfoModalStyles";

const AccountInfoModalHead = () => {
    const dispatch = useDispatch();

    return (
        <AccountInfoModalHeadContainer>
            <button onClick={() => dispatch(toggleAcccountInfoModal("close"))}>
                <IoIosArrowBack />
            </button>

            <TextFaded>Account info</TextFaded>
        </AccountInfoModalHeadContainer>
    );
};

const AccountInfoModal = () => {
    const { isAccountInfoModalOpen: isModalOpen } = useSelector(
        (store) => store.modals.modalStates
    );
    const dispatch = useDispatch();

    return (
        <SliderModal
            isModalOpen={isModalOpen}
            zIndex={2}
            onClose={() => {
                if (isModalOpen) {
                    dispatch(toggleAcccountInfoModal("close"));
                }
            }}
            headContent={<AccountInfoModalHead />}>
            <Heading>account info</Heading>
        </SliderModal>
    );
};

export default AccountInfoModal;
