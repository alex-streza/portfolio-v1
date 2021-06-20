import Blender48 from "./blender_48.svg";
import Cursor48 from "./cursor_48.svg";
import Docker48 from "./docker_48.svg";
import Dribble from "./dribble.svg";
import Expressjs48 from "./expressjs_48.svg";
import Github from "./github.svg";
import Linkedin from "./linkedin.svg";
import Mail from "./mail.svg";
import Mapbox48 from "./mapbox_48.svg";
import Nextjs48 from "./nextjs_48.svg";
import Postgres48 from "./postgres_48.svg";
import React48 from "./react_48.svg";
import Redux48 from "./redux_48.svg";
import Typescript48 from "./typescript_48.svg";

const iconMap = {
  blender_48: Blender48,
  cursor_48: Cursor48,
  docker_48: Docker48,
  dribble: Dribble,
  expressjs_48: Expressjs48,
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  mapbox_48: Mapbox48,
  nextjs_48: Nextjs48,
  postgres_48: Postgres48,
  react_48: React48,
  redux_48: Redux48,
  typescript_48: Typescript48,
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
