import styled from "styled-components";

export const Button = styled.button`
    background-color: ${({ theme }) => theme.primary_200};
    color: ${({ theme }) => theme.primary_1000};
    border-radius: 0.3em;
    border: 1.5px solid ${({ theme }) => theme.primary_400};
    font-size: 1rem;
    padding: 0.5rem;
    z-index: 999;
`;

export const PrimaryBtn = styled.button`
    width: 100%;

    max-width: 20rem;
    margin-inline: auto;
    margin-top: 0.8rem;
    background-color: ${({ theme }) => theme.btn_bg};
    color: white;
    padding: 0.8rem;
    border-radius: 0.5em;
    font-size: 0.96rem;
`;

export const PrimaryLinkStyle = styled.div`
    width: max-content;
    text-transform: capitalize;
    margin-top: 0.8rem;
    background-color: ${({ theme }) => theme.btn_bg};
    color: white;
    padding: 0.8rem 1.7rem;
    border-radius: 0.3em;
    font-size: 0.96rem;
`;
