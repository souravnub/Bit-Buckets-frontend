import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { TextFaded } from "../../styled/typography.styled";
import { MdDone } from "react-icons/md";
import { AccountSetttingsModalHeadContainer } from "./AccountSettingsModalStyles";
import { useDispatch, useSelector } from "react-redux";
import { toggleAccountSettingsModal } from "../../../features/ModalSlice";
import LoadingButton from "../../buttons/LoadingButton";

const AccountSettingsModalHead = ({ handleUpdateInfo }) => {
    const dispatch = useDispatch();
    const { isLoading } = useSelector((store) => store.auth);
    return (
        <AccountSetttingsModalHeadContainer>
            <button
                onClick={() => dispatch(toggleAccountSettingsModal("close"))}>
                <IoIosArrowBack />
            </button>

            <TextFaded>Edit Profile</TextFaded>

            <LoadingButton isLoading={isLoading} onClick={handleUpdateInfo}>
                <MdDone />
            </LoadingButton>
        </AccountSetttingsModalHeadContainer>
    );
};

export default AccountSettingsModalHead;
