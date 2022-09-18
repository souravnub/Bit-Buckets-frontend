import React from "react";
import { Link } from "react-router-dom";
import PrimaryLink from "../components/PrimaryLink";

const HomePage = () => {
    return (
        <div>
            home page <PrimaryLink to="/register">register</PrimaryLink>
        </div>
    );
};

export default HomePage;
