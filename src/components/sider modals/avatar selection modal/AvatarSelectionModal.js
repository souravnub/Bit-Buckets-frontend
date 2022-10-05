import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoIosArrowBack } from "react-icons/io";
import SliderModal from "../../slider modal/SliderModal";
import styled from "styled-components";
import { avatarImages } from "../../../utils/avatarImageSources";
import { AvatarsContainer } from "../../styled/avatarUtils.styled";
import SelectAvatarBtn from "../../SelectAvatarBtn";
import { useState } from "react";
import { toggleAvatarSelectionModal } from "../../../features/ModalSlice";

const AvatarSelectionModal = ({ onSelect, activeAvatar }) => {
    const { isAvatarSelectionModalOpen: isModalOpen } = useSelector(
        (store) => store.modals
    );
    const dispatch = useDispatch();
    const { themeProps } = useSelector((store) => store.theme);
    const [selectedAvatar, setSelectedAvatar] = useState(activeAvatar);

    return (
        <SliderModal
            isModalOpen={isModalOpen}
            zIndex={4}
            draggable={false}
            defaultHeight="max-content"
            onClose={() => dispatch(toggleAvatarSelectionModal("close"))}>
            <AvatarsContainer
                style={{
                    padding: themeProps.padding_md,
                    paddingBlockEnd: themeProps.padding_xl,
                }}>
                {/* avatar btn will be a component not a styled component */}

                {avatarImages.map((img) => {
                    return (
                        <SelectAvatarBtn
                            key={img.id}
                            avatarImgSrc={img.src}
                            isSelected={img.src === selectedAvatar}
                            onClick={() => {
                                setSelectedAvatar(img.src);
                                onSelect(img.src);
                            }}
                        />
                    );
                })}
            </AvatarsContainer>
        </SliderModal>
    );
};

export default AvatarSelectionModal;
