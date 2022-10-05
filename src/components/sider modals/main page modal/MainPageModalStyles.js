import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainPageModalContainer = styled.div`
    padding-block-end: ${({ theme }) => theme.padding_xl};

    & > button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: ${({ theme }) => theme.padding_sm};
        margin-inline: auto;
        color: red;

        font-weight: 500;
        background-color: ${({ theme }) => theme.primary_400};
        svg {
            font-size: ${({ theme }) => theme.fs_lg};
            color: red;
            path {
                color: red;
            }
        }
    }
`;

export const MainProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.padding_lg};
`;
export const ProfileImgContainer = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.padding_md};

    img {
        max-width: 6rem;
    }
    & > div {
        display: flex;
        flex-direction: column;

        padding-block: ${({ theme }) => theme.padding_xs};

        span:nth-child(1) {
            font-size: 1.1rem;
            font-weight: 500;
            text-transform: capitalize;
        }
        span:nth-child(3) {
            margin-top: auto;
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: ${({ theme }) => theme.padding_sm};
            & > svg {
                font-size: 1.8rem;
            }
        }
    }
`;
export const ProfileDetailsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.padding_md};
    justify-content: space-between;
    min-width: 100%;
    padding-inline: ${({ theme }) => theme.padding_md};

    & > div {
        flex-grow: 1;
        border-radius: 10px;
        padding: ${({ theme }) => theme.padding_md};
        background-color: ${({ theme }) => theme.primary_200};

        display: flex;
        flex-direction: column;
        align-items: center;

        & > span:nth-child(1) {
            font-weight: 600;
            font-size: ${({ theme }) => theme.fs_md};
        }
    }
`;

export const MainSettingOptionsContainer = styled.div`
    margin-block: ${({ theme }) => theme.padding_lg};
    padding-block: ${({ theme }) => theme.padding_lg};

    display: flex;
    flex-direction: column;

    & > * + * {
        border-top: 1px solid ${({ theme }) => theme.primary_400};
    }
    & > *:nth-child(1) {
        border-top: 1px solid ${({ theme }) => theme.primary_400};
    }
    & > *:last-child {
        border-bottom: 1px solid ${({ theme }) => theme.primary_400};
    }
`;
export const SettingOptionButton = styled.button`
    display: flex;
    gap: ${({ theme }) => theme.padding_md};
    padding-block: ${({ theme }) => theme.padding_md};
    padding-inline: ${({ theme }) => theme.padding_md};
    align-items: center;
    font-family: "Poppins";

    & > span {
        font-size: 0.9rem;
        font-weight: 500;
    }

    & > svg {
        margin-inline-start: auto;
        font-size: ${({ theme }) => theme.fs_lg};
        color: ${({ theme }) => theme.primary_900};
    }

    & > div {
        background-color: ${({ theme }) => theme.primary_200};
        border-radius: 5px;
        padding-inline: ${({ theme }) => theme.padding_sm};
        padding-block: ${({ theme }) => theme.padding_sm};

        display: flex;
        align-items: center;
        justify-content: center;

        & > svg {
            display: block;
            font-size: 1.2rem;
        }
    }
`;

export const ThemeToggleSettingOptionDiv = styled(
    SettingOptionButton.withComponent("div")
)`
    & > button {
        margin-inline-start: auto;
    }
`;
export const SettingOptionLink = SettingOptionButton.withComponent(Link);
