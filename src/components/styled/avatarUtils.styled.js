import styled from "styled-components";

export const AvatarSelectionSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    justify-content: center;
    align-items: center;
`;

export const AvatarsContainer = styled.div`
    display: flex;
    gap: 0.8rem;
    padding-inline: 0.5rem;

    @media screen and (max-width: ${({ theme }) => theme.tablet}) {
        flex-wrap: wrap;
        justify-content: space-between;
        padding-inline: 0;
    }
`;

export const SelectAvatarBtnStyled = styled.button`
    border-radius: 50%;

    position: relative;

    svg {
        position: absolute;
        bottom: 0;
        right: 0%;
        background-color: ${({ theme }) => theme.primary_100};
        transform: translateX(-100%);
        padding: 0.1em;
        border-radius: 50%;
        border: 2px solid green;

        @media screen and (max-width: ${({ theme }) => theme.mobile}) {
            transform: translateX(-10%);
        }
    }

    @media screen and (max-width: ${({ theme }) => theme.tablet}) {
        max-width: 20%;
        aspect-ratio: 1;
    }
`;
