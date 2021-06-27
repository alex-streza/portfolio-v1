import TechBadge from "components/buttons/TechBadge";
import ResponsiveContainer from "components/container";
import { device } from "components/container/device";
import SocialLinks from "components/navBar/SocialLinks";
import Image from "next/image";
import React from "react";
import { Zoom, Fade, Slide } from "react-awesome-reveal";
import { Element } from "react-scroll";
import styled from "styled-components";
import { SocialLink } from "types/Project";

interface ProjectSectionProps {
  tag: string;
  title: string;
  description: string;
  imageUrl: string;
  techs: string[];
  socialLinks: SocialLink[];
  contrast?: boolean;
  sectionIndex?: number;
}

const Tag = styled.h3<{ contrast?: boolean }>`
  margin-top: 4px;
  color: ${({ contrast, theme }) =>
    contrast ? theme.palette.secondary : theme.palette.primary};

  @media ${device.laptop} {
    margin-top: 20px;
  }
`;

const Title = styled.h2<{ contrast?: boolean }>`
  color: ${({ contrast }) => (contrast ? "#ffffff" : "#000000")};
  margin-top: 12px;

  @media ${device.laptop} {
    max-width: 520px;
    margin-top: 16px;
  }
`;

const Description = styled.p<{ contrast?: boolean }>`
  font-size: 16px;
  line-height: 156.6%;
  letter-spacing: 0.12em;
  color: ${({ contrast }) => (contrast ? "#ffffff" : "#000000")};
  margin-top: 12px;
  margin-bottom: 32px;

  @media ${device.mobileL} {
    margin-top: 24px;
    font-size: 20px;
  }
  @media ${device.laptop} {
    margin-top: 60px;
    font-size: 20px;
    width: 560px;
  }
`;

const ContentContainer = styled.div<{ contrast?: boolean }>`
  margin: 10% 0;
  margin-left: ${({ contrast }) => (contrast ? "auto" : "0")};
`;

const ScrollableElement = styled(Element)`
  scroll-snap-align: start;
`;

const TechBadgesContainer = styled.div<{ contrast?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 160px;
  margin-left: ${({ contrast }) => (contrast ? "auto" : "0")};

  @media ${device.laptop} {
    max-width: 40vw;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const ProjectImageContainer = styled.div<{ contrast?: boolean }>`
  position: absolute;
  ${({ contrast }) => (contrast ? "left: 0;" : "right: 0;")}
  bottom: 20%;
  width: 90%;
  height: auto;

  > div {
    position: unset !important;
  }

  @media ${device.mobileL} {
    ${({ contrast }) => (contrast ? "left: -10%;" : "right: -10%;")}
    bottom: 10%;
  }

  @media ${device.tablet} {
    width: 80vw;
  }

  @media ${device.laptop} {
    bottom: 16%;
    width: 50vw;
  }

  .projectImage {
    border-radius: ${({ contrast }) =>
      contrast ? "0 8px 8px 0" : "8px 0 0 8px"};
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }
`;

const ProjectSection = (props: ProjectSectionProps) => {
  const {
    title,
    description,
    tag,
    techs,
    imageUrl,
    contrast,
    sectionIndex = 1,
    socialLinks,
  } = props;
  return (
    <ScrollableElement name={`section-${sectionIndex}`}>
      <ResponsiveContainer
        style={{
          flexDirection: "column",
          alignItems: contrast ? "flex-end" : "flex-start",
          minHeight: "100vh",
          height: "initial",
        }}
        contrast={contrast}
        withPadding
      >
        <ContentContainer contrast={contrast}>
          <SocialLinks
            socialLinks={socialLinks}
            isProject
            contrast={contrast}
          />
          {!contrast && (
            <Slide delay={750} cascade triggerOnce>
              <Tag contrast={contrast}>{tag}</Tag>
              <Title contrast={contrast}>{title}</Title>
            </Slide>
          )}
          {contrast && (
            <Fade delay={1000}>
              <Tag contrast={contrast}>{tag}</Tag>
              <Title contrast={contrast}>{title}</Title>
            </Fade>
          )}
          <Fade delay={1500} cascade triggerOnce>
            <Description contrast={contrast}>{description}</Description>
          </Fade>
          <TechBadgesContainer contrast={contrast}>
            <Zoom
              delay={2000}
              damping={0.2}
              style={{ zIndex: 10 }}
              cascade
              triggerOnce
            >
              {techs.map((tech, index) => (
                <TechBadge
                  key={`tech-${index}`}
                  icon={tech}
                  description=""
                  label={tech.charAt(0).toUpperCase() + tech.slice(1)}
                  isSmall
                  contrast
                />
              ))}
            </Zoom>
          </TechBadgesContainer>
        </ContentContainer>
        <Fade delay={1500} triggerOnce>
          <ProjectImageContainer contrast={contrast}>
            <Image
              src={imageUrl}
              alt={title}
              className="projectImage"
              layout="fill"
            />
          </ProjectImageContainer>
        </Fade>
      </ResponsiveContainer>
    </ScrollableElement>
  );
};

export default ProjectSection;
