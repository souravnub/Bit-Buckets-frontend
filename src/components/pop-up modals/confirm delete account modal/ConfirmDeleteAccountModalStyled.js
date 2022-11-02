import styled from "styled-components";

export const ConfirmDeleteAccountModalBody = styled.div`
    form {
        display: flex;
        flex-direction: column;
        gap: ${({ theme }) => theme.padding_sm};
        padding-block: ${({ theme }) => theme.padding_md};

        & label {
            color: ${({ theme }) => theme.primary_1000};
            font-weight: 500;
        }
        & label span {
            font-weight: 600;
            color: red;
            text-transform: none;
        }

        & > button {
            max-width: 30rem;
        }
    }
`;
