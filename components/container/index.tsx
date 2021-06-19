import styled from "styled-components";
import { device } from "./device";

interface ResponsiveContainerProps {
  children: JSX.Element | JSX.Element[];
  direction?: "row" | "column";
}

export const Container = styled.div<ResponsiveContainerProps>`
  padding: 0 20px;
  display: flex;
  flex-direction: ${({ direction }) => direction};

  @media ${device.tablet} {
    padding: 0 80px;
  }

  @media ${device.laptop} {
    padding: 0 170px;
  }
`;

const ResponsiveContainer = ({
  children,
  direction = "row",
}: ResponsiveContainerProps) => {
  return <Container direction={direction}>{children}</Container>;
};

export default ResponsiveContainer;
