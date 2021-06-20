import { device } from "components/container/device";
import Icon from "components/icons";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled, { useTheme } from "styled-components";

const NavBarSocial = styled.div`
  background-color: #ffffff;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 48px;

  @media ${device.mobileL} {
    margin-top: 100px;
  }

  @media ${device.laptop} {
    width: 33%;
    margin-top: 0;

    flex-direction: row;
  }
`;

const NavBarSocialItem = styled.a<{ color?: string }>`
  margin-bottom: 20px;
  svg {
    path {
      transition: fill 0.2s ease-in-out;
      fill: ${({ color }) => color};
    }
  }
  @media ${device.laptop} {
    margin-bottom: 0;
    margin-right: 40px;
  }
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

const SocialLinks = () => {
  const isTablet = useMediaQuery({ minWidth: 768 });
  const iconSize = isTablet ? "40px" : "36px";
  const [icons, setIcons] = useState(
    socialIcons.map((icon) => ({ ...icon, color: "#000000" }))
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
    setIcons([...socialIcons.map((icon) => ({ ...icon, color: "#000000" }))]);

  return (
    <NavBarSocial>
      {icons.map((icon, index) => (
        <NavBarSocialItem
          href={icon.href}
          onMouseEnter={() => onMouseEnter(index)}
          onMouseLeave={onMouseLeave}
          color={icon.color}
        >
          <Icon name={icon.name} width={iconSize} />
        </NavBarSocialItem>
      ))}
    </NavBarSocial>
  );
};

export default SocialLinks;
