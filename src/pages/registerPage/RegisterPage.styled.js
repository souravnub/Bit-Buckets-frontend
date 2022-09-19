import styled from "styled-components";

export const RegisterPageContentContainer = styled.div`
    display: grid;
    grid-template-columns: 100% 100%;
    overflow: hidden;
    padding-block: 0.4rem;
    & > * {
        width: 100%;
        transition: transform 300ms ease-in-out;
    }
`;
