import { device, size } from "components/container/device";
import Icon from "components/icons";
import { useState } from "react";
import styled from "styled-components";

interface BadgeProps {
  label: string;
  icon: string;
  description?: string;
  isSmall?: boolean;
  contrast?: boolean;
  canHover?: boolean;
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
  opacity: unset !important;
  background-color: #ffffff;
  display: flex;
  padding: 14px;
  align-items: center;
  justify-content: start;
  z-index: 10;

  transition: max-width 0.3s ease-in-out;
  max-width: ${({ isSmall, active }) =>
    calculateMaxWidth(isSmall, active, true)};

  @media ${device.tablet} {
    &:hover {
      ${({ theme }) => theme.boxShadow};
      max-width: 140px;

      .tech-label {
        display: block;
      }
    }
  }

  @media ${device.laptop} {
    max-width: ${({ isSmall, active }) => calculateMaxWidth(isSmall, active)};
  }
`;

const Label = styled.span<{ active?: boolean }>`
  display: ${({ active }) => (active ? "block" : "none")};
  margin-left: 8px;
  font-weight: 500;
`;

const TechBadge = (props: BadgeProps) => {
  const { label = "", icon, isSmall, contrast, canHover = true } = props;
  const iconSize = isSmall ? "32px" : "44px";
  const [active, setActive] = useState(false);

  return (
    <BadgeContainer
      isSmall={isSmall}
      active={active}
      contrast={contrast}
      onMouseLeave={() => !canHover && setActive(false)}
      onMouseEnter={() => canHover && setActive(true)}
    >
      <Icon name={icon} width={iconSize} />
      <Label className="tech-label" active={active}>
        {label.replace(/_/g, "")}
      </Label>
    </BadgeContainer>
  );
};

export default TechBadge;
