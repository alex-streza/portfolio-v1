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
    width: 400px;
  }
  @media ${device.laptop} {
    margin-top: 60px;
    font-size: 20px;
    width: 560px;
  }
`;

const ContentContainer = styled.div`
  margin: 10% 0;
  height: 100vh;
`;

const ScrollableElement = styled(Element)`
  scroll-snap-align: start;
`;

const TechBadgesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 160px;

  @media ${device.laptop} {
    max-width: 40vw;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const ProjectImageContainer = styled.div`
  position: absolute;
  right: -10%;
  top: 12%;

  .projectImage {
    border-radius: 8px 0 0 8px;
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
      <ResponsiveContainer direction="column" withPadding contrast={contrast}>
        <ContentContainer>
          <Tag contrast={contrast}>{tag}</Tag>
          <Title contrast={contrast}>{title}</Title>
          <Description contrast={contrast}>{description}</Description>
          <TechBadgesContainer>
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
        <ProjectImageContainer>
          <Image
            src={imageUrl}
            alt={title}
            className="projectImage"
            width={1000}
            height={700}
          />
        </ProjectImageContainer>
      </ResponsiveContainer>
    </ScrollableElement>
  );
};

export default ProjectSection;
