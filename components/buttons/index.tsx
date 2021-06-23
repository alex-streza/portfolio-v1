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
  background-color: ${({ theme }) => theme.palette.secondary};
  height: 48px;
  border: none;
  padding: 4px 12px;
  font-weight: 600;
  cursor: pointer;
  align-items: center;
  display: flex;

  @media ${device.mobileL} {
    max-width: 200px;
    height: 64px;
    font-size: 20px;
  }

  :hover {
    background-color: ${({ theme }) =>
      tinycolor(theme.palette.secondary).lighten().toHexString()};
  }

  :active {
    background-color: ${({ theme }) =>
      tinycolor(theme.palette.secondary).darken().toHexString()};
  }

  svg {
    margin-left: auto;
  }
`;

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { icon, label, style, onClick } = props;
  const isLargePhone = useMediaQuery({ minWidth: 425 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  let iconSize = "24px";
  if (isLargePhone) iconSize = "32px";
  else if (isDesktop) iconSize = "36px";

  return (
    <StyledButton type="button" style={style} onClick={onClick}>
      {label}
      {icon && <Icon name={icon} width={iconSize} />}
    </StyledButton>
  );
};

export default Button;
