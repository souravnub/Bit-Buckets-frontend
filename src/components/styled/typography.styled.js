import styled from "styled-components";

export const LargestHeading = styled.h1`
    font-size: clamp(9rem, 15vw, 10rem);
    opacity: ${({ opacity }) => opacity || 1};
`;
