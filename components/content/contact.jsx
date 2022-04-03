import styled from "styled-components";
import { ImageContainer as ImgContainer, Text } from "./content";

export const Contact = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Contact.ImageContainer = (props) => {
  return <ImageContainer {...props} />;
};

Contact.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

const ImageContainer = styled(ImgContainer)`
  width: 30px;
  height: 30px;
  background-color: transparent;
`;

const Container = styled.a`
  transition: transform 0.4s ease-in-out;
  column-gap: 25px;
  align-items: center;
  width: 230px;
  display: flex;
  &:link {
    text-decoration: none;
  }
  &:hover {
    transform: scale(1.1);
  }
`;
