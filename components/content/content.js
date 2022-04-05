import styled from "styled-components";
import { SmallTriangleBackground } from "../decorations/decorations";

export const PrimaryColorText = styled.span`
  color: ${({ theme }) => theme.primary};
`;

export const Text = styled.p`
  font-family: ${({ fontFamily }) => fontFamily || "Lato"};
  font-size: ${({ fontSize }) => fontSize || "16px"};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ theme, color }) => theme[color] || theme.text};
  text-align: ${({ textAlign }) => textAlign};
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
      <SmallTriangleBackground />
    </Header>
  );
};

Section.Header.displayName = "Header";

Section.Content = ({ children, ...restProps }) => {
  return <Content {...restProps}>{children}</Content>;
};

Section.Content.displayName = "Content";

Section.Article = ({ children, ...restProps }) => {
  return (
    <Article {...restProps}>
      <ArticleContent>{children}</ArticleContent>
    </Article>
  );
};
Section.Article.displayName = "Article";

Section.ArticleHeading = ({ children, ...restProps }) => {
  return <ArticleHeading {...restProps}>{children}</ArticleHeading>;
};
Section.ArticleHeading.displayName = "ArticleHeading";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    top: 40px;
  }
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
  font-family: Lato;
  row-gap: 15px;
`;
const ArticleHeading = styled.h3`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
  font-family: Lato;
  font-size: 20px;
  margin-top: 15px;
  &:first-of-type {
    margin-top: 0px;
  }
`;
const ArticleContent = styled.p`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
  font-family: sans-serif;
  word-spacing: 0.12em;
  line-height: 1.6em;
  white-space: pre-wrap;
  p {
    margin: 10px 0px;
  }
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
  width: 100%;
`;

export const ImageContainer = styled.figure`
  display: block;
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.dark};
`;
