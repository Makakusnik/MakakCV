import styled, { keyframes } from "styled-components";
import { rotate } from "./animations";
export const Animated = styled.div`
  z-index: 0;
`;

export const BigCircle = styled.div`
  border-radius: 50%;
  min-width: ${({ diameter }) => diameter + "px"};
  min-height: ${({ diameter }) => diameter + "px"};
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
`;

export const FilledCircle = styled.div`
  left: ${({ parentDiameter, diameter }) =>
    `${parentDiameter / 2 - diameter / 2}px`};
  top: ${({ diameter }) => `-${diameter / 2}px`};
  border-radius: 50%;
  min-width: ${({ diameter }) => diameter + "px"};
  min-height: ${({ diameter }) => diameter + "px"};
  animation: ${rotate} 3s linear infinite;
  transform-origin: ${({ parentDiameter, diameter }) =>
    `${diameter / 2}px ${parentDiameter / 2 + diameter / 2}px`};
  background-color: ${({ theme }) => theme.balls};
  position: absolute;
  animation-delay: ${({ delay }) => delay};
  animation-duration: ${({ speed }) => speed};
`;
