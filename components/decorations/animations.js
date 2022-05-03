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
  &[data-inviewport="showUp"] {
    transition: opacity 0s linear;
    opacity: 0;
  }
  &[data-inviewport="showUp"].is-inViewport {
    transition-timing-function: ease;
    transition-duration: 0.3s;
    transition-delay: ${({ delay }) => delay || "0.4s"};
    transition-property: opacity;
    opacity: 1;
  }
  &[data-inviewport="popUp"] {
    transition: transform 0s linear, opacity 0s linear;
    transform: translateY(30px);
    opacity: 0;
  }
  &[data-inviewport="popUp"].is-inViewport {
    transition-timing-function: ease;
    transition-duration: 0.3s;
    transition-delay: ${({ delay }) => delay || "0.4s"};
    transition-property: transform, opacity;
    transform: translateY(0);
    opacity: 1;
  }

  &[data-inviewport="popRight"] {
    transition: transform 0s linear, opacity 0s linear;
    transition-property: transform, opacity;
    transform: translateX(-50px);
    opacity: 0;
  }
  &[data-inviewport="popRight"].is-inViewport {
    transition-timing-function: ease;
    transition-duration: 0.3s;
    transition-delay: ${({ delay }) => delay || "0.4s"};
    transition-property: transform, opacity;
    transform: translateX(0);
    opacity: 1;
  }
  &[data-inviewport="popLeft"] {
    transition-timing-function: linear;
    transition-duration: 0s;
    transition-delay: 0s;
    transition-property: transform, opacity;
    transform: translateX(50px);
    opacity: 0;
  }
  &[data-inviewport="popLeft"].is-inViewport {
    transition-timing-function: ease;
    transition-duration: 0.3s;
    transition-delay: ${({ delay }) => delay || "0.4s"};
    transition-property: transform, opacity;
    transform: translateX(0);
    opacity: 1;
  }
`;
