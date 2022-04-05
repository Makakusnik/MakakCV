import styled, { css } from "styled-components";
import { glowAnimation } from "./animations";

export const BigTriangleBackground = (props) => {
  return (
    <SVGContainer aria-hidden="true" color={props.color}>
      <Svg glow={props.glow} viewBox="0 0 1 0.6">
        <path d="M1 0.15 L0.5 0.55 0 0.15 V 0 l 0.5 0.4 L1 0z"></path>
        <clipPath id="triangle" clipPathUnits="objectBoundingBox">
          <path d="M1 0.1 L0.5 0.92 0 0.1 V 0 l 1 0z"></path>
        </clipPath>
      </Svg>
    </SVGContainer>
  );
};

export const SmallTriangleBackground = (props) => {
  return (
    <SVGContainer aria-hidden="true" color={props.color}>
      <Svg glow={props.glow} viewBox="0 0 1 0.5">
        <path d="M1 0.075 L0.5 0.5 0 0.075 V 0 l 0.5 0.425 L1 0z"></path>
        <clipPath id="triangle" clipPathUnits="objectBoundingBox">
          <path d="M1 0.1 L0.5 0.6 0 0.1 V 0 l 1 0z"></path>
        </clipPath>
      </Svg>
    </SVGContainer>
  );
};

const Svg = styled.svg`
  ${({ glow }) =>
    glow &&
    css`
      animation: ${glowAnimation} 2s ease-in-out infinite;
    `};
  fill: ${({ theme }) => theme.primary};
`;

const SVGContainer = styled.div`
  position: relative;
  width: 100%;
  z-index: 0;
  background-color: ${({ theme }) => theme.dark};

  &::before {
    display: flex;
    content: "";
    position: absolute;
    clip-path: url("#triangle");
    width: 100%;
    height: calc(100% - 24px);
    top: -1px;
    background-color: ${({ theme, color }) => theme[color]};
  }
`;
