import { device } from "components/container/device";
import { Element } from "react-scroll";
import styled from "styled-components";
import ResponsiveContainer from "components/container";
import SkillCard from "components/cards";
import TechBadge from "components/buttons/TechBadge";
import { useMediaQuery } from "react-responsive";

const Title = styled.h2<{ contrast?: boolean }>`
  color: ${({ contrast }) => (contrast ? "#ffffff" : "#000000")};
  margin-top: 12px;

  @media ${device.laptop} {
    max-width: 520px;
    margin-top: 40px;
  }
`;

const Description = styled.p<{ contrast?: boolean }>`
  font-size: 16px;
  line-height: 156.6%;
  letter-spacing: 0.12em;
  color: ${({ contrast }) => (contrast ? "#ffffff" : "#000000")};
  margin-top: 12px;
  margin-bottom: 32px;
`;

const SectionContainer = styled(Element)`
  scroll-snap-align: start;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

const TechBadgesContainer = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 40px;
`;

const TechBadgesGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 12px;
  gap: 12px;
`;

const skills = [
  {
    title: "Frontend Developer",
    description:
      "React is like a religion but learning is a passion so no matter the framework or technology being able to deliver and adapt is essential.",
    icon: "cursor",
  },
  {
    title: "UI/UX Design",
    description:
      "Designing is often forgotten but it’s the groundwork for any great product or service. From illustrations to photograps or even 3D models count me in.",
    icon: "frontend",
    iconWidth: "160px",
    iconHeight: "24px",
  },
  {
    title: "Security Enthusiast",
    description:
      "Interested in security appliances for app dev and distributed systems for perfomance benefits, currently following an IT Security master’s degree at ASE Bucharest.",
    icon: "shield",
  },
];

const techs = [
  "blender",
  "expressjs",
  "redux",
  "typescript",
  "react",
  "nextjs",
  "postgres",
  "docker",
  "mapbox",
];

const SkillsSection = () => {
  const isPhone = useMediaQuery({ maxWidth: "425px" });
  return (
    <SectionContainer name="section-2">
      <ResponsiveContainer
        style={{
          flexDirection: "column",
          alignItems: "center",
          height: "unset",
        }}
      >
        <Title>Skills</Title>
        <Description>Love to learn and deliver</Description>
        <SkillsContainer>
          {skills.map((skill, index) => (
            <SkillCard key={`skill-${index}`} {...skill} />
          ))}
        </SkillsContainer>
        <Title>Tech & Tools</Title>
        <Description>Been there done that</Description>
        <TechBadgesContainer>
          <TechBadgesGroup>
            <TechBadge
              icon={techs[0]}
              label={techs[0].charAt(0).toUpperCase() + techs[0].slice(1)}
              isSmall={isPhone}
              contrast
            />
          </TechBadgesGroup>
          <TechBadgesGroup>
            {techs.slice(1, 3).map((tech, index) => (
              <TechBadge
                key={`tech-${index}`}
                icon={tech}
                label={tech.charAt(0).toUpperCase() + tech.slice(1)}
                isSmall={isPhone}
                contrast
              />
            ))}
          </TechBadgesGroup>
          <TechBadgesGroup>
            {techs.slice(3, 6).map((tech, index) => (
              <TechBadge
                key={`tech-${index}`}
                icon={tech}
                label={tech.charAt(0).toUpperCase() + tech.slice(1)}
                isSmall={isPhone}
                contrast
              />
            ))}
          </TechBadgesGroup>
          <TechBadgesGroup>
            {techs.slice(6, 8).map((tech, index) => (
              <TechBadge
                key={`tech-${index}`}
                icon={tech}
                label={tech.charAt(0).toUpperCase() + tech.slice(1)}
                isSmall={isPhone}
                contrast
              />
            ))}
          </TechBadgesGroup>
          <TechBadge
            icon={techs[techs.length - 1]}
            label={
              techs[techs.length - 1].charAt(0).toUpperCase() +
              techs[techs.length - 1].slice(1)
            }
            isSmall={isPhone}
            contrast
          />
        </TechBadgesContainer>
      </ResponsiveContainer>
    </SectionContainer>
  );
};

export default SkillsSection;
