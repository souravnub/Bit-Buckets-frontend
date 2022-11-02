import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const convertRemToPixels = (remVal) => {
    const PIXELS_IN_ONE_REM = 16;
    return parseFloat(remVal.split("rem")[0]) * PIXELS_IN_ONE_REM;
};

export const useGetCurrentMedia = () => {
    const {
        themeProps: { mobile, tablet, desktop },
    } = useSelector((store) => store.theme);

    let getCurrentMedia = (windowWidth) => {
        let pixelVals = {
            mobile: convertRemToPixels(mobile),
            tablet: convertRemToPixels(tablet),
            desktop: convertRemToPixels(desktop),
        };

        if (windowWidth <= pixelVals.mobile) {
            return "mobile";
        } else if (
            windowWidth > pixelVals.mobile &&
            windowWidth <= pixelVals.tablet
        ) {
            return "tablet";
        } else if (
            windowWidth > pixelVals.tablet &&
            windowWidth <= pixelVals.desktop
        ) {
            return "desktop";
        }
    };

    const [currentMedia, setCurrentMedia] = useState(
        getCurrentMedia(window.innerWidth)
    );

    window.addEventListener("resize", () => {
        setCurrentMedia(getCurrentMedia(window.innerWidth));
    });

    return currentMedia;
};
