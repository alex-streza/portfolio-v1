import styled from "styled-components";

interface BadgeProps {
  label: string;
  icon: string;
  tech: string;
  contrast?: boolean;
}

const BadgeContainer = styled.div``;

const TechBadge = (props: BadgeProps) => {
  return <BadgeContainer></BadgeContainer>;
};

export default TechBadge;
