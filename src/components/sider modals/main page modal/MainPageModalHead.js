import React from "react";
import { HiHashtag } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleAccountSettingsModal } from "../../../features/ModalSlice";
import { Avatar } from "../../styled/avatarUtils.styled";
import {
    HeadContainer,
    UserDetailsContainer,
    UserInfoContainer,
} from "./modalHeadStyles";

const MainPageModalHead = () => {
    const { user } = useSelector((store) => store.auth);
    const dispatch = useDispatch();

    return (
        <HeadContainer>
            <UserInfoContainer>
                <Avatar
                    src={
                        user.profileImg ||
                        "https://res.cloudinary.com/sourav-cloudinary-account/image/upload/v1662185207/Bit-Buckets/avatar-1.png"
                    }
                />
                <UserDetailsContainer>
                    <h5>{user.userName || "sourav"}</h5>
                    <span>
                        <HiHashtag />
                        {user.userRef || 123}
                    </span>
                </UserDetailsContainer>
            </UserInfoContainer>

            <button
                onClick={() => dispatch(toggleAccountSettingsModal("open"))}>
                <IoSettingsOutline />
            </button>
        </HeadContainer>
    );
};

export default MainPageModalHead;
