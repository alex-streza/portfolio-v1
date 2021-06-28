import { Container } from "components/container";
import { device } from "components/container/device";
import styled from "styled-components";
import SocialLinks from "components/navBar/SocialLinks";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";
import { Fade } from "react-awesome-reveal";

const NavBarContainer = styled.nav`
  display: flex;
  align-items: center;
  padding-right: 0 !important;
  height: 68px;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.palette.primary};
  @media ${device.laptop} {
    padding: 0 170px;
  }

  @media ${device.tablet} {
    height: 100px;
  }
  background-color: ${({ theme }) => theme.palette.primary};
`;

const NavBarMenu = styled.ul`
  display: grid;
  grid-gap: 20px;
  max-width: 320px;
  grid-template-columns: 1fr 1fr 1fr;
  width: 66%;
  margin-block: 0;
  place-content: center;
  height: 100%;
  padding-right: 20px;
  list-style-type: none;

  @media ${device.tablet} {
    padding-right: 80px;
  }
`;

const NavBarItem = styled(Link)`
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
  margin-top: 4px;

  @media ${device.tablet} {
    font-size: 24px;
    line-height: 40px;
  }

  :after {
    transition: all ease-in-out 0.2s;
    background: none repeat scroll 0 0 ${({ theme }) => theme.palette.secondary};
    content: "";
    display: block;
    margin-top: 4px;
    height: 2px;
    width: 0;
  }

  :hover:after {
    width: 100%;
  }
`;
const NavBarLogo = styled.a`
  margin-right: auto;
  background: no-repeat;
  background-image: url("/icons/logo_mobile.svg");
  height: 20px;
  text-decoration: none;
  min-width: 110px;

  @media ${device.tablet} {
    min-width: 150px;
    background-image: url("/icons/logo_desktop.svg");
  }
`;

const ResponsiveSocialLinksContainer = styled.div`
  display: none;

  @media ${device.laptop} {
    display: block;
  }
`;

const menuItems = ["Work", "Skills", "Contact"];

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavBarLogo href="/" />
      <NavBarMenu>
        <Fade delay={500} style={{ textAlign: "center" }} cascade triggerOnce>
          {menuItems.map((menuItem, index) => (
            <li style={{ textAlign: "center" }} key={index}>
              <NavBarItem to={`section-${index + 1}`} duration={500} smooth>
                {menuItem}
              </NavBarItem>
            </li>
          ))}
        </Fade>
      </NavBarMenu>
      <ResponsiveSocialLinksContainer>
        <SocialLinks />
      </ResponsiveSocialLinksContainer>
    </NavBarContainer>
  );
};

export default NavBar;
