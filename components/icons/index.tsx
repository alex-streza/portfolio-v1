import Blender48 from "./blender_48.svg";
import Cursor48 from "./cursor_48.svg";
import Docker48 from "./docker_48.svg";
import Dribble from "./dribble.svg";
import Expressjs48 from "./expressjs_48.svg";
import Github from "./github.svg";
import Linkedin from "./linkedin.svg";
import Mail from "./mail.svg";
import Mapbox from "./mapbox.svg";
import Nextjs48 from "./nextjs_48.svg";
import Postgres from "./postgres.svg";
import React from "./react.svg";
import Redux48 from "./redux_48.svg";
import Typescript from "./typescript.svg";

const iconMap = {
  blender_48: Blender48,
  cursor_48: Cursor48,
  docker_48: Docker48,
  dribble: Dribble,
  expressjs_48: Expressjs48,
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  mapbox: Mapbox,
  nextjs_48: Nextjs48,
  postgres: Postgres,
  react: React,
  redux_48: Redux48,
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
