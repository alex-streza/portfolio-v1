import styled from "styled-components";

const IllustrationContainer = styled.div`
  position: absolute;
  bottom: 0;
  z-index: -1;
`;
const FooterIllustration = () => {
  const width = window.innerWidth;

  return (
    <IllustrationContainer>
      <svg
        width={width}
        height="630"
        viewBox={`0 0 ${width} 630`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          id="Rectangle"
          y="450"
          width={window.innerWidth}
          height="200"
          fill="#6E00FF"
        />
        <rect x={width - 170} width="150" height="150" rx="12" fill="#6E00FF" />
        <circle cx={width - 395} cy="225" r="75" fill="#FF64CB" />
        <circle cx={width - 545} cy="375" r="75" fill="#37DBFF" />
        <rect
          x={width - 320}
          y="150"
          width="150"
          height="150"
          rx="12"
          fill="#A561FF"
        />
        <rect
          x={width - 170}
          y={300}
          width="150"
          height="150"
          rx="12"
          fill="#A561FF"
        />
        <circle cx={width - 95} cy="225" r="75" fill="#37DBFF" />
        <circle cx={width - 245} cy="375" r="75" fill="#FF64CB" />
        <rect x={width - 320} y="450" width="150" height="150" fill="#ffffff" />
        <rect
          x={width - 470}
          y="300"
          width="150"
          height="150"
          rx="12"
          fill="#6E00FF"
        />
      </svg>
    </IllustrationContainer>
  );
};

export default FooterIllustration;
