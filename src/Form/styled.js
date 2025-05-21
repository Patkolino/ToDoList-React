import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 10px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.color.alto};
`;

export const Button = styled.button`
    background-color: ${({ theme }) => theme.color.teal};
    padding: 10px;
    border: none;
    color: ${({ theme }) => theme.color.white};
    transition: transform 1s ease, background-color 1s;

    &:hover {
        transform: scale(1.2);
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        &:hover {
            transform: scale(1.1);
        }
    }
`;