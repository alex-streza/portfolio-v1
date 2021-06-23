import { device } from "components/container/device";
import styled, { CSSObject } from "styled-components";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
  name: string;
  type?: "text";
  style?: CSSObject;
  placeholder?: string;
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  height: 20px;
  margin-bottom: 8px;

  @media ${device.tablet} {
    font-size: 16px;
  }
`;

const TextInput = styled.input`
  border-radius: ${({ theme }) => theme.borderRadius};
  height: 40px;
  padding: 0px 16px;
  font-size: 14px;
  border: 2px solid rgba(0, 0, 0, 0.15);
  outline: none;
  font-weight: 500;

  @media ${device.tablet} {
    padding: 0px 20px;
    height: 48px;
    font-size: 16px;
  }

  :focus {
    border-color: ${({ theme }) => theme.palette.primary};
    transition: all 0.2s ease-in-out;
  }
`;

const Input = (props: InputProps) => {
  const { label, onChange, placeholder, name, type = "text", style } = props;
  return (
    <InputContainer style={style}>
      <Label>{label}</Label>
      <TextInput
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </InputContainer>
  );
};

export default Input;
