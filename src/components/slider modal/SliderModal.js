import React, { useEffect, useRef, useState } from "react";
import { BodyOverlay, Modal, ModalBody, ModalHead } from "./sliderModalStyles";
import { BsDashLg } from "react-icons/bs";
import { useSelector } from "react-redux";

const SliderModal = ({ children, onClose, showFull }) => {
    const { themeProps } = useSelector((store) => store.theme);

    const [isFullModalShown, setIsFullModalShown] = useState(showFull || false);

    const handleShowFullModal = (event, info) => {
        const offsetY = info.offset.y;
        if (offsetY <= -40 && !isFullModalShown) {
            setIsFullModalShown(true);
        } else if (isFullModalShown && offsetY >= 10) {
            setIsFullModalShown(false);
        }
    };

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <>
            <BodyOverlay
                onClick={onClose}
                key="body-overlay"
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 0.2,
                    transition: { duration: 0.3, ease: "easeOut" },
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
                    height: isFullModalShown ? "97vh" : "70vh",
                }}
                exit={{ y: "100%", opacity: 0, ease: "easeIn" }}
                dragConstraints={{ top: 0, bottom: 0 }}
                dragElastic={{ top: 0, bottom: 0.2 }}
                transition={{ type: "just" }}
                onDrag={handleShowFullModal}>
                <ModalHead
                    whileTap={{ backgroundColor: themeProps.primary_200 }}>
                    <BsDashLg />
                </ModalHead>
                <ModalBody>{children}</ModalBody>
            </Modal>
        </>
    );
};

export default SliderModal;
