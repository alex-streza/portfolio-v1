import { device, size } from "components/container/device";
import Icon from "components/icons";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled, { useTheme } from "styled-components";
import { Fade } from "react-awesome-reveal";

interface SocialLinksProps {
  socialLinks?: any[];
  isContact?: boolean;
  isProject?: boolean;
  contrast?: boolean;
}

const SocialLinksContainer = styled.div<SocialLinksProps>`
  background-color: transparent;

  height: ${({ isProject }) => (isProject ? "initial" : " 100%")};
  display: flex;
  align-items: ${({ isContact }) => (isContact ? "flex-start" : "center")};
  justify-content: ${({ isProject }) => (isProject ? "flex-start" : "center")};
  flex-direction: ${({ isProject }) => (isProject ? "row" : "column")};
  margin-top: ${({ isContact, isProject }) =>
    isContact || isProject ? "0" : "48px"};

  @media ${device.mobileS} {
    margin-top: ${({ isContact, isProject }) =>
      isContact || isProject ? "0" : "100px"};
  }

  @media ${device.laptop} {
    background-color: ${({ isProject }) =>
      isProject ? "transparent" : "#ffffff"};
    width: ${({ isContact, isProject }) =>
      isContact || isProject ? "initial" : "100%"};
    margin-top: 0;

    flex-direction: ${({ isContact }) => (isContact ? "column" : "row")};
  }
`;

const SocialLinkItem = styled.a<{
  color?: string;
  isContact?: boolean;
  isProject?: boolean;
}>`
  margin-bottom: 20px;
  margin-right: ${({ isContact, isProject }) =>
    isContact || isProject ? "20px" : "0"};
  text-decoration: none;
  display: flex;
  align-items: center;

  svg {
    path {
      transition: fill 0.2s ease-in-out;
      fill: ${({ color }) => color};
    }
  }
  h2 {
    transition: fill 0.2s ease-in-out;
    color: ${({ color }) => color};
  }

  @media ${device.laptop} {
    margin-bottom: 0;
    ${({ isContact, isProject }) => {
      let margin = "margin-right: 40px";
      if (isContact) margin = "margin-bottom: 20px";
      if (isProject) margin = "margin-right: 20px";
      return margin;
    }};
  }

  :visited,
  :link {
    color: #000000;
  }
`;

const IconLabel = styled.h2`
  font-size: 20px;
  margin-left: 12px;
`;

const socialIcons = [
  {
    name: "github",
    href: "https://github.com/alex-streza",
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/alexandru-streza-7a4254155",
  },
  { name: "dribble", href: "https://dribbble.com/snappy_guy" },
];

const SocialLinks = (props: SocialLinksProps) => {
  const isTablet = useMediaQuery({ minWidth: size.tablet });
  const iconSize = isTablet ? "40px" : "36px";
  const { socialLinks = socialIcons, isContact, isProject, contrast } = props;
  const initialColor = contrast ? "#ffffff" : "#000000";
  const [icons, setIcons] = useState(
    socialLinks.map((icon) => ({ ...icon, color: initialColor }))
  );
  const theme = useTheme();

  const onMouseEnter = (index: number) =>
    setIcons([
      ...icons.map((icon, i) => ({
        ...icon,
        color:
          i == index
            ? contrast
              ? theme.palette.secondary
              : theme.palette.primary
            : icon.color,
      })),
    ]);

  const onMouseLeave = () =>
    setIcons([
      ...socialLinks.map((icon) => ({ ...icon, color: initialColor })),
    ]);

  return (
    <SocialLinksContainer isContact={isContact} isProject={isProject}>
      <Fade delay={500} cascade triggerOnce>
        {icons.map((icon, index) => (
          <SocialLinkItem
            key={`social-link-${index}`}
            href={icon.href}
            onMouseEnter={() => onMouseEnter(index)}
            onMouseLeave={onMouseLeave}
            color={icon.color}
            isContact={isContact}
            isProject={isProject}
          >
            <Icon name={icon.name} width={icon.size ?? iconSize} />
            {icon.username && <IconLabel>{icon.username}</IconLabel>}
          </SocialLinkItem>
        ))}
      </Fade>
    </SocialLinksContainer>
  );
};

export default SocialLinks;
