import Image from "next/image";
import styled, { css } from "styled-components";
import { Text, Title } from "./content";

export const ExperienceItemLeft = () => {
  //TODO: Sprav z toho compound component
  return (
    <Container>
      <Circle></Circle>
      <Content>
        <Timestamp>
          <time dateTime="P182D">4 / 2021 - 9 / 2022</time>
        </Timestamp>
        <Title fontSize="18px" as="h3">
          SOŠ Handlová
        </Title>
        <Text>Technické Lýceum</Text>
        <ImageContainer>
          <Image
            layout="fixed"
            width="200"
            height="150"
            src="/handlova.png"
            alt={"Handlova"}
          ></Image>
          <figcaption></figcaption>
        </ImageContainer>
      </Content>
    </Container>
  );
};

export const ExperienceItem = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

ExperienceItem.Circle = (props) => {
  return <Circle {...props} />;
};
ExperienceItem.Circle.displayName = "Circle";

ExperienceItem.Content = ({ children, ...restProps }) => {
  return <Content {...restProps}>{children}</Content>;
};
ExperienceItem.Content.displayName = "Content";

ExperienceItem.Heading = ({ children, ...restProps }) => {
  return <Heading {...restProps}>{children}</Heading>;
};
ExperienceItem.Heading.displayName = "Heading";

ExperienceItem.Timestamp = ({ children, ...restProps }) => {
  return <Timestamp {...restProps}>{children}</Timestamp>;
};
ExperienceItem.Timestamp.displayName = "Timestamp";

ExperienceItem.PictureContainer = ({ children, ...restProps }) => {
  return <ImageContainer {...restProps}>{children}</ImageContainer>;
};
ExperienceItem.PictureContainer.displayName = "PictureContainer";

const Heading = styled.div``;

const ImageContainer = styled.figure`
  display: flex;
  position: absolute;
  opacity: ${({ opacity }) => opacity || 0.03};
  right: ${({ right }) => (right ? right + "px" : "0px")};
  top: ${({ top }) => (top ? top + "px" : "0px")};
  z-index: 1;
  border-radius: 25%;
  overflow: hidden;
  & figcaption {
    display: none;
  }
`;

const Timestamp = styled.time`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  height: 25px;
  width: fit-content;
  position: relative;
  color: ${({ theme }) => theme.text};
  font-family: Lato;
  background-color: ${({ theme }) => theme.lightDark + "4F"};
  padding: 0 10px;
  z-index: 2;
  &:before {
    content: "";
    position: absolute;
    width: 0px;
    height: 0px;
    bottom: 0;
    border: 12.5px solid transparent;
  }
  ${({ left }) =>
    left
      ? css`
          &:before {
            border-right: 10px solid ${({ theme }) => theme.lightDark + "4F"};
            right: 100%;
          }
        `
      : css`
          align-self: flex-end;
          &:before {
            border-left: 10px solid ${({ theme }) => theme.lightDark + "4F"};
            left: 100%;
          }
        `};
`;

const Content = styled.div`
  display: flex;
  flex-grow: 1;
  height: 200px;
  flex-direction: column;
  position: relative;
  margin: 0 25px;
`;
const Circle = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  z-index: 2;
  background-color: ${({ theme, show }) =>
    show ? theme.primary : "transparent"};
`;

const Container = styled.div`
  display: flex;
  width: 100%;
`;
