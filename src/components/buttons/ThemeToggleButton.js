import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { motion } from "framer-motion";

import { BsSunFill, BsSun } from "react-icons/bs";
import { HiMoon, HiOutlineMoon } from "react-icons/hi";

import styled from "styled-components";
import { invertTheme } from "../../features/themeSlice";

const mainButtonPadding = ".5rem";
const sliderPadding = ".2rem";
const sliderPaddingNegative = "-.2rem";
const MainThemeToggleButton = styled(motion.button)`
    border-radius: 100vh;
    background-color: ${({ theme }) => theme.primary_300};
    position: relative;

    padding: ${mainButtonPadding};

    display: flex;
    gap: ${({ theme }) => theme.padding_md};

    svg {
        font-size: ${({ theme }) => theme.fs_md};
        color: white;
        path {
            color: white;
        }
    }
    & > svg {
        color: ${({ theme }) => theme.primary_800};
        path {
            color: ${({ theme }) => theme.primary_800};
        }
    }
`;
const ThemeToggleButtonSlider = styled.div`
    position: absolute;
    top: ${mainButtonPadding};
    border-radius: 50%;
    padding: ${sliderPadding};
    display: flex;
    align-items: center;
    justify-content: center;

    transition: left 300ms ease, transform 500ms ease, background-color 150ms;
`;

const ThemeToggleButton = () => {
    const { currentTheme } = useSelector((store) => store.theme);
    const dispatch = useDispatch();
    return (
        <MainThemeToggleButton
            onClick={() => dispatch(invertTheme())}
            aria-label={
                currentTheme === "light"
                    ? "change to dark theme"
                    : "change to light theme"
            }>
            <BsSun />
            <HiOutlineMoon />

            <ThemeToggleButtonSlider
                style={
                    currentTheme === "light"
                        ? {
                              left: sliderPadding,
                              transform: `translateX(0)  translateY(${sliderPaddingNegative})`,
                              backgroundColor: "#ff6900",
                          }
                        : {
                              left: "100%",
                              transform: `translateX(calc(-100% + ${sliderPaddingNegative}))  translateY(${sliderPaddingNegative})`,
                              backgroundColor: "#622da5",
                          }
                }>
                {currentTheme === "light" ? <BsSunFill /> : <HiMoon />}
            </ThemeToggleButtonSlider>
        </MainThemeToggleButton>
    );
};

export default ThemeToggleButton;
