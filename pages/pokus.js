import styled from "styled-components";
import { InlineLink, Text } from "../components/content/content";

export default function Home() {
  return (
    <>
      <Header>WHAT IS THIS</Header>
      <Main>POKUS</Main>
      <Footer>
        <Text>
          Created by <InlineLink href="/">Marek Fodor</InlineLink>
        </Text>
      </Footer>
    </>
  );
}

const Footer = styled.footer`
  display: flex;
  color: ${({ theme }) => theme.text};
  border-top: 3px solid ${({ theme }) => theme.primary};
  height: 60px;
  padding: 15px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
`;

const Header = styled.header`
  display: flex;
  background: url("gradientBG.svg");
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 50px;
  background-position-y: 100%;
  min-height: 750px;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
