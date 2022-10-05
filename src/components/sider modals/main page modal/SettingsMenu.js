import React from "react";
import { FaUserEdit } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { ImLink, ImKey } from "react-icons/im";
import { CgEditContrast } from "react-icons/cg";
import { BsFillBucketFill } from "react-icons/bs";
import {
    MainSettingOptionsContainer,
    SettingOptionButton,
    SettingOptionLink,
    ThemeToggleSettingOptionDiv,
} from "./MainPageModalStyles";
import { toggleAccountSettingsModal } from "../../../features/ModalSlice";
import { useDispatch } from "react-redux";
import ThemeToggleButton from "../../buttons/ThemeToggleButton";
import { invertTheme } from "../../../features/themeSlice";

const settingOptions = [
    {
        name: "Edit Profile",
        icon: <FaUserEdit />,
        type: "button",
        onClick: (dispatch) => {
            dispatch(toggleAccountSettingsModal("open"));
        },
    },
    {
        name: "Manage Buckets",
        icon: <BsFillBucketFill />,
        type: "link",
        to: "/buckets",
    },
    {
        name: "Accessible Buckets",
        icon: <ImKey />,
        type: "button",
        // on click show modal with accessible buckets
    },
    {
        name: "Linked Users",
        icon: <ImLink />,
        type: "link",
        to: "/users/linked",
    },
];

const SettingsMenu = () => {
    const dispatch = useDispatch();
    return (
        <MainSettingOptionsContainer>
            {settingOptions.map((option) => {
                const { type, name, icon, to, onClick } = option;

                return type === "button" ? (
                    <SettingOptionButton
                        key={name}
                        onClick={() => onClick(dispatch)}>
                        <div>{icon}</div>
                        <span>{name}</span>
                        <MdKeyboardArrowRight />
                    </SettingOptionButton>
                ) : (
                    <SettingOptionLink key={name} to={to}>
                        <div>{icon}</div>
                        <span>{name}</span>
                        <MdKeyboardArrowRight />
                    </SettingOptionLink>
                );
            })}
            <ThemeToggleSettingOptionDiv>
                <div>
                    <CgEditContrast />
                </div>
                <span>Theme</span>

                <ThemeToggleButton />
            </ThemeToggleSettingOptionDiv>
        </MainSettingOptionsContainer>
    );
};

export default SettingsMenu;
