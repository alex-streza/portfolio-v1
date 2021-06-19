import { device } from "components/container/device";
import { Container } from "components/container";

import styled from "styled-components";

const NavBarContainer = styled(Container)`
  display: flex;
  align-items: center;
  padding-right: 0 !important;
  height: 68px;

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
  padding-right: 80px;
`;

const NavBarItem = styled.a`
  font-size: 16px;

  @media ${device.tablet} {
    font-size: 24px;
    line-height: 36px;
  }
  color: #ffffff;
`;

const NavBarSocial = styled.div`
  display: none;
  @media ${device.laptop} {
    background-color: #ffffff;
    width: 33%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const NavBarLogo = styled.a`
  margin-right: auto;
  background: no-repeat;
  background-image: url("/icons/logo_mobile.svg");
  height: 20px;
  text-decoration: none;
  min-width: 110px;

  @media ${device.laptop} {
    min-width: 150px;
    background-image: url("/icons/logo_desktop.svg");
  }
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavBarLogo href="/" />
      <NavBarMenu>
        <NavBarItem>Work</NavBarItem>
        <NavBarItem>Skills</NavBarItem>
        <NavBarItem>Hire me</NavBarItem>
      </NavBarMenu>
      <NavBarSocial>
        <span>Icon1</span>
        <span>Icon2</span>
        <span>Icon3</span>
      </NavBarSocial>
    </NavBarContainer>
  );
};

export default NavBar;
