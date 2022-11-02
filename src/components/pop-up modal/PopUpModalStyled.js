import { motion } from "framer-motion";
import styled from "styled-components";

export const PopUpModalHead = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: ${({ theme }) => theme.padding_md};
    padding-block: ${({ theme }) => theme.padding_md};

    & > span {
        font-size: 1.06rem;
        font-weight: 500;
    }

    & > button {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${({ theme }) => theme.fs_lg};
        background-color: ${({ theme }) => theme.primary_300};
        border-radius: 2px;
    }
`;

export const PopUpModalBody = styled.div`
    padding-inline: ${({ theme }) => theme.padding_md};
    padding-block: ${({ theme }) => theme.padding_md};
`;

export const MainModalContainer = styled(motion.div)`
    background-color: ${({ theme }) => theme.primary_100};

    position: fixed;
    min-width: min(90%, 40rem);
    top: 50%;
    left: 50%;
    border-radius: 8px;
    overflow: hidden;
`;
