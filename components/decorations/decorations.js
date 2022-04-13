import styled, { keyframes } from "styled-components";

export const BigCircle = styled.div`
  border-radius: 50%;
  min-width: 90px;
  min-height: 90px;
  border: 1px solid blue;
  position: relative;
`;

const rotate = keyframes`
  from {
    transform: translate(35px, -10px) rotate(0deg);
  }
  to {
    transform: translate(35px, -10px) rotate(359deg);
  }
`;

export const FilledCircle = styled.div`
  border-radius: 50%;
  min-width: 20px;
  min-height: 20px;
  animation: ${rotate} 3s linear infinite;
  transform-origin: 10px 55px;
  background-color: red;
  position: absolute;
`;
