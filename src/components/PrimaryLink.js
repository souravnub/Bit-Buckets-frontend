import React from "react";
import { Link } from "react-router-dom";
import { PrimaryLinkStyle } from "./styled/button.styled";

const PrimaryLink = ({ children, ...props }) => {
    return (
        <Link {...props}>
            <PrimaryLinkStyle>{children}</PrimaryLinkStyle>
        </Link>
    );
};

export default PrimaryLink;
