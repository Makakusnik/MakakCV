import styled, { keyframes } from "styled-components";

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
    opacity: 1;
  }
  25%{ 
         opacity: 0;
  }
  45%{
    opacity: 0.3;

  }
  55% {
    opacity: 0.3;
  }
  75%{ 
         opacity: 0;
  }
  to {
    transform: rotate(359deg);
    opacity: 1;
  }
`;

export const popUp = keyframes`
  from {
   top: 30px;
    opacity: 0;
  }
  to {
   top:0;
    opacity: 1;
  }
`;

export const popRight = keyframes`
  from {
   right: 30px;
    opacity: 0;
  }
  to {
   right:0;
    opacity: 1;
  }
`;

export const Animate = styled.div`
  position: relative;
  display: inherit;
  justify-content: inherit;
  align-items: inherit;
  flex-direction: inherit;
  color: inherit;
  flex-wrap: inherit;
  font-family: inherit;
  word-spacing: inherit;
  width: inherit;
  line-height: inherit;
  white-space: inherit;
`;
