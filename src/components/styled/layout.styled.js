import styled from "styled-components";

export const Page = styled.main`
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.color};
    min-height: 100vh;
`;

export const Container = styled.div`
    // 1400px
    max-width: 87.5rem;
    margin-inline: auto;
    padding-inline: 0.8rem;
    background-color: inherit;
`;
