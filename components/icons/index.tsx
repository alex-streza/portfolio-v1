import Blender from "./blender.svg";
import CircleCi from "./circle_ci.svg";
import Cursor from "./cursor.svg";
import Docker from "./docker.svg";
import Dribble from "./dribble.svg";
import Expressjs from "./expressjs.svg";
import Frontend from "./frontend.svg";
import Github from "./github.svg";
import Linkedin from "./linkedin.svg";
import Mail from "./mail.svg";
import Mapbox from "./mapbox.svg";
import Nextjs from "./nextjs.svg";
import Postgres from "./postgres.svg";
import React from "./react.svg";
import Redux from "./redux.svg";
import Shield from "./shield.svg";
import Typescript from "./typescript.svg";

const iconMap = {
  blender: Blender,
  circle_ci: CircleCi,
  cursor: Cursor,
  docker: Docker,
  dribble: Dribble,
  expressjs: Expressjs,
  frontend: Frontend,
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  mapbox: Mapbox,
  nextjs: Nextjs,
  postgres: Postgres,
  react: React,
  redux: Redux,
  shield: Shield,
  typescript: Typescript,
};

interface IconProps {
  name: string;
  height?: string;
  width?: string;
  color?: string;
}

const Icon = ({
  name,
  width = "24px",
  height = width,
  color = "#000000",
}: IconProps) => {
  const props = { width, height, color };
  // @ts-expect-error: Use name to index icon array
  let IconP = iconMap[name];
  return <IconP {...props} />;
};

export default Icon;
