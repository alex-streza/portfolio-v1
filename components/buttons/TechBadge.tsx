import styled from "styled-components";
import Icon from "components/icons";

interface BadgeProps {
  label: string;
  icon: string;
  tech: string;
  description?: string;
  isSmall?: boolean;
  contrast?: boolean;
}

const BadgeContainer = styled.div<{ isSmall?: boolean; contrast?: boolean }>`
  ${({ theme, isSmall, contrast }) =>
    isSmall && !contrast ? "" : theme.boxShadow};
  border-radius: 8px;
  background-color: #ffffff;
  display: grid;
  padding: 14px 0;
  place-items: center;

  :hover {
    ${({ theme }) => theme.boxShadow};
  }
`;

const TechBadge = (props: BadgeProps) => {
  const { label, icon, tech, description, isSmall, contrast } = props;
  const iconSize = isSmall ? "32px" : "44px";

  return (
    <BadgeContainer isSmall={isSmall} contrast={contrast}>
      <Icon name={icon} width={iconSize} />
    </BadgeContainer>
  );
};

export default TechBadge;
