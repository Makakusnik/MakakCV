import styled from "styled-components";
import { Text } from "./content";
import Image from "next/image";

export const IntraPageLink = (props) => {
  return (
    <Container as={props.as}>
      <A href={props.href}>
        <Image alt={props.alt} width="32" height="32" src={props.src}></Image>
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
      ${({ theme }) => `filter: drop-shadow(0px 0px 2px ${theme.primary});`}
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
  width: 84px;
`;
