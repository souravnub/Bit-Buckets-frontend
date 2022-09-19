import styled from "styled-components";

export const LargestHeading = styled.h1`
    font-size: clamp(9rem, 15vw, 10rem);
    opacity: ${({ opacity }) => opacity || 1};
`;

export const Heading = styled.h1`
    font-size: ${(props) => props.fontSize || "1.7rem"};
    font-weight: ${(props) => props.fontWeight || 500};
    line-height: 1.15;
`;
