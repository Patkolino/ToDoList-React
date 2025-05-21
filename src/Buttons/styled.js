import styled from "styled-components";

export const ButtonsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Button = styled.button`
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.color.teal};
    margin: 0 0 0 10px;
    padding: 0;
    transition: color 0.5s;

    &:hover {
        color: ${({ theme }) => theme.color.persianGreen};
    }

    &:active {
        color: ${({ theme }) => theme.color.bondyBlue};
    }

    &:disabled {
        color: ${({ theme }) => theme.color.silver};
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        flex-basis: 100%;
        margin: 10px;
    }
`;