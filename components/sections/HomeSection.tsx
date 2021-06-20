import Button from "components/buttons";
import ResponsiveContainer from "components/container";
import { device } from "components/container/device";
import SocialLinks from "components/navBar/SocialLinks";
import { Element } from "react-scroll";
import styled from "styled-components";

const Illustration = styled.figure`
  position: absolute;
  z-index: -1;
  left: 0;
  background: no-repeat;
  background-image: url("/icons/background.svg");
  width: 80vw;
  height: 100%;
  margin: 0;
  height: calc(100vh - 68px);

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
  max-width: 230px;
  color: #ffffff;
  font-weight: 300;
  margin-top: 12px;
  margin-bottom: 32px;

  @media ${device.mobileL} {
    font-size: 20px;
    max-width: 400px;
  }
`;

const SocialLinksContainer = styled.div`
  position: absolute;
  right: 0;
  width: 20vw;
  top: 68px;

  @media ${device.mobileL} {
    width: 17vw;
  }

  @media ${device.tablet} {
    width: 18vw;
    top: 100px;
  }

  @media ${device.laptop} {
    display: none;
  }
`;

const HomeSection = () => {
  return (
    <Element name="section-0">
      <Illustration />
      <ResponsiveContainer direction="column" withNav>
        <Title>Wonderfully Crafted Web Experiences</Title>
        <Subtitle>Every project is unique and so is my work</Subtitle>
        <Button label="Contact me" icon="mail" />
      </ResponsiveContainer>
      <SocialLinksContainer>
        <SocialLinks />
      </SocialLinksContainer>
    </Element>
  );
};

export default HomeSection;
