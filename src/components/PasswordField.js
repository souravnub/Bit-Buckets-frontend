import React, { useState } from "react";
import { InputField, PasswordFieldContainer } from "./styled/input.styled";
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";

const PasswordField = ({ onChange, ...props }) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);

    return (
        <PasswordFieldContainer>
            <InputField
                type={isPasswordShown ? "text" : "password"}
                autocorrect="off"
                autocapitalize="none"
                {...props}
                onChange={onChange}></InputField>
            <button
                type="button"
                onClick={() => setIsPasswordShown((prev) => !prev)}>
                {isPasswordShown ? <IoEyeOffSharp /> : <IoEyeSharp />}
            </button>
        </PasswordFieldContainer>
    );
};

export default PasswordField;
