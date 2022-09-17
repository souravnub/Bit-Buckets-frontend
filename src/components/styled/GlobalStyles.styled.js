import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*,
*::before,
*::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    color : ${({ theme }) => theme.primary_1000}
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: "Poppins", sans-serif;
}

ul,
ol {
    list-style: none;
}
a {
    text-decoration: none;
    color: inherit;
}
button {
    background: transparent;
    border-radius: 0;
    border: none;
    cursor: pointer;
}
p {
    line-height: 1.5;
    font-size: 0.85rem;
}
img {
    max-width: 100%;
}
input,
textarea {
    border: none;
    resize: none;
    outline: none;
}

`;
