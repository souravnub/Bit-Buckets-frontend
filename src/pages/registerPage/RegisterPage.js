import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillBackward } from "react-icons/ai";
import PasswordField from "../../components/PasswordField";
import {
    InputField,
    InputFieldContainer,
} from "../../components/styled/input.styled";
import {
    AuthPageForm,
    AuthPageContainer,
    AuthPageHeader,
    AuthPageFooter,
} from "../../components/styled/authPage.styled";
import { Heading } from "../../components/styled/typography.styled";

import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../features/auth/authActions";
import showToast from "../../utils/showToast";
import { RegisterPageContentContainer } from "./RegisterPage.styled";
import {
    AvatarsContainer,
    AvatarSelectionSection,
} from "../../components/styled/avatarUtils.styled";
import SelectAvatarBtn from "../../components/SelectAvatarBtn";
import { avatarImages } from "../../utils/avatarImageSources";
import LoadingPrimaryButton from "../../components/buttons/LoadingPrimaryButton";
import { clearAuthErrors } from "../../features/auth/authSlice";
const RegisterPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isError, errorFields, errorsArr, message, isLoading, token } =
        useSelector((store) => store.auth);

    // a state that will handle the showing of the avatar selection section and the form
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const emailRef = useRef();
    const passwordRef = useRef();
    const userNameRef = useRef();
    const selectAvatarBtnRef = useRef();
    const registerPageContentContainerRef = useRef();
    const avatarsContainerRef = useRef();

    const [profileImg, setProfileImg] = useState("");
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const [isEmailError, setIsEmailError] = useState(false);
    const [isUsernameError, setIsUsernameError] = useState(false);
    const [isPasswordError, setIsPasswordError] = useState(false);

    useEffect(() => {
        if (!isLoading) {
            if (isError) {
                if (errorsArr && errorFields) {
                    errorsArr.forEach((err) => {
                        showToast("error", err);
                    });
                    if (errorFields.includes("userName")) {
                        userNameRef.current.focus();
                        setIsUsernameError(true);
                    } else {
                        setIsUsernameError(false);
                    }
                    if (errorFields.includes("email")) {
                        emailRef.current.focus();
                        setIsEmailError(true);
                    } else {
                        setIsEmailError(false);
                    }
                    if (errorFields.includes("password")) {
                        passwordRef.current.firstElementChild.focus();
                        setIsPasswordError(true);
                    } else {
                        setIsPasswordError(false);
                    }
                } else {
                    showToast("error", message || "Some unknown error occured");
                }
                dispatch(clearAuthErrors());
            }
        }
        // eslint-disable-next-line
    }, [isLoading, isError]);

    const handleInputChange = (e) => {
        const value = e.target.value;
        switch (e.target.id) {
            case "username":
                setIsUsernameError(false);
                return setUserName(value);
            case "password":
                setIsPasswordError(false);
                return setPassword(value);
            case "email":
                setIsEmailError(false);
                return setEmail(value);

            default:
                break;
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser({ profileImg, userName, email, password }));
    };
    const handleReturnToSelectAvatarSlide = () => {
        setCurrentSlideIndex(0);

        const selectedProfileImgBtn = Array.from(
            avatarsContainerRef.current.children
        ).find((button) => button.querySelector("img").src === profileImg);
        // focus the btn that is currently having the img as profileImg
        selectedProfileImgBtn.focus({
            preventScroll: true,
        });
    };
    const handleAvatarSelect = (img) => {
        setProfileImg(img.src);
        // not focusing username input field as it was causing some issues in older mobiles
        registerPageContentContainerRef.current.scrollTo(0, 0);

        // this is previous profile img

        if (profileImg === img.src) {
            setCurrentSlideIndex(1);
            selectAvatarBtnRef.current.focus({ preventScroll: true });
        }
    };

    // for handling tab users' accessibility
    useEffect(() => {
        selectAvatarBtnRef.current.addEventListener("focus", () => {
            if (currentSlideIndex !== 1) {
                registerPageContentContainerRef.current.scrollTo(0, 0);
                setCurrentSlideIndex(1);
            }
        });

        const avatarBtns = Array.from(avatarsContainerRef.current.children);

        avatarBtns.forEach((avatarBtn) => {
            avatarBtn.addEventListener("focus", () => {
                if (currentSlideIndex !== 0) {
                    setCurrentSlideIndex(0);
                }
            });
        });
    }, []);

    useEffect(() => {
        if (profileImg) {
            setTimeout(() => {
                setCurrentSlideIndex(1);
                selectAvatarBtnRef.current.focus({ preventScroll: true });
            }, 350);
        }
    }, [profileImg]);

    useEffect(() => {
        if (token) {
            navigate("/");
        }
    }, [token]);

    return (
        <AuthPageContainer>
            <AuthPageHeader>
                <Heading>Welcome to Bit Buckets</Heading>
                <p>Please enter your details to register.</p>
            </AuthPageHeader>

            <RegisterPageContentContainer ref={registerPageContentContainerRef}>
                <AvatarSelectionSection
                    style={{
                        transform:
                            currentSlideIndex === 1
                                ? "translateX(-120%)"
                                : "translateX(0%)",
                    }}>
                    <Heading
                        fontSize="clamp(1rem ,3vw ,1.3rem)"
                        fontWeight={400}>
                        Choose the Avatar that suits you best
                    </Heading>
                    <AvatarsContainer ref={avatarsContainerRef}>
                        {/* avatar btn will be a component not a styled component */}

                        {avatarImages.map((img) => {
                            return (
                                <SelectAvatarBtn
                                    key={img.id}
                                    avatarImgSrc={img.src}
                                    isSelected={img.src === profileImg}
                                    onClick={() => handleAvatarSelect(img)}
                                />
                            );
                        })}
                    </AvatarsContainer>
                </AvatarSelectionSection>

                <AuthPageForm
                    onSubmit={handleFormSubmit}
                    style={{
                        transform:
                            currentSlideIndex === 1
                                ? "translateX(-100%)"
                                : "translateX(10%)",
                    }}>
                    <button
                        ref={selectAvatarBtnRef}
                        type="button"
                        onClick={handleReturnToSelectAvatarSlide}>
                        <AiFillBackward />
                        <span>select avatar</span>
                    </button>
                    <InputFieldContainer>
                        <label htmlFor="username">username</label>
                        <InputField
                            ref={userNameRef}
                            id="username"
                            type="text"
                            // required={true}
                            onChange={handleInputChange}
                            value={userName}
                            isError={isUsernameError}
                        />
                    </InputFieldContainer>

                    <InputFieldContainer>
                        <label htmlFor="email">email</label>
                        <InputField
                            ref={emailRef}
                            id="email"
                            type="email"
                            // required={true}
                            onChange={handleInputChange}
                            value={email}
                            isError={isEmailError}
                        />
                    </InputFieldContainer>

                    <InputFieldContainer>
                        <label htmlFor="password">password</label>
                        {/* have to use a div with a ref .. because when ref passed directly to PasswordField it was throwing an error */}
                        <div ref={passwordRef}>
                            <PasswordField
                                id="password"
                                onChange={handleInputChange}
                                value={password}
                                isError={isPasswordError}
                            />
                        </div>
                    </InputFieldContainer>

                    <LoadingPrimaryButton
                        // type="submit"
                        isLoading={isLoading}
                        disabled={isLoading}>
                        Register
                    </LoadingPrimaryButton>
                </AuthPageForm>
            </RegisterPageContentContainer>

            <AuthPageFooter>
                <span>Already have an account ?</span>
                <Link to="/login">
                    <span>Sign in now !</span>
                    <svg
                        width="159"
                        height="11"
                        viewBox="0 0 159 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M34.6052 2.23986C49.7085 1.91769 64.8201 1.71057 79.9316 1.61852C95.0431 1.52647 110.015 1.55716 125.052 1.7029C133.595 1.78728 142.145 1.90234 150.688 2.05576L151.847 0.483237C132.345 0.797741 112.851 1.18895 93.3577 1.65688C73.864 2.1248 54.3702 2.66943 34.8765 3.29844C23.9334 3.6513 12.9985 4.0195 2.05538 4.41838C1.41409 4.4414 0.452148 4.59481 0.0903915 5.1778C-0.246699 5.72243 0.378152 6.00625 0.896121 5.99091C21.212 5.50764 41.5443 5.46162 61.8685 5.8605C82.1926 6.25939 102.5 7.11085 122.783 8.39955C134.179 9.12062 145.566 9.98742 156.936 10.9923C157.553 11.046 158.572 10.7622 158.901 10.2329C159.263 9.65757 158.589 9.45813 158.096 9.41978C137.862 7.63247 117.579 6.2824 97.2794 5.37724C76.98 4.47208 56.6477 4.0195 36.3235 4.01183C24.9036 4.01183 13.4836 4.14223 2.06361 4.41838L0.904343 5.99091C20.3898 5.27752 39.8836 4.64851 59.3773 4.08854C78.871 3.53623 98.3647 3.05297 117.858 2.65409C128.802 2.43163 139.753 2.22452 150.696 2.04809C151.337 2.04042 152.307 1.86399 152.661 1.28868C153.015 0.713362 152.365 0.483237 151.855 0.475566C136.736 0.214757 121.632 0.0536689 106.521 0.0153147C91.4091 -0.0230396 76.4374 0.0459981 61.3998 0.237769C52.8574 0.345161 44.3068 0.490907 35.7645 0.675008C35.1232 0.69035 34.153 0.859108 33.7995 1.43442C33.4624 1.97905 34.0872 2.26287 34.6052 2.24753V2.23986Z"
                            fill="black"
                        />
                    </svg>
                </Link>
            </AuthPageFooter>
        </AuthPageContainer>
    );
};

export default RegisterPage;
