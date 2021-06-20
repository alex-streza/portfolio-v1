import { device } from "components/container/device";
import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import Icon from "components/icons";

interface SkillCardProps {
  title: string;
  description: string;
  icon: string;
  iconWidth?: string;
  iconHeight?: string;
}

const CardContainer = styled.div`
  max-width: 320px;
  min-height: 260px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;

  @media ${device.tablet} {
    margin-bottom: 0;
    margin-right: 20px;
  }

  ${({ theme }) => theme.boxShadow}
`;

const Title = styled.h2<{ contrast?: boolean }>`
  color: ${({ contrast }) => (contrast ? "#ffffff" : "#000000")};
  margin-top: 12px;
  font-size: 18px;
  font-weight: 600;

  @media ${device.laptop} {
    max-width: 520px;
    margin-top: 16px;
  }
`;

const Description = styled.p`
  font-size: 14px;
  margin-top: 32px;
  line-height: 1.3125rem;
  max-width: 280px;

  @media ${device.mobileL} {
    margin-top: 32px;
  }
`;

const SkillCard = (props: SkillCardProps) => {
  const { title, description, icon, iconHeight, iconWidth } = props;
  const iconSize = "36px";

  return (
    <CardContainer>
      <Icon
        name={icon}
        width={iconWidth ?? iconSize}
        height={iconHeight ?? iconSize}
      />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </CardContainer>
  );
};

export default SkillCard;
