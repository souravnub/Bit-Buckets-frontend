import styled from "styled-components";
import { AuthPageForm } from "../../styled/authPage.styled";

export const EditProfileForm = styled(AuthPageForm)`
    display: flex;

    margin-inline: auto;
    padding-block-start: ${({ theme }) => theme.padding_lg};
    padding-inline: ${({ theme }) => theme.padding_md};

    & > div:nth-child(1) {
        align-self: center;
        margin-bottom: ${({ theme }) => theme.padding_sm};
    }
`;
export const AccountSetttingsModalHeadContainer = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    padding-inline: ${({ theme }) => theme.padding_md};
    padding-block-start: ${({ theme }) => theme.padding_md};

    & > button {
        font-size: ${({ theme }) => theme.fs_lg};
        display: grid;
        place-items: center;
        svg {
            color: ${({ theme }) => theme.primary_800};
        }
    }
`;

export const ChangeAvatarContainer = styled.div`
    position: relative;
    width: max-content;

    & > button {
        position: absolute;
        bottom: 0;
        right: 0;

        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${({ theme }) => theme.fs_xl};
        background-color: ${({ theme }) => theme.primary};
        border-radius: 50%;
    }
`;

export const ChangePasswordContainer = styled.div`
    margin-block: ${({ theme }) => theme.padding_md};
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.padding_md};

    & > button {
        display: flex;
        align-items: center;
        gap: ${({ theme }) => theme.padding_sm};
        text-transform: capitalize;
        font-family: "Poppins";
        font-size: ${({ theme }) => theme.fs_sm};
    }
`;

export const OldPasswordFormContainer = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.padding_sm};

    & > div {
        flex-grow: 1;

        & > div {
            display: flex;
            align-items: center;
            gap: ${({ theme }) => theme.padding_md};

            & > button {
                font-size: ${({ theme }) => theme.fs_lg};
            }
        }
    }
`;
