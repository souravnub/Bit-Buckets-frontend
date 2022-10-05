import React, { useState } from "react";
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
} from "./AccountSettingsModalStyles";
import PasswordField from "../../PasswordField";
import AvatarSelectionModal from "../avatar selection modal/AvatarSelectionModal";

const AccountSettingsModal = () => {
    const {
        isAccountSettingsModalOpen: isModalOpen,
        isAvatarSelectionModalOpen,
    } = useSelector((store) => store.modals);
    const { user } = useSelector((store) => store.auth);
    const dispatch = useDispatch();

    const userNameRef = useRef();
    const emailRef = useRef();
    const newPasswordRef = useRef();

    const [selectedAvatar, setSelectedAvatar] = useState(user.profileImg);
    const [userName, setUserName] = useState(user.userName);
    const [email, setEmail] = useState(user.email);
    const [newPassword, setNewPassword] = useState("");

    const [isUserNameError, setIsUserNameError] = useState(false);
    const [isEmailError, setIsEmailError] = useState(false);
    const [isNewPasswordError, setIsNewPasswordError] = useState(false);

    const handleInputChange = (e) => {
        const value = e.target.value;

        switch (e.target.id) {
            case "userName":
                setIsUserNameError(false);
                return setUserName(value);

            case "email":
                setIsEmailError(false);
                return setEmail(value);

            case "password":
                setIsNewPasswordError(false);
                return setNewPassword(value);

            default:
                break;
        }
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
                headContent={<AccountSettingsModalHead />}
                onClose={() => {
                    if (isModalOpen) {
                        dispatch(toggleAccountSettingsModal("close"));
                    }
                }}>
                <EditProfileForm>
                    <ChangeAvatarContainer>
                        <Avatar src={selectedAvatar} alt="profile avatar" />
                        {/* show the avatars modal on btn click */}
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
                            style={
                                isUserNameError
                                    ? { borderColor: "#ad0000" }
                                    : {}
                            }
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
                            style={
                                isEmailError ? { borderColor: "#ad0000" } : {}
                            }
                        />
                    </InputFieldContainer>

                    {/* create a button to toggle whether user want to change the password or not like : +/settings_icon password then show the new password and confirm password fields else dont*/}

                    <InputFieldContainer>
                        <label htmlFor="newPassword">new password</label>
                        <div ref={newPasswordRef}>
                            <PasswordField
                                id="newPassword"
                                value={newPassword}
                                onChange={handleInputChange}
                                style={
                                    isNewPasswordError
                                        ? { borderColor: "#ad0000" }
                                        : {}
                                }
                            />
                        </div>
                    </InputFieldContainer>
                </EditProfileForm>
            </SliderModal>
        </>
    );
};

export default AccountSettingsModal;
