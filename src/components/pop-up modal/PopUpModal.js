import React, { useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import FocusTrap from "../FocusTrap";
import { BodyOverlay } from "../slider modal/sliderModalStyles";
import {
    MainModalContainer,
    PopUpModalBody,
    PopUpModalHead,
} from "./PopUpModalStyled";

const PopUpModal = ({ title, onClose, children, showHeadBg }) => {
    const modalsStack = useSelector((store) => store.modals.modalStates);
    const { themeProps, currentTheme } = useSelector((store) => store.theme);
    let openModalsCount = 0;

    useEffect(() => {
        openModalsCount = modalsStack.length;
    }, [modalsStack]);

    return (
        <>
            <BodyOverlay
                onClick={onClose}
                key="popup-modal-body-overlay"
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 0.8,
                    zIndex:
                        openModalsCount === 0
                            ? 99999
                            : 99999 * openModalsCount * 0.9,
                    transition: {
                        duration: 0.3,
                        ease: "easeOut",
                    },
                }}
                exit={{
                    opacity: 0,
                    transition: { duration: 0.2, ease: "easeIn" },
                }}
                style={{
                    backgroundColor:
                        currentTheme === "dark"
                            ? themeProps.primary_400
                            : themeProps.primary_1000,
                }}
            />

            <MainModalContainer
                transition={{ type: "just", duration: 0.3 }}
                key="pop-up-modal"
                style={{
                    zIndex:
                        openModalsCount === 0 ? 99999 : 99999 * openModalsCount,
                }}
                initial={{ y: "-40%", x: "-50%", opacity: 0 }}
                animate={{ y: "-50%", x: "-50%", opacity: 1 }}
                exit={{ y: "-40%", x: "-50%", opacity: 0 }}>
                <FocusTrap>
                    <PopUpModalHead
                        style={
                            showHeadBg
                                ? { backgroundColor: themeProps.primary_200 }
                                : {}
                        }>
                        <span>{title}</span>

                        <button
                            onClick={onClose}
                            style={
                                showHeadBg
                                    ? {
                                          backgroundColor:
                                              themeProps.primary_400,
                                      }
                                    : {}
                            }>
                            <IoCloseOutline />
                        </button>
                    </PopUpModalHead>

                    <PopUpModalBody>{children}</PopUpModalBody>
                </FocusTrap>
            </MainModalContainer>
        </>
    );
};

export default PopUpModal;
