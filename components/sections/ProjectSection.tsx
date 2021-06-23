import TechBadge from "components/buttons/TechBadge";
import ResponsiveContainer from "components/container";
import { device } from "components/container/device";
import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import Image from "next/image";

interface ProjectSectionProps {
  tag: string;
  title: string;
  description: string;
  imageUrl: string;
  techs: string[];
  contrast?: boolean;
  sectionIndex?: number;
}

const Tag = styled.h3<{ contrast?: boolean }>`
  color: ${({ contrast, theme }) =>
    contrast ? theme.palette.secondary : theme.palette.primary};
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
  height: 100vh;
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
  } = props;
  return (
    <ScrollableElement name={`section-${sectionIndex}`}>
      <ResponsiveContainer
        style={{
          flexDirection: "column",
          alignItems: contrast ? "flex-end" : "flex-start",
        }}
        contrast={contrast}
        withPadding
      >
        <ContentContainer contrast={contrast}>
          <Tag contrast={contrast}>{tag}</Tag>
          <Title contrast={contrast}>{title}</Title>
          <Description contrast={contrast}>{description}</Description>
          <TechBadgesContainer contrast={contrast}>
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
          </TechBadgesContainer>
        </ContentContainer>
        <ProjectImageContainer contrast={contrast}>
          <Image
            src={imageUrl}
            alt={title}
            className="projectImage"
            layout="fill"
          />
        </ProjectImageContainer>
      </ResponsiveContainer>
    </ScrollableElement>
  );
};

export default ProjectSection;
