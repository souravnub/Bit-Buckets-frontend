import styled from "styled-components";

export const HeadContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;

    padding-inline: ${({ theme }) => theme.padding_md};

    & > button {
        font-size: 1.4rem;

        display: flex;
        align-items: center;
        justify-content: center;
        padding: ${({ theme }) => theme.padding_sm};
        border-radius: 50%;

        background-color: ${({ theme }) => theme.primary_300};
    }
`;

export const UserInfoContainer = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`;

export const UserDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;

    & > h5 {
        font-size: 1rem;
        font-weight: 500;
        text-transform: capitalize;
    }
    & > span {
        font-size: 0.97rem;
        opacity: 0.4;
        font-weight: 600;
        display: flex;
        align-items: center;

        & > svg {
            font-size: 1.2rem;
        }
    }
`;
