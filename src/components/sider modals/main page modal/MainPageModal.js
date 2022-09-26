import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMainPageModal } from "../../../features/ModalSlice";
import SliderModal from "../../slider modal/SliderModal";
import { Heading } from "../../styled/typography.styled";
import MainPageModalHead from "./MainPageModalHead";

const MainPageModal = () => {
    const { isMainPageModalOpen: isModalOpen } = useSelector(
        (store) => store.modals
    );

    const dispatch = useDispatch();

    return (
        <SliderModal
            isModalOpen={isModalOpen}
            zIndex={1}
            onClose={() => {
                if (isModalOpen) {
                    dispatch(toggleMainPageModal("close"));
                }
            }}
            headContent={<MainPageModalHead />}>
            <Heading>main page modal</Heading>
        </SliderModal>
    );
};

export default MainPageModal;
