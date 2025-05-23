import { StyledSection, Title, StyledHeader, Container } from "./styled";

const Section = ({ title, container, extraHeaderContent }) => (
    <StyledSection>
        <StyledHeader>
            <Title>{title}</Title>
            {extraHeaderContent}
        </StyledHeader>
        <Container>
            {container}
        </Container>
    </StyledSection>
);

export default Section;