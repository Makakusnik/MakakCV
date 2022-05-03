import styled from "styled-components";
import { ImageContainer as ImgContainer, Text } from "./content";

export const Skill = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Skill.ImageContainer = ({ children, ...restProps }) => {
  return <ImageContainer {...restProps}>{children}</ImageContainer>;
};
Skill.ImageContainer.displayName = "ImageContainer";

Skill.Title = ({ children, ...restProps }) => {
  return (
    <Text textAlign="center" {...restProps}>
      {children}
    </Text>
  );
};
Skill.Title.displayName = "Title";

const ImageContainer = styled(ImgContainer)`
  width: 40px;
  height: 40px;
  background-color: transparent;
  fill: ${({ theme }) => theme.primary};
`;

const Container = styled.div`
  transition: transform 0.2s ease-in-out, background-color 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  align-items: center;
  padding: 5px 0;
  border-radius: 5px;
  &:hover {
    transform: scale(1.2);
  }
`;
