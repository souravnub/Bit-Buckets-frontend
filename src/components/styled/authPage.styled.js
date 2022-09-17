import styled from "styled-components";

export const AuthPageContainer = styled.div`
    background-color: inherit;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.4rem;

    padding-inline: 0.8rem;
`;
export const AuthPageForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & label {
        font-size: 0.7rem;
        font-weight: 600;
    }
`;
export const AuthPageHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    align-items: flex-start;

    h1 {
        font-size: 1.8rem;
        font-weight: 500;
        line-height: 1.15;
    }
    p {
        opacity: 0.6;
        font-weight: 400;
    }
`;
export const AuthPageFooter = styled.div`
    display: flex;
    font-size: 0.87rem;
    gap: 0.3rem;
    font-weight: 500;

    margin-top: 2rem;

    justify-content: center;

    white-space: nowrap;

    & > span {
        color: ${({ theme }) => theme.primary_800};
    }

    & > a {
        width: min-content;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        /* align-items: center; */
    }

    svg {
        width: 100%;
        height: fit-content;
        path {
            fill: ${({ theme }) => theme.primary_1000};
        }
    }
`;
