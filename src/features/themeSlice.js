import { createSlice } from "@reduxjs/toolkit";

// default props are the props that are same for both light and dark theme
const defaultProps = {
    // 420px
    mobile: "26.25rem",
    // 600px
    tablet: "37.5rem",
    // 1200px
    desktop: "75rem",

    padding_xs: ".2rem",
    padding_sm: ".5rem",
    padding_md: ".9rem",
    padding_lg: "1.4rem",
    padding_xl: "2rem",

    fs_xs: ".5rem",
    fs_sm: ".8rem",
    fs_md: "1.12rem",
    fs_lg: "1.5rem",
    fs_xl: "2rem",
};

const lightThemeColors = {
    //1,3,5,9,13,17,23,33,44,68
    primary: "#fcfcfc",
    primary_100: "#f7f7f7",
    primary_200: "#eeeeee",
    primary_300: "#e8e8e8",
    primary_400: "#dedede",
    primary_500: "#d4d4d4",
    primary_600: "#c4c4c4",
    primary_700: "#ababab",
    primary_800: "#8f8f8f",
    primary_900: "#525252",
    primary_1000: "#121212",

    // primary_100 : extreme
    // primary_1000 : faded
    // in lightTheme primary_1000 : will be completely dark , primary_100 : will be white

    btn_bg: "#072b3a",
};
const darkThemeColors = {
    primary: "#030303",
    primary_100: "#0f0f0f",
    primary_200: "#151515",
    primary_300: "#171717",
    primary_400: "#212121",
    primary_500: "#2b2b2b",
    primary_600: "#3b3b3b",
    primary_700: "#3b3b3b",
    primary_800: "#545454",
    primary_900: "#707070",
    primary_1000: "#fcfcfc",
    btn_bg: "#111519",
};

const lightTheme = {
    backgroundColor: lightThemeColors.primary,
    color: lightThemeColors.primary_1000,
    ...lightThemeColors,
    ...defaultProps,
};
const darkTheme = {
    backgroundColor: darkThemeColors.primary,
    color: darkThemeColors.primary_1000,
    ...darkThemeColors,
    ...defaultProps,
};

const setInitialState = () => {
    let themeObj;
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

    const savedTheme = localStorage.getItem("BitBucketsTheme");
    if (savedTheme) {
        if (savedTheme === "light") {
            themeObj = { currentTheme: "light", themeProps: lightTheme };
        } else {
            themeObj = { currentTheme: "dark", themeProps: darkTheme };
        }
    } else {
        if (darkThemeMq.matches) {
            themeObj = { currentTheme: "dark", themeProps: darkTheme };
        } else {
            themeObj = { currentTheme: "light", themeProps: lightTheme };
        }
    }

    return themeObj;
};

const initialState = setInitialState;

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        invertTheme: (state) => {
            if (state.currentTheme === "dark") {
                localStorage.setItem("BitBucketsTheme", "light");
                state.currentTheme = "light";
                state.themeProps = lightTheme;
            } else {
                localStorage.setItem("BitBucketsTheme", "dark");
                state.currentTheme = "dark";
                state.themeProps = darkTheme;
            }
        },
    },
});

export const getTheme = () => {
    return (store) => store.theme;
};

export const { invertTheme } = themeSlice.actions;
export default themeSlice.reducer;
