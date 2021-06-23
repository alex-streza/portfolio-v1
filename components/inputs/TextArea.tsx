import { device } from "components/container/device";
import styled from "styled-components";

interface InputProps extends React.HTMLProps<HTMLTextAreaElement> {
  label: string;
  name: string;
  type?: "text";
  placeholder?: string;
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  margin-bottom: 8px;

  @media ${device.tablet} {
    font-size: 16px;
  }
`;

const TextInput = styled.textarea`
  border-radius: ${({ theme }) => theme.borderRadius};
  min-height: 160px;
  padding: 20px 16px;
  font-size: 14px;
  border: 2px solid rgba(0, 0, 0, 0.15);
  outline: none;
  max-width: 100%;
  line-height: 28px;

  @media ${device.tablet} {
    padding: 20px;
    height: 48px;
    font-size: 16px;
  }

  :focus {
    border-color: ${({ theme }) => theme.palette.primary};
    transition: all 0.2s ease-in-out;
  }
`;

const TextArea = (props: InputProps) => {
  const { label, onChange, placeholder, name } = props;
  return (
    <InputContainer>
      <Label>{label}</Label>
      <TextInput name={name} placeholder={placeholder} onChange={onChange} />
    </InputContainer>
  );
};

export default TextArea;
