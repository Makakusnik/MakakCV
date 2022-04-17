import styled from "styled-components";
import { ImageContainer as ImgContainer, Text } from "./content";

export const Contact = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Contact.ImageContainer = ({ children, ...restProps }) => {
  return <ImageContainer {...restProps}>{children}</ImageContainer>;
};
Contact.ImageContainer.displayName = "Image Container";

Contact.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

Contact.Text.displayName = "Text";

const ImageContainer = styled(ImgContainer)`
  min-width: 30px;
  height: 30px;
  background-color: transparent;
`;

const Container = styled.a`
  transition: transform 0.4s ease-in-out;
  column-gap: 25px;
  align-items: center;
  padding: 5px;
  width: 230px;
  display: flex;
  &:link {
    text-decoration: none;
  }
  &:hover {
    user-select: ${({ userSelect }) => userSelect};
    cursor: pointer;
    transform: scale(1.1);
  }
`;