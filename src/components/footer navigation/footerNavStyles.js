import styled from "styled-components";

export const FooterNavContainer = styled.nav`
    font-size: 1.47rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0.6rem 1.4rem;
    max-width: 50rem;
    margin-inline: auto;

    svg {
        path {
            color: ${({ theme }) => theme.primary_1000};
        }
    }

    button,
    a {
        display: grid;
        place-items: center;
        padding: 0.3rem;
    }
`;

export const FooterNavStyled = styled.div`
    position: fixed;
    bottom: 0;
    inset-inline: 0;
    background-color: ${({ theme }) => theme.primary_200};
`;

export const FooterNavActionsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.8rem;
`;
