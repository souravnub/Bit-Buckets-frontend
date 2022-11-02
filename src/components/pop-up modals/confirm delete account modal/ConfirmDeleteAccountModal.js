import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "../../../features/auth/authActions";
import {
    closeAllModals,
    toggleConfirmDeleteAccountModal,
} from "../../../features/ModalSlice";
import { useGetCurrentMedia } from "../../../utils/getCurrentMedia";
import LoadingPrimaryButton from "../../buttons/LoadingPrimaryButton";
import PopUpModal from "../../pop-up modal/PopUpModal";
import { PrimaryBtn } from "../../styled/button.styled";
import { InputField, InputFieldContainer } from "../../styled/input.styled";
import { ConfirmDeleteAccountModalBody } from "./ConfirmDeleteAccountModalStyled";

const ConfirmDeleteAccountModal = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const currentMedia = useGetCurrentMedia();

    const { userName } = useSelector((store) => store.auth.user);
    const { isLoading } = useSelector((store) => store.auth);

    const inputRef = useRef();
    const textConfirmationInputRef = useRef();
    const [userNameConfirmationVal, setUserNameConfirmationVal] = useState("");
    const [isUserNameError, setIsUserNameError] = useState(false);

    const [textConfirmationVal, setTextConfirmationVal] = useState("");
    const [isTextConfirmationValError, setIsTextConfirmationValError] =
        useState(false);

    const handleDeleteAccount = (e) => {
        e.preventDefault();
        if (inputRef.current.value !== userName) {
            setIsUserNameError(true);
            inputRef.current.focus();
            return;
        }
        if (textConfirmationVal !== "delete my account") {
            setIsTextConfirmationValError(true);
            textConfirmationInputRef.current.focus();
            return;
        }
        dispatch(deleteUser());
        dispatch(closeAllModals());
        navigate("/");
    };

    return (
        <PopUpModal
            title="Are you sure?"
            showHeadBg={true}
            onClose={() => dispatch(toggleConfirmDeleteAccountModal("close"))}>
            <ConfirmDeleteAccountModalBody>
                <p>
                    This action cannot be undone. This will permanently delete
                    your account, leading to removal of all the data related to
                    the buckets and items.
                </p>
                <form onSubmit={handleDeleteAccount}>
                    <InputFieldContainer>
                        <label htmlFor="userNameConfirmation">
                            Please type you username :
                        </label>
                        <InputField
                            id="userNameConfirmation"
                            ref={inputRef}
                            onChange={(e) => {
                                setIsUserNameError(false);
                                setUserNameConfirmationVal(e.target.value);
                            }}
                            type="text"
                            isError={isUserNameError}
                        />
                    </InputFieldContainer>

                    <InputFieldContainer>
                        <label htmlFor="textConfirmation">
                            type <span>delete my account</span> to confirm :
                        </label>
                        <InputField
                            ref={textConfirmationInputRef}
                            id="textConfirmation"
                            onChange={(e) => {
                                setIsTextConfirmationValError(false);
                                setTextConfirmationVal(e.target.value);
                            }}
                            type="text"
                            isError={isTextConfirmationValError}
                        />
                    </InputFieldContainer>

                    <LoadingPrimaryButton
                        isLoading={isLoading}
                        disabled={userNameConfirmationVal.length <= 0}>
                        {currentMedia === "tablet" || currentMedia === "mobile"
                            ? "Delete Account"
                            : "I understand the consequences of this action"}
                    </LoadingPrimaryButton>
                </form>
            </ConfirmDeleteAccountModalBody>
        </PopUpModal>
    );
};
export default ConfirmDeleteAccountModal;
