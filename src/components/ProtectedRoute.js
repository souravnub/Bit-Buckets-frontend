import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import LoginPage from "../pages/LoginPage";

const ProtectedRoute = () => {
    // what it is doing : if !token then render register page on the current route ,,, but if token is there return outlet -> a component that is passed to the parent route and will render the child elements route
    const { token } = useSelector((store) => store.auth);

    if (!token) {
        return <LoginPage />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
