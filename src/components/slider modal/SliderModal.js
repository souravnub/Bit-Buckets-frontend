import React, { useEffect, useRef, useState } from "react";
import { BodyOverlay, Modal, ModalBody, ModalHead } from "./sliderModalStyles";
import { BsDashLg } from "react-icons/bs";
import { useSelector } from "react-redux";
import FocusTrap from "../FocusTrap";

const SliderModal = ({
    children,
    onClose,
    showFull,
    zIndex,
    headContent,
    defaultHeight,
    draggable = true,
    showSeperation = true,
}) => {
    const { themeProps } = useSelector((store) => store.theme);
    const modalStates = useSelector((store) => store.modals);

    const modalRef = useRef();
    const modalHeadRef = useRef();

    const [isFullModalShown, setIsFullModalShown] = useState(showFull || false);
    const [openedModalsCount, setOpenModalsCount] = useState(0);

    const handleShowFullModal = (event, info) => {
        const offsetY = info.offset.y;
        if (!draggable) {
            return;
        }
        if (offsetY <= -40 && !isFullModalShown) {
            setIsFullModalShown(true);
        } else if (isFullModalShown && offsetY >= 50) {
            setIsFullModalShown(false);
        }
    };

    useEffect(() => {
        let count = 0;
        for (const modal in modalStates) {
            const state = modalStates[modal];
            if (state) {
                count++;
            }
        }
        if (count >= 1) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return setOpenModalsCount(count);
    }, [modalStates]);

    useEffect(() => {
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        });
    }, []);

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
                ref={modalRef}
                key={`modal${zIndex}`}
                drag="y"
                initial={{ y: "100%" }}
                animate={{
                    y: 0,
                    opacity: 1,
                    ease: "easeOut",
                    height: isFullModalShown ? "97vh" : defaultHeight || "70vh",
                }}
                exit={{ y: "100%", ease: "easeIn" }}
                dragConstraints={{ top: 0, bottom: 0 }}
                dragElastic={{ top: draggable ? 0 : 0.05, bottom: 0.1 }}
                transition={{ type: "just" }}
                onDrag={handleShowFullModal}
                style={{ zIndex: 9999 * zIndex }}>
                <FocusTrap>
                    <ModalHead
                        ref={modalHeadRef}
                        animate={{
                            // background was unable to be set to primary_100 initially due to tap animation therefore used animate with duration 0
                            backgroundColor: themeProps.primary_100,
                            transition: { duration: 0 },
                        }}
                        whileTap={{
                            backgroundColor: themeProps.primary_300,
                            transition: { duration: 0.4 },
                        }}
                        style={{
                            borderBottom: showSeperation
                                ? `2px dotted ${themeProps.primary_400}`
                                : "none",
                        }}>
                        <BsDashLg />
                        {headContent}
                    </ModalHead>
                    <ModalBody>{children}</ModalBody>
                </FocusTrap>
            </Modal>
        </>
    );
};

export default SliderModal;
