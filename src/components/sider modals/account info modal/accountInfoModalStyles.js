import styled from "styled-components";

export const AccountInfoModalHeadContainer = styled.div`
    display: flex;
    justify-content: center;
    padding-inline: ${({ theme }) => theme.padding_md};
    padding-block-start: ${({ theme }) => theme.padding_md};
    & > button {
        margin-inline-end: auto;
        font-size: ${({ theme }) => theme.fs_lg};
        display: grid;
        place-items: center;
        svg {
            color: ${({ theme }) => theme.primary_800};
        }
    }
    & > span {
        margin-inline-end: auto;
    }
`;
