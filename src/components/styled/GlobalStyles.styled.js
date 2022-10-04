import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root {
    --toastify-color-light : ${({ theme }) => theme.primary_100};
        --toastify-font-family: "Poppins" , 'sans-serif';
    // 32rem ~ 510px 
    --toastify-toast-width : 32rem;
}

*,
*::before,
*::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    color : ${({ theme }) => theme.primary_1000};
    font-size: inherit;
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
