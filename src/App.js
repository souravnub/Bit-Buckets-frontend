import { Container, Page } from "./components/styled/layout.styled";

import { ThemeProvider } from "styled-components";
import { getTheme, invertTheme } from "./features/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/registerPage/RegisterPage";

import { Button } from "./components/styled/button.styled";
import { GlobalStyles } from "./components/styled/GlobalStyles.styled";
import NotFoundPage from "./pages/NotFoundPage";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/ProtectedRoute";
import HomePage from "./pages/HomePage";
import { useEffect } from "react";
import { getUserInfo } from "./features/auth/authActions";
import { logout } from "./features/auth/authSlice";
import FooterNav from "./components/footer navigation/FooterNav";
import { AnimatePresence } from "framer-motion";
import AccountSettingsModal from "./components/sider modals/AccountSettingsModal";
import MainPageModal from "./components/sider modals/main page modal/MainPageModal";

const routes = [
    { path: "/login", element: <LoginPage /> },
    { path: "/register", element: <RegisterPage /> },
    { path: "*", element: <NotFoundPage /> },
    { path: "/", element: <HomePage /> },
];

const protectedRoutes = [];

function App() {
    const theme = useSelector(getTheme());
    const dispatch = useDispatch();
    const { token } = useSelector((store) => store.auth);
    const { isMainPageModalOpen, isAccountSettingsModalOpen } = useSelector(
        (store) => store.modals
    );
    const handleToggleTheme = () => {
        dispatch(invertTheme());
    };

    useEffect(() => {
        if (token) {
            dispatch(getUserInfo());
            console.log("token change");
        }
        // eslint-disable-next-line
    }, [token]);

    return (
        <ThemeProvider theme={theme.themeProps}>
            <GlobalStyles />
            <Page>
                {/* not setting theme in ToastContainer because it was causing some issues ... solution : let the theme be default ,i.e, light ... hence toast's backgorund color will always be toastify-light-theme color of the css in the root and we will switch that color to the desired color of the theme */}
                <ToastContainer
                    position="bottom-center"
                    autoClose={3500}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    limit={4}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                        paddingInline: ".5rem",
                    }}
                />
                <Container>
                    <AnimatePresence>
                        {isMainPageModalOpen && (
                            <MainPageModal key="MainPageModal" />
                        )}
                        {isAccountSettingsModalOpen && (
                            <AccountSettingsModal key="userInfoModal" />
                        )}
                    </AnimatePresence>

                    <Button
                        style={{
                            position: "fixed",
                            top: "1rem",
                            right: "1rem",
                        }}
                        onClick={handleToggleTheme}>
                        toggleTheme
                    </Button>

                    <Button
                        style={{
                            position: "fixed",
                            top: "1rem",
                            left: "50%",
                        }}
                        onClick={() => dispatch(logout())}>
                        logout
                    </Button>

                    <Router>
                        <Routes>
                            {routes.map((route) => {
                                const { path, element } = route;
                                return (
                                    <Route
                                        key={path}
                                        path={path}
                                        element={element}></Route>
                                );
                            })}

                            <Route element={<ProtectedRoute />}>
                                {protectedRoutes.map((route) => {
                                    const { path, element } = route;
                                    return (
                                        <Route
                                            key={path}
                                            element={element}
                                            path={path}></Route>
                                    );
                                })}
                            </Route>
                        </Routes>
                        <FooterNav />
                    </Router>
                </Container>
            </Page>
        </ThemeProvider>
    );
}

export default App;
