import { motion } from "framer-motion";
import styled from "styled-components";

export const Modal = styled(motion.div)`
    position: fixed;
    bottom: 0;
    inset-inline: 0;

    overflow: auto;

    min-height: 10vh;
    background-color: ${({ theme }) => theme.primary_100};

    z-index: 9999;
    border-radius: 20px 20px 0 0;
`;

export const ModalHead = styled(motion.div)`
    position: sticky;
    z-index: 999;
    top: -1px;
    width: 100%;
    font-size: 1.5rem;
    min-height: max(5vh, 3rem);
    padding: 0.8rem 0;
    border-radius: 20px 20px 0 0;
    cursor: grab;

    background-color: ${({ theme }) => theme.primary_100};

    & > svg {
        position: absolute;
        left: 50%;
        transform: translateX(-50%) scaleX(1.7);
        top: 0rem;
        path {
            color: ${({ theme }) => theme.primary_1000};
            opacity: 0.13;
        }
    }
`;

export const ModalBody = styled.div`
    overflow: auto;
`;

export const BodyOverlay = styled(motion.div)`
    background-color: ${({ theme }) => theme.primary_900};
    position: fixed;
    inset: 0;
    z-index: 999;
`;
