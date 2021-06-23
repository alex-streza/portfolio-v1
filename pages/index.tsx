import NavBar from "components/navBar";
import HomeSection from "components/sections/HomeSection";
import ProjectSection from "components/sections/ProjectSection";
import SkillsSection from "components/sections/SkillsSection";
import ContactSection from "components/sections/ContactSection";
import { Fragment, useContext } from "react";
import { Context } from "react-responsive";
import styled from "styled-components";

const isServer = typeof window === "undefined";

const SectionsContainer = styled.div``;

export default function Home() {
  const device = useContext(Context);
  console.log(isServer ? "SERVER" : "BROWSER", "context:", device);

  return (
    <Fragment>
      <NavBar />
      <SectionsContainer>
        <HomeSection />
        <ProjectSection
          title="Bicycle Theft Map app"
          description="Responsive website to showcase bicycle thefts in the UK to increase awareness."
          tag="Featured Project"
          imageUrl="/images/bike-theft-map.png"
          techs={[
            "react",
            "typescript",
            "mapbox",
            "expressjs",
            "postgres",
            "docker",
          ]}
        />
        <ProjectSection
          title="Golf Genius Directory"
          description="Management website for golf related events and tournaments with features such as event registration, event map and filtering for wanted events."
          tag="Golf events site"
          imageUrl="/images/golf.png"
          techs={["react", "redux", "typescript", "circle_ci"]}
          sectionIndex={-1}
          contrast
        />
        <SkillsSection />
        <ContactSection />
      </SectionsContainer>
    </Fragment>
  );
}

export const getServerSideProps = () => {
  return { props: {} };
};
