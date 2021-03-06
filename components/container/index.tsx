import styled, { CSSObject } from "styled-components";
import { theme } from "types/theme";
import { device } from "./device";

interface ResponsiveContainerProps {
  children: JSX.Element | JSX.Element[] | any;
  withNav?: boolean;
  contrast?: boolean;
  style?: CSSObject;
  withPadding?: boolean;
}

const calculateHeight = (withNav?: boolean, withPadding?: boolean) => {
  if (withNav && withPadding) {
    return `height: calc(100vh - 68px - 40px);

    @media ${device.tablet} {
      height: calc(100vh - 100px - 200px);
    }`;
  } else if (withNav) {
    return `height: calc(100vh - 68px);

    @media ${device.tablet} {
      height: calc(100vh - 100px);
    }`;
  } else return "height: 100vh;";
};

export const Container = styled.div<ResponsiveContainerProps>`
  display: flex;
  padding: 0 20px;
  position: relative;
  background-color: ${({ contrast, theme }) =>
    contrast ? theme.palette.primary : "none"};
  @media ${device.laptop} {
    padding: 0 170px;
  }
  ${({ withNav }) => calculateHeight(withNav)}
`;

const ResponsiveContainer = ({
  children,
  ...props
}: ResponsiveContainerProps) => {
  return <Container {...props}>{children}</Container>;
};

export default ResponsiveContainer;
