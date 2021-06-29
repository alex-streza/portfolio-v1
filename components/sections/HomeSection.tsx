import Button from "components/buttons";
import ResponsiveContainer from "components/container";
import { device } from "components/container/device";
import HomeIllustration from "components/illustrations/HomeIllustration";
import SocialLinks from "components/navBar/SocialLinks";
import { Fade, Slide } from "react-awesome-reveal";
import { Element } from "react-scroll";
import styled from "styled-components";
import Scroll from "react-scroll";

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
  max-width: 28ch;
  color: #ffffff;
  margin-top: 12px;
  margin-bottom: 32px;

  @media ${device.mobileL} {
    font-size: 20px;
    max-width: 32ch;
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

const SlideButton = styled(Slide)`
  button {
    max-width: 160px;

    @media ${device.mobileL} {
      max-width: 200px;
    }
  }
`;
const HomeSection = () => {
  const handleClickContactMe = () => {
    const scroller = Scroll.scroller;
    scroller.scrollTo("section-3", {
      duration: 2000,
      delay: 100,
      smooth: true,
    });
  };

  return (
    <Element name="section-0">
      <HomeIllustration />
      <ResponsiveContainer
        style={{
          flexDirection: "column",
        }}
        withNav
      >
        <Slide triggerOnce>
          <Title>Wonderfully Crafted Web Experiences</Title>
        </Slide>
        <Fade delay={1000} triggerOnce>
          <Subtitle>
            Custom and intricate solutions for every project&apos;s unique needs
          </Subtitle>
        </Fade>
        <SlideButton delay={1000} triggerOnce>
          <Button
            label="Contact me"
            icon="mail"
            onClick={handleClickContactMe}
          />
        </SlideButton>
      </ResponsiveContainer>
      <SocialLinksContainer>
        <SocialLinks />
      </SocialLinksContainer>
    </Element>
  );
};

export default HomeSection;
