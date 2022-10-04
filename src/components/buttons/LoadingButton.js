import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Oval } from "react-loader-spinner";
import { useSelector } from "react-redux";
import styled from "styled-components";

const LoadingOvalContainer = styled.div`
    & [data-testid="oval-loading"] {
        padding: 0 !important;
    }
`;

const LoadingButton = ({ children, isLoading, onClick }) => {
    const strokeWidth = 5;
    const { themeProps } = useSelector((store) => store.theme);

    const contentContainerRef = useRef();
    let [contentDimensions, setContentDimensions] = useState({});

    useEffect(() => {
        const contentProps =
            contentContainerRef.current.getBoundingClientRect();
        setContentDimensions({
            width: contentProps.width,
            height: contentProps.height,
        });
    }, [isLoading]);

    return (
        <button
            onClick={onClick}
            // disabled={isLoading}
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: isLoading && themeProps.primary_800,
                position: "relative",
            }}>
            {isLoading && (
                <LoadingOvalContainer>
                    <Oval
                        width={contentDimensions.width}
                        height={contentDimensions.height}
                        color={themeProps.primary_800}
                        visible={isLoading}
                        ariaLabel="oval-loading"
                        secondaryColor="transparent"
                        strokeWidth={strokeWidth}
                        strokeWidthSecondary={strokeWidth}
                    />
                </LoadingOvalContainer>
            )}

            <div
                ref={contentContainerRef}
                style={{
                    position: isLoading ? "absolute" : "relative",
                    visibility: isLoading ? "hidden" : "visible",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                {children}
            </div>
        </button>
    );
};

export default LoadingButton;
