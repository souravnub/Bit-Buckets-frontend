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

const routes = [
    { path: "/login", element: <LoginPage /> },
    { path: "/register", element: <RegisterPage /> },
    { path: "*", element: <NotFoundPage /> },
];

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
                        </Routes>
                    </Router>
                </Container>
            </Page>
        </ThemeProvider>
    );
}

export default App;
