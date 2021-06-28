import { device } from "components/container/device";
import styled, { CSSObject } from "styled-components";

interface SquaresProps {
  count: number;
  style?: CSSObject;
}

const SquaresContainer = styled.svg`
  position: absolute;
  display: none;

  @media ${device.laptop} {
    display: block;
  }
`;

const Squares = ({ count, style }: SquaresProps) => {
  const arr = new Array(count);
  return (
    <SquaresContainer
      style={style}
      width="180"
      height="180"
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="12" height="12" rx="1" fill="#C599FF" />
      <rect y="48" width="12" height="12" rx="1" fill="#C599FF" />
      <rect y="96" width="12" height="12" rx="1" fill="#C599FF" />
      <rect y="144" width="12" height="12" rx="1" fill="#C599FF" />
      <rect x="24" width="12" height="12" rx="1" fill="#C599FF" />
      <rect x="24" y="48" width="12" height="12" rx="1" fill="#C599FF" />
      <rect x="24" y="96" width="12" height="12" rx="1" fill="#C599FF" />
      <rect x="24" y="144" width="12" height="12" rx="1" fill="#C599FF" />
      <rect x="48" width="12" height="12" rx="1" fill="#C599FF" />
      <rect x="48" y="48" width="12" height="12" rx="1" fill="#C599FF" />
      <rect x="48" y="96" width="12" height="12" rx="1" fill="#C599FF" />
      <rect x="48" y="144" width="12" height="12" rx="1" fill="#C599FF" />
      <rect x="72" width="12" height="12" rx="1" fill="#C599FF" />
      <rect x="72" y="48" width="12" height="12" rx="1" fill="#C599FF" />
      <rect x="72" y="96" width="12" height="12" rx="1" fill="#C599FF" />
      <rect x="72" y="144" width="12" height="12" rx="1" fill="#C599FF" />
      <rect x="96" width="12" height="12" rx="1" fill="#C599FF" />
      <rect x="144" width="12" height="12" rx="1" fill="#C599FF" />
      <rect x="96" y="48" width="12" height="12" rx="1" fill="#C599FF" />
      <rect x="144" y="48" width="12" height="12" rx="1" fill="#C599FF" />
      <rect x="96" y="96" width="12" height="12" rx="1" fill="#C599FF" />
      <rect x="96" y="144" width="12" height="12" rx="1" fill="#C599FF" />
      <rect x="144" y="96" width="12" height="12" rx="1" fill="#C599FF" />
      <rect x="144" y="144" width="12" height="12" rx="1" fill="#C599FF" />
      <rect x="120" width="12" height="12" rx="1" fill="#C599FF" />
      <rect x="168" width="12" height="12" rx="1" fill="#C599FF" />
      <rect x="120" y="48" width="12" height="12" rx="1" fill="#C599FF" />
      <rect x="168" y="48" width="12" height="12" rx="1" fill="#C599FF" />
      <rect x="120" y="96" width="12" height="12" rx="1" fill="#C599FF" />
      <rect x="120" y="144" width="12" height="12" rx="1" fill="#C599FF" />
      <rect x="168" y="96" width="12" height="12" rx="1" fill="#C599FF" />
      <rect x="168" y="144" width="12" height="12" rx="1" fill="#C599FF" />
      <rect y="24" width="12" height="12" rx="1" fill="#C599FF" />
      <rect y="72" width="12" height="12" rx="1" fill="#C599FF" />
      <rect y="120" width="12" height="12" rx="1" fill="#C599FF" />
      <rect y="168" width="12" height="12" rx="1" fill="#C599FF" />
      <rect x="24" y="24" width="12" height="12" rx="1" fill="#C599FF" />
      <rect x="24" y="72" width="12" height="12" rx="1" fill="#C599FF" />
      <rect x="24" y="120" width="12" height="12" rx="1" fill="#C599FF" />
      <rect x="24" y="168" width="12" height="12" rx="1" fill="#C599FF" />
      <rect x="48" y="24" width="12" height="12" rx="1" fill="#C599FF" />
      <rect x="48" y="72" width="12" height="12" rx="1" fill="#C599FF" />
      <rect x="48" y="120" width="12" height="12" rx="1" fill="#C599FF" />
      <rect x="48" y="168" width="12" height="12" rx="1" fill="#C599FF" />
      <rect x="72" y="24" width="12" height="12" rx="1" fill="#C599FF" />
      <rect x="72" y="72" width="12" height="12" rx="1" fill="#C599FF" />
      <rect x="72" y="120" width="12" height="12" rx="1" fill="#C599FF" />
      <rect x="72" y="168" width="12" height="12" rx="1" fill="#C599FF" />
      <rect x="96" y="24" width="12" height="12" rx="1" fill="#C599FF" />
      <rect x="144" y="24" width="12" height="12" rx="1" fill="#C599FF" />
      <rect x="96" y="72" width="12" height="12" rx="1" fill="#C599FF" />
      <rect x="144" y="72" width="12" height="12" rx="1" fill="#C599FF" />
      <rect x="96" y="120" width="12" height="12" rx="1" fill="#C599FF" />
      <rect x="96" y="168" width="12" height="12" rx="1" fill="#C599FF" />
      <rect x="144" y="120" width="12" height="12" rx="1" fill="#C599FF" />
      <rect x="144" y="168" width="12" height="12" rx="1" fill="#C599FF" />
      <rect x="120" y="24" width="12" height="12" rx="1" fill="#C599FF" />
      <rect x="168" y="24" width="12" height="12" rx="1" fill="#C599FF" />
      <rect x="120" y="72" width="12" height="12" rx="1" fill="#C599FF" />
      <rect x="168" y="72" width="12" height="12" rx="1" fill="#C599FF" />
      <rect x="120" y="120" width="12" height="12" rx="1" fill="#C599FF" />
      <rect x="120" y="168" width="12" height="12" rx="1" fill="#C599FF" />
      <rect x="168" y="120" width="12" height="12" rx="1" fill="#C599FF" />
      <rect x="168" y="168" width="12" height="12" rx="1" fill="#C599FF" />
    </SquaresContainer>
  );
};

export default Squares;

{
  /* <svg
        width="180"
        height="180"
        viewBox="0 0 180 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {arr.map((el, i) => (
          <rect key={i} width={i * 12} height={i * 12} rx="1" fill="#C599FF" />
        ))}
      </svg> */
}
