const { readdirSync, writeFileSync } = require("fs");
const path = require("path");

const isSVG = (file) => /.svg$/.test(file);
const removeExtension = (file) => file.split(".")[0];
const toPascalCase = (string) =>
  string
    .match(/[a-z0-9]+/gi)
    .map((word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase())
    .join("");

// getting all the icons
const iconsPath = path.join(
  process.cwd(),
  process.env.ICONS_FOLDER || "components/icons"
);
const icons = readdirSync(iconsPath).filter(isSVG).map(removeExtension);

const indexContent = [
  icons
    .map((icon) => `import ${toPascalCase(icon)} from './${icon}.svg';`)
    .join("\n"),
  "const iconMap = {",
  icons.map((icon) => `"${icon}": ${toPascalCase(icon)}, `).join("\n"),
  "};",
  `
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

  export default Icon;`,
].join("\n\n");

writeFileSync(`components/icons/index.tsx`, indexContent);
console.log("Icon component file created! ✅");
