import styled from "styled-components";

export const Column = styled.div`
  display: flex;
  row-gap: ${({ rowGap }) => rowGap};
  column-gap: ${({ columnGap }) => columnGap};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  flex-direction: column;
  height: ${({ height }) => height || "fit-content"};
  width: ${({ width }) => width || "fit-content"};
`;

export const Row = styled.div`
  display: flex;
  row-gap: ${({ rowGap }) => rowGap};
  column-gap: ${({ columnGap }) => columnGap};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  height: ${({ height }) => height || "fit-content"};
  width: ${({ width }) => width || "fit-content"};
`;
