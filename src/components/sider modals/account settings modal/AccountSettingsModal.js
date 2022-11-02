import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    toggleAccountSettingsModal,
    toggleAvatarSelectionModal,
} from "../../../features/ModalSlice";
import SliderModal from "../../slider modal/SliderModal";
import { Avatar } from "../../styled/avatarUtils.styled";
import { AnimatePresence, motion } from "framer-motion";
import { MdChangeCircle } from "react-icons/md";
import AccountSettingsModalHead from "./AccountSettingsModalHead";
import { InputField, InputFieldContainer } from "../../styled/input.styled";
import { useRef } from "react";
import {
    ChangeAvatarContainer,
    EditProfileForm,
    ChangePasswordContainer,
    OldPasswordFormContainer,
} from "./AccountSettingsModalStyles";
import { IoIosArrowForward, IoIosSend } from "react-icons/io";
import PasswordField from "../../PasswordField";
import AvatarSelectionModal from "../avatar selection modal/AvatarSelectionModal";
import LoadingButton from "../../buttons/LoadingButton";
import axiosClient from "../../../api/axiosClient";
import showToast from "../../../utils/showToast";
import { updateUserInfo } from "../../../features/auth/authActions";
import { clearAuthErrors } from "../../../features/auth/authSlice";

const ChangePasswordComponent = ({
    wannaToChangePassword,
    setWannaToChangePassword,
    setConfirmedPass,
    setNewPass,
    newPass,
    confirmedPass,
    isNewPassError,
    isConfirmedPassError,
}) => {
    const { email: userEmail } = useSelector((store) => store.auth.user);

    const oldPasswordRef = useRef();
    const confirmNewPassRef = useRef();

    const [oldPassword, setOldPassword] = useState("");
    const [isOldPasswordError, setIsOldPasswordError] = useState(false);

    const [isVerifyingUser, setIsVerifyingUser] = useState(false);
    const [isUserVerified, setIsUserVerified] = useState(false);

    useEffect(() => {
        if (isOldPasswordError) {
            const oldPasswordInput = oldPasswordRef.current?.querySelector(
                'input[type="password"]'
            );
            oldPasswordInput?.focus();
        }
    }, [isOldPasswordError]);

    const handleVerifyPassword = async (e) => {
        e.preventDefault();
        if (!oldPassword) {
            setIsOldPasswordError(true);
            return showToast("error", "password must be provided");
        }
        try {
            setIsVerifyingUser(true);
            await axiosClient.post("/auth/login", {
                email: userEmail,
                password: oldPassword,
            });
            setIsUserVerified(true);
            setIsVerifyingUser(false);
        } catch (err) {
            setIsVerifyingUser(false);
            setIsOldPasswordError(true);
            showToast(
                "error",
                err.response.data.message || "Some unknown error occured"
            );
        }
    };

    return (
        <ChangePasswordContainer>
            <button
                type="button"
                onClick={() => setWannaToChangePassword((prev) => !prev)}>
                change password
                <IoIosArrowForward
                    style={{
                        transform: wannaToChangePassword ? "rotate(90deg)" : "",
                        transition: "transform 200ms ease-in-out",
                    }}
                />
            </button>

            {wannaToChangePassword && !isUserVerified && (
                <OldPasswordFormContainer>
                    <InputFieldContainer>
                        <label htmlFor="oldPassword">old password</label>
                        <div ref={oldPasswordRef}>
                            <PasswordField
                                id="oldPassword"
                                value={oldPassword}
                                onChange={(e) => {
                                    setOldPassword(e.target.value);
                                    setIsOldPasswordError(false);
                                }}
                                isError={isOldPasswordError}
                            />
                            <LoadingButton
                                onClick={handleVerifyPassword}
                                type="button"
                                isLoading={isVerifyingUser}>
                                <IoIosSend />
                            </LoadingButton>
                        </div>
                    </InputFieldContainer>
                </OldPasswordFormContainer>
            )}

            {wannaToChangePassword && isUserVerified && (
                <>
                    <InputFieldContainer>
                        <label htmlFor="newPassword">new password</label>

                        <PasswordField
                            id="newPassword"
                            value={newPass}
                            isError={isNewPassError}
                            onChange={(e) => {
                                setNewPass(e.target.value);
                            }}
                        />
                    </InputFieldContainer>

                    <InputFieldContainer>
                        <label htmlFor="confirmNewPass">confirm password</label>
                        <div ref={confirmNewPassRef}>
                            <PasswordField
                                id="confirmNewPass"
                                value={confirmedPass}
                                isError={isConfirmedPassError}
                                onChange={(e) => {
                                    setConfirmedPass(e.target.value);
                                }}
                            />
                        </div>
                    </InputFieldContainer>
                </>
            )}
        </ChangePasswordContainer>
    );
};

const AccountSettingsModal = () => {
    const {
        isAccountSettingsModalOpen: isModalOpen,
        isAvatarSelectionModalOpen,
    } = useSelector((store) => store.modals);
    const { user, isError, errorsArr, errorFields, isLoading } = useSelector(
        (store) => store.auth
    );
    const dispatch = useDispatch();

    const userNameRef = useRef();
    const emailRef = useRef();

    const [wannaToChangePassword, setWannaToChangePassword] = useState(false);

    const [selectedAvatar, setSelectedAvatar] = useState(user.profileImg);
    const [userName, setUserName] = useState(user.userName);
    const [email, setEmail] = useState(user.email);

    const [newPass, setNewPass] = useState("");
    const [confirmedPass, setConfirmedPass] = useState("");

    const [isUserNameError, setIsUserNameError] = useState(false);
    const [isEmailError, setIsEmailError] = useState(false);
    const [isNewPassError, setIsNewPassError] = useState(false);
    const [isConfirmedPassError, setIsConfirmedPassError] = useState(false);

    useEffect(() => {
        if (!isLoading && isError) {
            errorFields.forEach((field) => {
                switch (field) {
                    case "email":
                        return setIsEmailError(true);
                    case "userName":
                        return setIsUserNameError(true);
                    default:
                        break;
                }
            });
            errorsArr.forEach((err) => {
                showToast("error", err);
            });
        }
        // after show errors clear all the errors in the state ... because if not done so then the error toasts will be shown again because of the type of setup made above..!
        dispatch(clearAuthErrors());
    }, [isLoading]);

    useEffect(() => {
        setIsNewPassError(false);
        setIsConfirmedPassError(false);
    }, [newPass, confirmedPass]);

    const handleInputChange = (e) => {
        const value = e.target.value;

        switch (e.target.id) {
            case "userName":
                setIsUserNameError(false);
                return setUserName(value);

            case "email":
                setIsEmailError(false);
                return setEmail(value);

            default:
                break;
        }
    };

    const handleUpdateInfo = (e) => {
        e.preventDefault();
        let newUserObj = {};

        if (email !== user.email) {
            newUserObj.email = email;
        }
        if (userName !== user.userName) {
            newUserObj.userName = userName;
        }
        if (selectedAvatar !== user.profileImg) {
            newUserObj.profileImg = selectedAvatar;
        }

        if (!wannaToChangePassword) {
            // checking if some change is made or not
            if (
                email === user.email &&
                selectedAvatar === user.profileImg &&
                userName === user.userName
            ) {
                return showToast(
                    "error",
                    "Some change should me made to update info"
                );
            }
            return dispatch(updateUserInfo(newUserObj));
        }

        if (!newPass) {
            setIsNewPassError(true);
            showToast("error", "Must provide a new password");
            return;
        }

        if (newPass !== confirmedPass) {
            setIsNewPassError(true);
            setIsConfirmedPassError(true);
            showToast("error", "Passwords don't match");
            return;
        }

        newUserObj.password = newPass;
        return dispatch(updateUserInfo(newUserObj));
    };

    return (
        <>
            <AnimatePresence>
                {isAvatarSelectionModalOpen && (
                    <AvatarSelectionModal
                        onSelect={setSelectedAvatar}
                        activeAvatar={selectedAvatar}
                    />
                )}
            </AnimatePresence>
            <SliderModal
                showFull={true}
                isModalOpen={isModalOpen}
                zIndex={3}
                headContent={
                    <AccountSettingsModalHead
                        handleUpdateInfo={handleUpdateInfo}
                    />
                }
                onClose={() => {
                    if (isModalOpen) {
                        dispatch(toggleAccountSettingsModal("close"));
                    }
                }}>
                <EditProfileForm>
                    <ChangeAvatarContainer>
                        <Avatar src={selectedAvatar} alt="profile avatar" />
                        <button
                            type="button"
                            aria-label="change avatar"
                            onClick={() =>
                                dispatch(toggleAvatarSelectionModal("open"))
                            }>
                            <MdChangeCircle />
                        </button>
                    </ChangeAvatarContainer>

                    <InputFieldContainer>
                        <label htmlFor="username">username</label>
                        <InputField
                            ref={userNameRef}
                            id="userName"
                            type="text"
                            onChange={handleInputChange}
                            value={userName}
                            isError={isUserNameError}
                        />
                    </InputFieldContainer>

                    <InputFieldContainer>
                        <label htmlFor="email">email</label>
                        <InputField
                            ref={emailRef}
                            id="email"
                            type="email"
                            onChange={handleInputChange}
                            value={email}
                            isError={isEmailError}
                        />
                    </InputFieldContainer>

                    <ChangePasswordComponent
                        setWannaToChangePassword={setWannaToChangePassword}
                        wannaToChangePassword={wannaToChangePassword}
                        newPass={newPass}
                        confirmedPass={confirmedPass}
                        setNewPass={setNewPass}
                        setConfirmedPass={setConfirmedPass}
                        isNewPassError={isNewPassError}
                        isConfirmedPassError={isConfirmedPassError}
                    />
                </EditProfileForm>
            </SliderModal>
        </>
    );
};

export default AccountSettingsModal;
