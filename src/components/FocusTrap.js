import React, { useEffect } from "react";
import { useRef } from "react";

const FocusTrap = ({ children }) => {
    const containerRef = useRef();

    const keyDownHandler = (e) => {
        // only execute if tab is pressed
        if (e.key !== "Tab") return;

        // here we query all focusable elements, customize as your own need
        const focusableModalElements = containerRef.current.querySelectorAll(
            "a[href], button:not([disabled]), textarea, input, select"
        );

        const firstElement = focusableModalElements[0];
        const lastElement =
            focusableModalElements[focusableModalElements.length - 1];

        // if going forward by pressing tab and lastElement is active shift focus to first focusable element
        if (!e.shiftKey && document.activeElement === lastElement) {
            firstElement.focus();
            return e.preventDefault();
        }

        // if going backward by pressing tab and firstElement is active shift focus to last focusable element
        if (e.shiftKey && document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
        }
    };

    useEffect(() => {
        const focusableModalElements = containerRef.current.querySelectorAll(
            "a[href], button:not([disabled]), textarea, input, select"
        );

        focusableModalElements[0].focus();
    }, []);

    return (
        <div onKeyDown={keyDownHandler} ref={containerRef}>
            {children}
        </div>
    );
};

export default FocusTrap;
