import { device } from "components/container/device";
import { ReactNode } from "react";
import styled, { CSSObject } from "styled-components";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  type?: "text";
  style?: CSSObject;
  placeholder?: string;
  error?: string;
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label<any>`
  font-size: 14px;
  font-weight: 600;
  height: 20px;
  margin-bottom: 8px;
  color: ${({ theme, error }) => (error ? theme.palette.error : "initial")};

  @media ${device.tablet} {
    font-size: 16px;
  }
`;

const TextInput = styled.input<{ error: boolean }>`
  border-radius: ${({ theme }) => theme.borderRadius};
  height: 40px;
  padding: 0px 16px;
  font-size: 14px;
  border: 2px solid
    ${({ error, theme }) =>
      error ? theme.palette.error : "rgba(0, 0, 0, 0.15)"};
  font-weight: 500;

  @media ${device.tablet} {
    padding: 0px 20px;
    height: 48px;
    font-size: 16px;
  }

  :focus {
    border-color: ${({ theme, error }) =>
      error ? theme.palette.error : theme.palette.primary};
    outline: 1px solid
      ${({ error, theme }) =>
        error ? theme.palette.error : "rgba(0, 0, 0, 0.15)"};
    transition: all 0.2s ease-in-out;
  }
`;

export const ErrorLabel = styled.span`
  margin-top: 4px;
  color: ${({ theme }) => theme.palette.error};
  font-weight: 600;
  font-size: 12px;
  min-height: 14px;

  @media ${device.tablet} {
    font-size: 14px;
    min-height: 16px;
  }
`;

const Input = (props: InputProps) => {
  const { label, placeholder, error, type = "text", style, ...rest } = props;
  const hasError = error != null && error !== "";

  return (
    <InputContainer style={style}>
      <Label for={rest.id} error={hasError}>
        {label}
      </Label>
      <TextInput
        type={type}
        placeholder={placeholder}
        error={hasError}
        {...(rest as any)}
      />
      <ErrorLabel>{error}</ErrorLabel>
    </InputContainer>
  );
};

export default Input;
