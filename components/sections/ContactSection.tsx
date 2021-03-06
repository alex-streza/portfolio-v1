import Button from "components/buttons";
import ResponsiveContainer from "components/container";
import { device } from "components/container/device";
import FooterIllustration from "components/illustrations/FooterIllustration";
import Input from "components/inputs";
import TextArea from "components/inputs/TextArea";
import SocialLinks from "components/navBar/SocialLinks";
import dynamic from "next/dynamic";
import { useState } from "react";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { useForm } from "react-hook-form";
import { Element } from "react-scroll";
import styled from "styled-components";

const NotificationCard = dynamic(
  () => import("components/cards/NotificationCard")
);

const SectionContainer = styled(Element)`
  scroll-snap-align: start;
`;

const Title = styled.h2<{ contrast?: boolean }>`
  color: ${({ contrast }) => (contrast ? "#ffffff" : "#000000")};
  margin: 12px 0 40px 0;

  @media ${device.laptop} {
    max-width: 520px;
    margin-top: 40px;
  }
`;

const Subtitle = styled.p<{ contrast?: boolean }>`
  font-weight: bold;
  font-size: 20px;
  color: ${({ contrast }) => (contrast ? "#ffffff" : "#000000")};
  margin-top: 12px;
  margin-bottom: 32px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media ${device.tablet} {
    width: 50%;
  }

  @media ${device.laptop} {
    width: 33%;
  }
`;

const ContactContentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

const Separator = styled.div`
  @media ${device.laptop} {
    border: 1px solid rgba(0, 0, 0, 0.2);
    height: 100%;
    margin: 0 20px;
    position: absolute;
    inset: 0 50%;
  }
`;

const SocialLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  @media ${device.tablet} {
    margin-top: 0;
  }

  @media ${device.laptop} {
    padding-right: 5%;
  }
`;

const socialIcons = [
  {
    name: "github",
    href: "https://github.com/alex-streza",
    username: "/alex-streza",
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/alexandru-streza-7a4254155",
    username: "/alex.streza",
  },
  {
    name: "dribble",
    href: "https://dribbble.com/snappy_guy",
    username: "/snappy.guy",
  },
  {
    name: "medium",
    href: "https://medium.com/@astre999",
    username: "/snappy.guy",
  },
  {
    name: "hashnode",
    href: "https://alexstreza.hashnode.dev",
    username: "/snappyguy",
  },
];

const ContactSection = () => {
  const [showCard, setShowCard] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, submitCount },
  } = useForm();

  const inputMargin = { marginBottom: "12px" };
  const onSubmit = (data: any) => {
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 200) {
          setShowCard(true);
        }
      })
      .catch((err) => {});
  };

  return (
    <SectionContainer name="section-3">
      <ResponsiveContainer
        style={{
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {showCard && (
          <Slide
            direction="down"
            style={{
              position: "absolute",
              top: "25%",
              boxShadow: "1px 1px 40px rgba(103, 0, 238, 0.15)",
              zIndex: 10000,
              borderRadius: "8px",
            }}
          >
            <NotificationCard close={() => setShowCard(false)} />
          </Slide>
        )}
        <Fade triggerOnce>
          <Title>Contact me</Title>
        </Fade>
        <ContactContentContainer>
          <ContactForm onSubmit={handleSubmit(onSubmit)}>
            <Zoom delay={1000} triggerOnce cascade>
              <Input
                id="name"
                label="Name"
                style={inputMargin}
                error={errors?.name?.message}
                {...register("name", {
                  required: "Please type your name.",
                  maxLength: 60,
                })}
              />
              <Input
                id="email"
                label="E-mail"
                style={inputMargin}
                error={errors?.email?.message}
                {...register("email", {
                  required: "Please type your email address.",
                  pattern:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />
              <TextArea
                id="message"
                label="Message"
                error={errors?.message?.message}
                {...register("message", {
                  required: "Please type a message.",
                  maxLength: 200,
                })}
              />
              <Button
                label="Send"
                icon="mail"
                type="submit"
                disabled={!isValid && submitCount > 0}
                style={{ marginTop: "20px", width: "120px" }}
              />
            </Zoom>
          </ContactForm>
          <Fade delay={2000} triggerOnce>
            <Separator />
          </Fade>
          <SocialLinksWrapper>
            <Subtitle>Get in touch another way...</Subtitle>
            <SocialLinks socialLinks={socialIcons} isContact />
          </SocialLinksWrapper>
        </ContactContentContainer>
        <FooterIllustration />
      </ResponsiveContainer>
    </SectionContainer>
  );
};

export default ContactSection;
