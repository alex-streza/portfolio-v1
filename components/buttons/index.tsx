import { device } from "components/container/device";
import styled from "styled-components";

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  disabled?: boolean;
  label?: string;
  icon?: string;
  onClick?: () => void;
}

const StyledButton = styled.button`
  color: #ffffff;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.palette.secondary};
  width: 140px;
  height: 40px;
  border: none;
  padding: 4px 12px;
  font-weight: 600;
  cursor: pointer;
  align-items: center;
  display: flex;

  @media ${device.mobileL} {
    width: 200px;
    height: 64px;
    font-size: 20px;
  }
`;

interface IconProps {
  name: string;
  height?: string;
  width?: string;
  isWhite?: boolean;
}

export const Icon = styled.figure<IconProps>`
  background: no-repeat;
  background-image: url(${({ name }) => "/icons/" + name + "_mobile.svg"});
  height: ${({ height }) => height ?? "16px"};
  width: ${({ width }) => width ?? "16px"};
`;

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { icon, label } = props;
  return (
    <StyledButton type="button">
      {label}
      {/* {icon && <Icon className="icon" name={icon}></Icon>} */}
    </StyledButton>
  );
};

export default Button;
