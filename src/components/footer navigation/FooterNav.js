import React, { useState, useEffect } from "react";
import {
    FooterNavContainer,
    FooterNavStyled,
    FooterNavActionsContainer,
} from "./footerNavStyles";
import { TiGlobe, TiGlobeOutline } from "react-icons/ti";
import { HiOutlineUserGroup, HiUserGroup } from "react-icons/hi";
import { IoMenu } from "react-icons/io5";
import { Container } from "../styled/layout.styled";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { toggleMainPageModal } from "../../features/ModalSlice";

const FooterNav = () => {
    const { token } = useSelector((store) => store.auth);
    const { pathname } = useLocation();
    const dispatch = useDispatch();

    const [isGlobalBucketListOpen, setIsGlobalBucketListOpen] = useState(false);
    const [isGlobalUsersListOpen, setIsGlobalUsersListOpen] = useState(false);

    useEffect(() => {
        if (pathname === "/global/buckets") {
            setIsGlobalBucketListOpen(true);
        } else {
            setIsGlobalBucketListOpen(false);
        }
        if (pathname === "/global/users") {
            setIsGlobalUsersListOpen(true);
        } else {
            setIsGlobalUsersListOpen(false);
        }
    }, [pathname]);

    // if not logged in then show login or register page => no need to show the footer nav
    if (!token) {
        return null;
    }

    return (
        <>
            <FooterNavStyled>
                <Container>
                    <FooterNavContainer>
                        <button
                            onClick={() => {
                                dispatch(toggleMainPageModal("open"));
                            }}>
                            <IoMenu />
                        </button>
                        <FooterNavActionsContainer>
                            <Link to="/global/buckets">
                                {isGlobalBucketListOpen ? (
                                    <TiGlobe />
                                ) : (
                                    <TiGlobeOutline />
                                )}
                            </Link>

                            <Link to="/global/users">
                                {isGlobalUsersListOpen ? (
                                    <HiUserGroup />
                                ) : (
                                    <HiOutlineUserGroup />
                                )}
                            </Link>
                        </FooterNavActionsContainer>
                    </FooterNavContainer>
                </Container>
            </FooterNavStyled>
        </>
    );
};

export default FooterNav;
