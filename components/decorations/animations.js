import { keyframes } from "styled-components";

export const glowAnimation = (props) => keyframes`
    0% { 
      filter: drop-shadow(0px 0px 2px ${props.theme.primary});
    }
    50% {
      filter: drop-shadow(0px 0px 6px ${props.theme.primary});
    }
    100% { 
      filter: drop-shadow(0px 0px 2px ${props.theme.primary});
    }
`;
