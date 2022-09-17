import React from "react";
import { NotFoundPageStyled } from "../components/styled/notFoundPage.styled";
import PrimaryLink from "../components/PrimaryLink";
import { LargestHeading } from "../components/styled/typography.styled";

const NotFoundPage = () => {
    return (
        <NotFoundPageStyled>
            <LargestHeading opacity={0.12}>404</LargestHeading>
            <span>page not found</span>
            <div>
                <p>We tried to find the page, but we could not.</p>
                <p>Maybe the page doesn't exist.</p>
            </div>

            <PrimaryLink to="/">back to home</PrimaryLink>
        </NotFoundPageStyled>
    );
};

export default NotFoundPage;
