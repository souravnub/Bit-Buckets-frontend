import styled from "styled-components";

export const NotFoundPageStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    align-items: center;
    justify-content: center;
    min-height: 100vh;

    & > span {
        font-weight: 600;
        font-size: clamp(2rem, 4vw, 3rem);
        text-transform: capitalize;
    }

    & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        /* justify-content: center; */
    }
    p {
        color: ${({ theme }) => theme.primary_800};
    }

    a {
        margin-top: 1rem;
    }
`;
