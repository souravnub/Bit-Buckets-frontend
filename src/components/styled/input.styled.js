import styled from "styled-components";

export const InputField = styled.input`
    background-color: transparent;
    color: ${({ theme }) => theme.primary_1000};
    border-radius: 0.2em;
    border: 1.8px solid ${({ theme }) => theme.primary_300};
    font-size: 0.9rem;
    padding: 0.5rem;
    width: 100%;
`;

export const InputFieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.2rem;

    & label {
        color: ${({ theme }) => theme.primary_900};
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: capitalize;
    }
`;

export const PasswordFieldContainer = styled.div`
    width: 100%;
    position: relative;

    display: flex;

    & > button {
        position: absolute;
        top: 50%;
        right: max(1%, 0.6rem);
        transform: translateY(-50%);

        svg {
            fill: ${({ theme }) => theme.primary_1000};
            font-size: 1.2rem;
        }
    }
`;
