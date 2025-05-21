import styled, { css } from "styled-components";

export const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    grid-gap: 10px;
    padding: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.color.alto};
    word-break: break-word;

    ${({ hidden }) => hidden && css`
        display:none;
    `}
`;

export const Content = styled.span`
    ${({ $done }) => $done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    color: ${({ theme }) => theme.color.white};
    width: 30px;
    height: 30px;
    border: none;
    transition: filter 0.5s;

    ${({ $toggleDone }) => $toggleDone && css`
        background: ${({ theme }) => theme.color.japaneseLaurel};
    `}

    ${({ $remove }) => $remove && css`
        background: ${({ theme }) => theme.color.brightRed}; 
    `}

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter:brightness(120%);
    }
`;