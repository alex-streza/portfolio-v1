import styled from "styled-components";
import Icon from "components/icons";
import { useState } from "react";
import { device } from "components/container/device";

interface BadgeProps {
  label: string;
  icon: string;
  description?: string;
  isSmall?: boolean;
  contrast?: boolean;
}

const calculateMaxWidth = (
  isSmall?: boolean,
  active?: boolean,
  isMobile?: boolean
) => {
  if (active && isSmall) {
    return "120px";
  } else if (active) {
    return "140px";
  } else if (isMobile) {
    return "32px";
  } else if (isSmall) {
    return "60px";
  } else return "48px";
};

const BadgeContainer = styled.div<{
  isSmall?: boolean;
  contrast?: boolean;
  active?: boolean;
}>`
  ${({ theme, isSmall, contrast }) =>
    isSmall && !contrast ? "" : theme.boxShadow};
  border-radius: 8px;
  background-color: #ffffff;
  display: flex;
  padding: 14px;
  align-items: center;
  justify-content: start;
  z-index: 2;

  max-width: ${({ isSmall, active }) =>
    calculateMaxWidth(isSmall, active, true)};

  @media ${device.laptop} {
    max-width: ${({ isSmall, active }) => calculateMaxWidth(isSmall, active)};
  }

  :hover {
    ${({ theme }) => theme.boxShadow};
    transition: max-width 0.2s ease-in-out;
    max-width: 140px;

    .tech-label {
      display: block;
    }
  }
`;

const Label = styled.span<{ active?: boolean }>`
  display: ${({ active }) => (active ? "block" : "none")};
  margin-left: 8px;
  font-weight: 500;
`;

const TechBadge = (props: BadgeProps) => {
  const { label = "", icon, isSmall, contrast } = props;
  const iconSize = isSmall ? "32px" : "44px";
  const [active, setActive] = useState(false);
  return (
    <BadgeContainer
      isSmall={isSmall}
      active={active}
      contrast={contrast}
      onMouseLeave={() => setActive(true)}
    >
      <Icon name={icon} width={iconSize} />
      <Label className="tech-label" active={active}>
        {label.replace("_", "")}
      </Label>
    </BadgeContainer>
  );
};

export default TechBadge;
