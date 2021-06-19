import ResponsiveContainer from "components/container";
import { device } from "components/container/device";
import React, { Fragment } from "react";
import styled from "styled-components";
import Button from "components/buttons";

const Illustration = styled.figure`
  position: absolute;
  z-index: -1;
  left: 0;
  background: no-repeat;
  background-image: url("/icons/background.svg");
  width: 80vw;
  height: calc(100vh - 68px);
  margin: 0;

  @media ${device.tablet} {
    height: calc(100vh - 100px);
  }
`;

const Title = styled.h1`
  max-width: 200px;
  color: #ffffff;
  margin-top: 40px;

  @media ${device.mobileL} {
    max-width: 400px;
    margin-top: 100px;
  }

  @media ${device.laptop} {
    max-width: 520px;
    margin-top: 120px;
  }
`;

const Subtitle = styled.p`
  font-size: 16px;
  line-height: 156.6%;
  letter-spacing: 0.12em;
  width: 230px;
  color: #ffffff;
  font-weight: 300;
  margin-top: 12px;
  margin-bottom: 32px;

  @media ${device.mobileL} {
    font-size: 20px;
    width: 400px;
  }
`;

const Section1 = () => {
  return (
    <Fragment>
      <Illustration />
      <ResponsiveContainer direction="column">
        <Title>Wonderfully Crafted Web Experiences</Title>
        <Subtitle>Every project is unique and so is my work</Subtitle>
        <Button label="Contact me" icon="mail" />
      </ResponsiveContainer>
    </Fragment>
  );
};

export default Section1;
