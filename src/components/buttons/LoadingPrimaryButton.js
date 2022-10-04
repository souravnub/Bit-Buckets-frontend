import React from "react";
import { Oval } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { PrimaryBtn } from "../styled/button.styled";

const LoadingPrimaryButton = ({ children, isLoading }) => {
    const strokeWidth = 5;
    const { themeProps } = useSelector((store) => store.theme);
    return (
        <PrimaryBtn
            disabled={isLoading}
            style={{
                display: "grid",
                placeContent: "center",
                alignItems: "center",
                backgroundColor: isLoading && themeProps.primary_300,
                color: isLoading && themeProps.primary_800,
            }}>
            <div
                style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    color: "inherit",
                }}>
                <Oval
                    height={20}
                    width={20}
                    color={themeProps.primary_800}
                    visible={isLoading}
                    ariaLabel="oval-loading"
                    secondaryColor="transparent"
                    wrapperStyle={{
                        position: "absolute",
                        transform: "translateX(-140%)",
                    }}
                    strokeWidth={strokeWidth}
                    strokeWidthSecondary={strokeWidth}
                />
                {children}
            </div>
        </PrimaryBtn>
    );
};

export default LoadingPrimaryButton;
