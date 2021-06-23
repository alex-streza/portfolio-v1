import Button from "components/buttons";
import ResponsiveContainer from "components/container";
import { device } from "components/container/device";
import Input from "components/inputs";
import TextArea from "components/inputs/TextArea";
import SocialLinks from "components/navBar/SocialLinks";
import { useState } from "react";
import { Element } from "react-scroll";
import styled from "styled-components";

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
  align-items: center;
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
];

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const inputMargin = { marginBottom: "20px" };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let data = {
      name,
      email,
      message,
    };
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
      }
    });
  };

  return (
    <SectionContainer name="section-3">
      <ResponsiveContainer
        style={{
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Title>Contact me</Title>
        <ContactContentContainer>
          <ContactForm>
            <Input
              name="name"
              label="Name"
              style={inputMargin}
              onChange={(ev) => setName(ev.currentTarget.value)}
            />
            <Input
              name="email"
              label="E-mail"
              style={inputMargin}
              onChange={(ev) => setEmail(ev.currentTarget.value)}
            />
            <TextArea
              name="message"
              label="Message"
              onChange={(ev) => setMessage(ev.currentTarget.value)}
            />
            <Button
              label="Send"
              icon="mail"
              style={{ marginTop: "20px", width: "120px" }}
              onClick={handleSubmit}
            />
          </ContactForm>
          <Separator />
          <SocialLinksWrapper>
            <Subtitle>Get in touch another way...</Subtitle>
            <SocialLinks socialLinks={socialIcons} isContact />
          </SocialLinksWrapper>
        </ContactContentContainer>
      </ResponsiveContainer>
    </SectionContainer>
  );
};

export default ContactSection;
