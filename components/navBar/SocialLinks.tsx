import { device } from "components/container/device";
import Icon from "components/icons";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled, { useTheme } from "styled-components";

interface SocialLinksProps {
  socialLinks?: any[];
  isContact?: boolean;
}

const NavBarSocial = styled.div<{ isContact?: boolean }>`
  background-color: transparent;
  height: 100%;
  display: flex;
  align-items: ${({ isContact }) => (isContact ? "flex-start" : "center")};
  justify-content: center;
  flex-direction: column;
  margin-top: ${({ isContact }) => (isContact ? "0" : "48px")};

  @media ${device.mobileS} {
    margin-top: ${({ isContact }) => (isContact ? "0" : "100px")};
  }

  @media ${device.laptop} {
    background-color: #ffffff;
    width: ${({ isContact }) => (isContact ? "initial" : "33%")};
    margin-top: 0;

    flex-direction: ${({ isContact }) => (isContact ? "column" : "row")};
  }
`;

const NavBarSocialItem = styled.a<{ color?: string; isContact?: boolean }>`
  margin-bottom: 20px;
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
    margin: ${({ isContact }) => (isContact ? "0 0 20px 0" : "0 40px 0 0")};
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
  const isTablet = useMediaQuery({ minWidth: 768 });
  const iconSize = isTablet ? "40px" : "36px";
  const { socialLinks = socialIcons, isContact } = props;
  const [icons, setIcons] = useState(
    socialLinks.map((icon) => ({ ...icon, color: "#000000" }))
  );
  const theme = useTheme();

  const onMouseEnter = (index: number) =>
    setIcons([
      ...icons.map((icon, i) => ({
        ...icon,
        color: i == index ? theme.palette.primary : icon.color,
      })),
    ]);

  const onMouseLeave = () =>
    setIcons([...socialLinks.map((icon) => ({ ...icon, color: "#000000" }))]);

  return (
    <NavBarSocial isContact={isContact}>
      {icons.map((icon, index) => (
        <NavBarSocialItem
          key={`social-link-${index}`}
          href={icon.href}
          onMouseEnter={() => onMouseEnter(index)}
          onMouseLeave={onMouseLeave}
          color={icon.color}
          isContact={isContact}
        >
          <Icon name={icon.name} width={icon.size ?? iconSize} />
          {icon.username && <IconLabel>{icon.username}</IconLabel>}
        </NavBarSocialItem>
      ))}
    </NavBarSocial>
  );
};

export default SocialLinks;
