import styled from "styled-components";
import { Text } from "./content";

export const Field = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Field.Label = ({ children, ...restProps }) => {
  return (
    <Text as="label" {...restProps}>
      {children}
    </Text>
  );
};

Field.Label.displayName = "Label";

Field.Input = (props) => {
  return <Input {...props}></Input>;
};

Field.Input.displayName = "Input";

Field.FakeInput = ({ children, ...restProps }) => {
  return <FakeInput {...restProps}>{children}</FakeInput>;
};
Field.FakeInput.displayName = "FakeInput";

Field.Button = ({ children, ...restProps }) => {
  return <Button {...restProps} value={children} />;
};
Field.Button.displayName = "Button";

const Button = styled.input`
  display: flex;
  width: 60px;
  height: 28px;
  background-color: ${({ theme }) => theme.primary};
  align-items: center;
  justify-content: center;
  align-self: end;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  width: 100%;
`;

const Input = styled.input`
  display: flex;
  width: 100%;
  height: 28px;
  font-size: 16px;
  padding: 0 4px;
  background-color: ${({ theme }) => theme.lightDark};
  color: ${({ theme }) => theme.text};
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.primary};
  }
  &[data-size="big"] {
    padding: 4px;
    height: 84px;
  }
`;

const FakeInput = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 28px;
  font-size: 16px;
  padding: 0 4px;
  background-color: ${({ theme }) => theme.mediumDark};
  color: ${({ theme }) => theme.text + "3F"};
`;
