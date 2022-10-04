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

export const TextFaded = styled.span`
    font-size: ${({ fontSize }) => fontSize || "1rem"};
    font-weight: ${({ fontWeight }) => fontWeight || 500};
    opacity: ${({ strength }) => 1 - strength || 0.7};
`;
