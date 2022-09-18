import { Container, Page } from "./components/styled/layout.styled";

import { ThemeProvider } from "styled-components";
import { getTheme, invertTheme } from "./features/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import { Button } from "./components/styled/button.styled";
import { GlobalStyles } from "./components/styled/GlobalStyles.styled";
import NotFoundPage from "./pages/NotFoundPage";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/ProtectedRoute";
import HomePage from "./pages/HomePage";

const routes = [
    { path: "/login", element: <LoginPage /> },
    { path: "/register", element: <RegisterPage /> },
    { path: "*", element: <NotFoundPage /> },
];

const protectedRoutes = [{ path: "/", element: <HomePage /> }];

function App() {
    const theme = useSelector(getTheme());
    const dispatch = useDispatch();
    const handleToggleTheme = () => {
        dispatch(invertTheme());
    };

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
                    <Button
                        style={{
                            position: "fixed",
                            top: "1rem",
                            right: "1rem",
                        }}
                        onClick={handleToggleTheme}>
                        toggleTheme
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
                    </Router>
                </Container>
            </Page>
        </ThemeProvider>
    );
}

export default App;
