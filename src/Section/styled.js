import styled from "styled-components";

export const StyledSection = styled.section`
    background: ${({ theme }) => theme.color.white};
    margin: 10px 0;
`;

export const Title = styled.h2`
    font-size: 20px;
    margin: 15px 0;
`;

export const HeaderTitle = styled.header`
    display: grid;
    grid-template-columns: auto auto;
    border-bottom: 1px solid ${({ theme }) => theme.color.alto};
    grid-gap: 10px;
    align-items: center;
    justify-content: space-between;
    padding: 20px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
        grid-template-columns: 1fr;
    }
`;

export const Container = styled.div`
    padding: 20px;
`;