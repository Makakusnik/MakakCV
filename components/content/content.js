import styled from "styled-components";
import { devices } from "../../pages/_app";
export const PrimaryColorText = styled.span`
  color: ${({ theme }) => theme.primary};
`;

export const Text = styled.p`
  font-family: ${({ fontFamily }) => fontFamily || "Lato"};
  font-size: ${({ fontSize }) => fontSize || "16px"};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ theme, color }) => theme[color] || theme.text};
  text-align: ${({ textAlign }) => textAlign};
  width: fit-content;
`;

export const Title = styled.h1`
  font-family: ${({ fontFamily }) => fontFamily || "Lato"};
  font-size: ${({ fontSize }) => fontSize || "16px"};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ theme, color }) => theme[color] || theme.text};
  text-align: ${({ textAlign }) => textAlign};
`;

export const Section = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Section.Header = ({ children, id, ...restProps }) => {
  return (
    <Header {...restProps}>
      <LinkTitle id={id}>{children}</LinkTitle>
    </Header>
  );
};

Section.Header.displayName = "Header";

Section.Content = ({ children, ...restProps }) => {
  return <Content {...restProps}>{children}</Content>;
};

Section.Content.displayName = "Content";

Section.Article = ({ children, ...restProps }) => {
  return <Article {...restProps}>{children}</Article>;
};
Section.Article.displayName = "Article";

Section.ArticleContent = ({ children, ...restProps }) => {
  return <ArticleContent {...restProps}>{children}</ArticleContent>;
};
Section.ArticleContent.displayName = "ArticleContent";

Section.ArticleHeading = ({ children, ...restProps }) => {
  return <ArticleHeading {...restProps}>{children}</ArticleHeading>;
};
Section.ArticleHeading.displayName = "ArticleHeading";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  width: 100%;
  padding: 0px 15px;
`;

const Header = styled.header`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  h2 {
    z-index: 2;
    position: relative;
  }
`;

const Article = styled.article`
  display: grid;
  grid-template-columns: ${({ template }) => template || "1fr"};
  color: ${({ theme }) => theme.text};
  font-family: Lato;
  justify-content: center;
  width: 100%;
  row-gap: 15px;

  @media (max-width: ${devices.tablet}) {
    grid-template-columns: ${({ templateTablet }) => templateTablet};
  }
  @media (max-width: ${devices.mobileL}) {
    grid-template-columns: ${({ templateMobileL }) => templateMobileL};
  }
`;
const ArticleHeading = styled.h3`
  display: flex;
  color: ${({ theme }) => theme.text};
  font-family: Lato;
  justify-content: ${({ center }) => center && "center"};
  font-size: 20px;
  margin-top: 25px;
  margin-bottom: 15px;
`;
const ArticleContent = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
  flex-wrap: wrap;
  font-family: sans-serif;
  word-spacing: 0.12em;
  width: 100%;
  line-height: 1.6em;
  white-space: pre-wrap;
`;

export const InlineLink = styled.a`
  display: inline;
  width: fit-content;
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ theme }) => theme.primary};
  &:hover {
    text-decoration: underline dotted;
  }
`;

const LinkTitle = styled.h2`
  color: white;
  font-size: 24px;
  font-family: Lato;
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
  width: 100%;
  &:nth-of-type(even) {
    background-color: ${({ theme }) => theme.mediumDark};
    clip-path: polygon(0 11%, 100% 0, 100% 100%, 0 89%);
  }
  &:nth-of-type(odd) {
    padding-bottom: 50px;
  }
  &:first-of-type {
    padding-top: 50px;
  }
`;

export const ImageContainer = styled.figure`
  display: block;
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.dark};
`;
