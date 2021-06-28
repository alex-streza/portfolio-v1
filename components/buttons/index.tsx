import { device } from "components/container/device";
import styled from "styled-components";
import Icon from "components/icons";
import { useMediaQuery } from "react-responsive";
import tinycolor from "tinycolor2";

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  disabled?: boolean;
  label?: string;
  icon?: string;
}

const StyledButton = styled.button`
  color: #ffffff;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme, disabled }) =>
    !disabled
      ? tinycolor(theme.palette.secondary).darken().toHexString()
      : theme.palette.disabled};
  height: 48px;
  border: none;
  padding: 4px 12px;
  font-weight: 600;
  cursor: pointer;
  align-items: center;
  display: flex;
  cursor: ${({ disabled }) => disabled && "not-allowed"};

  @media ${device.mobileL} {
    max-width: 200px;
    height: 64px;
    font-size: 20px;
  }

  :hover {
    background-color: ${({ theme, disabled }) =>
      !disabled && tinycolor(theme.palette.secondary).toHexString()};
  }

  :active {
    background-color: ${({ theme, disabled }) =>
      !disabled && tinycolor(theme.palette.secondary).darken(15).toHexString()};
  }

  svg {
    margin-left: 12px;
  }
`;

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { icon, label, ...rest } = props;
  const isLargePhone = useMediaQuery({ minWidth: 425 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  let iconSize = "24px";
  if (isLargePhone) iconSize = "32px";
  else if (isDesktop) iconSize = "36px";

  return (
    <StyledButton type="button" {...(rest as any)}>
      {label}
      {icon && <Icon name={icon} width={iconSize} />}
    </StyledButton>
  );
};

export default Button;
