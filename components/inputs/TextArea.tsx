import { device } from "components/container/device";
import { ErrorLabel } from "components/inputs";
import { forwardRef, ReactNode } from "react";
import styled from "styled-components";

interface InputProps extends React.HTMLProps<HTMLTextAreaElement> {
  name: string;
  error?: string;
  type?: "text";
  placeholder?: string;
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label<{ error: boolean }>`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  margin-bottom: 8px;
  color: ${({ theme, error }) => (error ? theme.palette.error : "initial")};

  @media ${device.tablet} {
    font-size: 16px;
  }
`;

const TextInput = styled.textarea<{ error: boolean }>`
  border-radius: ${({ theme }) => theme.borderRadius};
  min-height: 160px;
  padding: 20px 16px;
  font-size: 14px;
  border: 2px solid
    ${({ error, theme }) =>
      error ? theme.palette.error : "rgba(0, 0, 0, 0.15)"};
  outline: none;
  max-width: 100%;
  line-height: 28px;

  @media ${device.tablet} {
    padding: 20px;
    height: 48px;
    font-size: 16px;
  }

  :focus {
    border-color: ${({ theme, error }) =>
      error ? theme.palette.error : theme.palette.primary};
    transition: all 0.2s ease-in-out;
  }
`;

const TextArea = forwardRef((props: InputProps, ref: any) => {
  const { label, placeholder, error, ...rest } = props;
  const hasError = error != null && error !== "";

  return (
    <InputContainer>
      <Label error={hasError}>{label}</Label>
      <TextInput
        placeholder={placeholder}
        ref={ref}
        {...(rest as any)}
        error={hasError}
      />
      <ErrorLabel>{error}</ErrorLabel>
    </InputContainer>
  );
});

export default TextArea;
