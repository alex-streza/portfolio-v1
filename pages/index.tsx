import NavBar from "components/navBar";
import HomeSection from "components/sections/HomeSection";
import ProjectSection from "components/sections/ProjectSection";
import SkillsSection from "components/sections/SkillsSection";
import dynamic from "next/dynamic";
import { Fragment, useContext } from "react";
import { Context } from "react-responsive";
import styled from "styled-components";

const ContactSection = dynamic(
  () => import("components/sections/ContactSection"),
  { ssr: false }
);

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
            "nginx",
          ]}
          socialLinks={[
            {
              name: "website",
              href: "https://bike-theft-map.bikmo.com/",
            },
          ]}
        />
        <ProjectSection
          title="Code Preview - Storybook Addon"
          description="The current implementations of code preview addons in Storybook was lackluster and harder to use for newer versions so I implemented one using the Storybook API and Webpack Loader & Plugins."
          tag="Golf events site"
          imageUrl="/images/code-preview.png"
          sectionIndex={-1}
          techs={["react", "storybook", "webpack", "github", "npm"]}
          socialLinks={[
            {
              name: "github",
              href: "https://github.com/alex-streza/code-preview",
            },
            {
              name: "npm",
              href: "https://www.npmjs.com/package/storybook-addon-code-preview",
            },
          ]}
          contrast
        />
        <ProjectSection
          title="Portfolio"
          description="After designing the layouts for all resolutions with Figma I ended up using NextJS and React to showcase my other projects through this interactive and responsive website."
          tag="Design & Development"
          imageUrl="/images/portfolio.png"
          sectionIndex={-1}
          techs={["react", "nextjs", "github", "npm", "figma"]}
          socialLinks={[
            {
              name: "github",
              href: "https://github.com/alex-streza/portfolioz",
            },
          ]}
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
