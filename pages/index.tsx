import NavBar from "components/navBar";
import dynamic from "next/dynamic";
import Head from "next/head";
import { Fragment, useContext, useEffect } from "react";
import { Context } from "react-responsive";
import styled from "styled-components";

const HomeSection = dynamic(() => import("components/sections/HomeSection"));
const ProjectSection = dynamic(
  () => import("components/sections/ProjectSection")
);
const SkillsSection = dynamic(
  () => import("components/sections/SkillsSection"),
  {
    ssr: false,
  }
);
const ContactSection = dynamic(
  () => import("components/sections/ContactSection"),
  { ssr: false }
);

const isServer = typeof window === "undefined";

const SectionsContainer = styled.div``;

export default function Home() {
  const device = useContext(Context);
  // console.log(isServer ? "SERVER" : "BROWSER", "context:", device);

  const title = "Alex Streza";
  const description =
    "Every product or service tells a story and I'm here to help you write it, I'm Alex Streza a Frontend developer and designer experienced in React, NextJS, Storybook and many others.";
  const image = "https://i.postimg.cc/KvBdC1h3/portfolio.png";
  const url = "alexstreza.dev";

  useEffect(() => {
    document.documentElement.lang = "en";
  }, []);

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <meta name="title" content={title} />
        <meta name="description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:image:secure_url" content={image} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />
      </Head>
      <NavBar />
      <SectionsContainer>
        <HomeSection />
        {/* <ProjectSection
          title="Bicycle Theft Map app"
          description="Responsive website to showcase bicycle thefts in the UK (2020) in order to increase awareness and determine dangerous hotspots. Due to unprecendented spikes in thefts and no measures being taken a visualization tool was in demand. "
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
        /> */}
        <ProjectSection
          title="Code Preview - Storybook Addon"
          description="The current implementations of code preview addons in Storybook was lackluster and harder to use for newer versions so I implemented a more robust adaptation (hopefully) using the Storybook API and Webpack Loader & Plugins."
          tag="NPM Package"
          imageUrl="/images/code-preview.png"
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
        />
        <ProjectSection
          title="Portfolio"
          description="Instead of taking the easier route publishing the website using a prebuilt template or website builder I decided to go through all the stages of design & develop & deploy to showcase my projects."
          tag="Design & Development"
          imageUrl="/images/portfolio.png"
          sectionIndex={-1}
          techs={["react", "nextjs", "github", "figma"]}
          socialLinks={[
            {
              name: "github",
              href: "https://github.com/alex-streza/portfolio",
            },
          ]}
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
