import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { TextFaded } from "../../styled/typography.styled";
import { MdDone } from "react-icons/md";
import { AccountSetttingsModalHeadContainer } from "./AccountSettingsModalStyles";
import { useDispatch } from "react-redux";
import { toggleAccountSettingsModal } from "../../../features/ModalSlice";
import LoadingButton from "../../buttons/LoadingButton";
import { useState } from "react";

const AccountSettingsModalHead = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    return (
        <AccountSetttingsModalHeadContainer>
            <button
                onClick={() => dispatch(toggleAccountSettingsModal("close"))}>
                <IoIosArrowBack />
            </button>

            <TextFaded>Edit Profile</TextFaded>

            <LoadingButton
                isLoading={isLoading}
                onClick={() => {
                    setIsLoading((prev) => !prev);
                    console.log("clickedsd");
                }}>
                <MdDone />
            </LoadingButton>
        </AccountSetttingsModalHeadContainer>
    );
};

export default AccountSettingsModalHead;
