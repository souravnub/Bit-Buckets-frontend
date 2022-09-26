import React, { useEffect, useRef, useState } from "react";
import { BodyOverlay, Modal, ModalBody, ModalHead } from "./sliderModalStyles";
import { BsDashLg } from "react-icons/bs";
import { useSelector } from "react-redux";

const SliderModal = ({ children, onClose, showFull, zIndex, headContent }) => {
    const { themeProps } = useSelector((store) => store.theme);
    const modalStates = useSelector((store) => store.modals);

    const [isFullModalShown, setIsFullModalShown] = useState(showFull || false);
    const [openedModalsCount, setOpenModalsCount] = useState(0);

    const handleShowFullModal = (event, info) => {
        const offsetY = info.offset.y;
        if (offsetY <= -40 && !isFullModalShown) {
            setIsFullModalShown(true);
        } else if (isFullModalShown && offsetY >= 10) {
            setIsFullModalShown(false);
        }
    };
    const areMultipleModalsOpen = () => {
        let modalStatesArr = [];
        for (const modal in modalStates) {
            const state = modalStates[modal];
            modalStatesArr.push(state);
        }
        let count = 0;
        modalStatesArr.forEach((state) => {
            if (state) {
                count++;
            }
        });
        return setOpenModalsCount(count);
    };

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    useEffect(() => {
        areMultipleModalsOpen();
    }, [modalStates]);

    return (
        <>
            <BodyOverlay
                onClick={onClose}
                key="body-overlay"
                initial={{ opacity: 0 }}
                animate={{
                    opacity:
                        // multiple body overlays will be displayed ... => the sum of opacities will be there => if two moadals are open then opacity of bg will be 0.4 .. but we dont want that therefore have to divide it with the number of modals opened
                        openedModalsCount > 1 ? 0.2 / openedModalsCount : 0.2,

                    zIndex: 9999 * zIndex * 0.9,
                    transition: {
                        duration: 0.3,
                        ease: openedModalsCount > 1 ? "linear" : "easeOut",
                    },
                }}
                exit={{
                    opacity: 0,
                    transition: { duration: 0.2, ease: "easeIn" },
                }}
            />
            <Modal
                key="modal"
                drag="y"
                initial={{ y: "100%", opacity: 0 }}
                animate={{
                    y: 0,
                    opacity: 1,
                    ease: "easeOut",
                    height: isFullModalShown
                        ? "97vh"
                        : // for stacking effect of modals
                          `${70 * (1 / (zIndex / 0.95))}vh`,
                }}
                exit={{ y: "100%", opacity: 0, ease: "easeIn" }}
                dragConstraints={{ top: 0, bottom: 0 }}
                dragElastic={{ top: 0, bottom: 0.1 }}
                transition={{ type: "just" }}
                onDrag={handleShowFullModal}
                style={{ zIndex: 9999 * zIndex }}>
                <ModalHead
                    whileTap={{ backgroundColor: themeProps.primary_200 }}>
                    <BsDashLg />
                    {headContent}
                </ModalHead>
                <ModalBody>{children}</ModalBody>
            </Modal>
        </>
    );
};

export default SliderModal;
