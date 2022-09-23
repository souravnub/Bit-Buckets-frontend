import { motion } from "framer-motion";
import styled from "styled-components";

export const Modal = styled(motion.div)`
    position: fixed;
    bottom: 0;
    inset-inline: 0;

    min-height: 60vh;
    background-color: ${({ theme }) => theme.primary_100};

    z-index: 9999;
    border-radius: 20px 20px 0 0;
`;

export const ModalHead = styled(motion.div)`
    width: 100%;
    font-size: 1.5rem;
    min-height: 7vh;
    padding: 0.8rem 1.2rem;
    border-radius: 20px 20px 0 0;
    cursor: grab;

    background-color: ${({ theme }) => theme.primary_100};

    position: relative;

    &::after {
        content: "";

        position: absolute;
        bottom: 0;
        inset-inline: 0;
        height: 2px;
        background-color: ${({ theme }) => theme.primary_1000};
        opacity: 0.1;
    }

    svg {
        position: absolute;
        left: 50%;
        transform: translateX(-50%) scaleX(1.7);
        top: 0.1rem;
        path {
            color: ${({ theme }) => theme.primary_1000};
            opacity: 0.13;
        }
    }
`;

export const ModalBody = styled.div`
    overflow: auto;
    position: relative;

    max-height: 70vh;
`;

export const BodyOverlay = styled(motion.div)`
    background-color: ${({ theme }) => theme.primary_900};
    position: fixed;
    inset: 0;
    z-index: 999;
`;
