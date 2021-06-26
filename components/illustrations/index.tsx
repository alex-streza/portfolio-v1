import styled from "styled-components";
import FooterIllustration from "./footer_background.svg";

const illustrationMap = {
  footerIllustration: FooterIllustration,
};

interface IllustrationProps {
  height: string;
  width: string;
  name: string;
}

const IllustrationContainer = styled.div`
  path {
    width: 100vw !important;
  }
`;

const Illustration = ({ name, ...rest }: IllustrationProps) => {
  // @ts-expect-error: Use name to index illustration array
  let IllustrationP = illustrationMap[name];
  console.log(`IllustrationP`, IllustrationP);
  return (
    <IllustrationContainer>
      <IllustrationP {...rest} />
    </IllustrationContainer>
  );
};

export default Illustration;
