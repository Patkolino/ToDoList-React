import { StyledSection, Title, HeaderTitle, Container } from "./styled";

const Section = ({ title, container, extraHeaderContent }) => (
    <StyledSection>
        <HeaderTitle>
            <Title>{title}</Title>
            {extraHeaderContent}
        </HeaderTitle>
        <Container>
            {container}
        </Container>
    </StyledSection>
);

export default Section;