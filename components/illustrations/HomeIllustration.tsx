import { device } from "components/container/device";
import { useEffect } from "react";
import styled from "styled-components";

const IllustrationContainer = styled.div`
  position: absolute;
  z-index: -1;
  left: 0;
  width: 100vw;
  height: 100%;
  margin: 0;
  height: calc(100vh - 68px);

  @media ${device.tablet} {
    height: calc(100vh - 100px);
  }
`;
const HomeIllustration = () => {
  return (
    <IllustrationContainer>
      <svg
        width="80%"
        height="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="950" height="100%" fill="#6F06FA" />
        <path
          d="M950 78.8735C950 72.246 955.373 66.8735 962 66.8735H1088C1094.63 66.8735 1100 72.2461 1100 78.8735V211.608C1100 218.236 1094.63 223.608 1088 223.608H950V78.8735Z"
          fill="#6F06FA"
        />
        <path
          d="M950 380.343H1088C1094.63 380.343 1100 385.715 1100 392.343V519.853C1100 526.48 1094.63 531.853 1088 531.853H950V380.343Z"
          fill="#6F06FA"
        />
        <ellipse
          cx="878.014"
          cy="456.098"
          rx="72.0144"
          ry="74.7102"
          fill="#37DBFF"
        />
        <rect
          x="1102"
          y="223.608"
          width="150"
          height="156.735"
          rx="12"
          fill="#A561FF"
        />
        <path
          d="M801 235.608C801 228.981 806.373 223.608 813 223.608H951V380.343H813C806.373 380.343 801 374.97 801 368.343V235.608Z"
          fill="white"
        />
        <path
          d="M801 543.853C801 537.226 806.373 531.853 813 531.853H951V676.588C951 683.215 945.627 688.588 939 688.588H813C806.373 688.588 801 683.215 801 676.588V543.853Z"
          fill="white"
        />
        <rect
          x="651"
          y="378.253"
          width="150"
          height="156.735"
          rx="12"
          fill="#C599FF"
        />
        <ellipse cx="1026" cy="301.975" rx="75" ry="78.3673" fill="#FF64CB" />
      </svg>
    </IllustrationContainer>
  );
};

export default HomeIllustration;
