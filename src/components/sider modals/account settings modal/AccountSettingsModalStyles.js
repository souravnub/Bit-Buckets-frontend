import styled from "styled-components";

export const AccountSetttingsModalHeadContainer = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    padding-inline: ${({ theme }) => theme.padding_md};
    padding-block-start: ${({ theme }) => theme.padding_md};

    & > button {
        font-size: ${({ theme }) => theme.fs_lg};
        display: grid;
        place-items: center;
        svg {
            color: ${({ theme }) => theme.primary_800};
        }
    }
`;
