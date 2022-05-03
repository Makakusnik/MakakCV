import styled from "styled-components";
import { Text } from "./content";
import Image from "next/image";
import { popUp } from "../decorations/animations";

export const IconLink = (props) => {
  return (
    <Container delay={props.delay} as={props.as}>
      <A href={props.href}>
        <Image alt={props.alt} width="28" height="28" src={props.src}></Image>
        <Text>{props.children}</Text>
      </A>
    </Container>
  );
};

const A = styled.a`
  display: flex;
  position: relative;
  width: 100%;
  height: auto;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  &:link {
    text-decoration: none;
  }
  &:hover {
    span {
      transform: scale(1.2);
    }
  }
  &:active {
  }
  &:focus {
    outline: none;
    p {
      transition: color 0.2s ease-in;
      color: ${({ theme }) => theme.primary};
    }
    span {
      ${({ theme }) => `filter: drop-shadow(0px 0px 4px ${theme.primary});`}
    }
  }
  &:visited {
  }
  span {
    transition: filter 0.3s ease-in-out, transform 0.2s ease-in-out;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 84px;
  animation: ${popUp} ease 1s;
  animation-delay: ${({ delay }) => delay};
  animation-fill-mode: backwards;
`;
