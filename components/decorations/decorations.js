import styled, { css, keyframes } from "styled-components";

export const BigCircle = styled.div`
  border-radius: 50%;
  min-width: ${({ diameter }) => diameter + "px"};
  min-height: ${({ diameter }) => diameter + "px"};
  border: 1px solid ${({ theme }) => theme.lightDark};
  position: relative;
`;

export const rotate = keyframes`
  from {
    transform: translate(35px, -10px) rotate(0deg);
  }
  to {
    transform: translate(35px, -10px) rotate(359deg);
  }
`;

export const FilledCircle = styled.div`
  border-radius: 50%;
  min-width: ${({ diameter }) => diameter + "px"};
  min-height: ${({ diameter }) => diameter + "px"};
  animation: ${rotate} 3s linear infinite;
  transform-origin: 10px 55px;
  background-color: ${({ theme }) => theme.balls};
  position: absolute;
`;
