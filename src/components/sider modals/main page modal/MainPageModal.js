import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    closeAllModals,
    toggleMainPageModal,
} from "../../../features/ModalSlice";
import SliderModal from "../../slider modal/SliderModal";
import { PrimaryBtn } from "../../styled/button.styled";
import { TextFaded } from "../../styled/typography.styled";
import { IoPower } from "react-icons/io5";
import {
    MainPageModalContainer,
    MainProfileContainer,
    ProfileDetailsContainer,
    ProfileImgContainer,
} from "./MainPageModalStyles";
import { FcApproval } from "react-icons/fc";
import SettingsMenu from "./SettingsMenu";
import { logout } from "../../../features/auth/authSlice";
import { getDate } from "../../../utils/getDateFromISO";

const MainPageModal = () => {
    const { isMainPageModalOpen: isModalOpen } = useSelector(
        (store) => store.modals
    );
    const { user } = useSelector((store) => store.auth);
    const { bucketCount } = useSelector((store) => store.buckets);

    const dispatch = useDispatch();

    return (
        <SliderModal
            showSeperation={false}
            isModalOpen={isModalOpen}
            zIndex={1}
            onClose={() => {
                if (isModalOpen) {
                    dispatch(toggleMainPageModal("close"));
                }
            }}>
            <MainPageModalContainer>
                <MainProfileContainer>
                    <ProfileImgContainer>
                        <img src={user.profileImg} alt="profile avatar" />
                        <div>
                            <span>{user.userName}</span>
                            <TextFaded fontSize=".9rem" fontWeight={500}>
                                {user.email}
                            </TextFaded>
                            <span>
                                <FcApproval /> {getDate(user.createdAt)}
                            </span>
                        </div>
                    </ProfileImgContainer>
                    <ProfileDetailsContainer>
                        <div>
                            <span>{bucketCount}</span>
                            <TextFaded fontSize=".9rem">Buckets</TextFaded>
                        </div>

                        <div>
                            <span>{user.accessibleBuckets?.length}</span>
                            <TextFaded fontSize=".9rem">
                                Accessible Buckets
                            </TextFaded>
                        </div>

                        <div>
                            <span>{user.linkedUsers?.length}</span>
                            <TextFaded fontSize=".9rem">Linked Users</TextFaded>
                        </div>
                    </ProfileDetailsContainer>
                </MainProfileContainer>

                <SettingsMenu />

                <PrimaryBtn
                    onClick={() => {
                        dispatch(logout());
                        dispatch(closeAllModals());
                    }}>
                    Logout
                    <IoPower />
                </PrimaryBtn>
            </MainPageModalContainer>
        </SliderModal>
    );
};

export default MainPageModal;
