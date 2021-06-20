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
  process.env.ICONS_FOLDER || "/src/assets/icons/"
);
const icons = readdirSync(iconsPath).filter(isSVG).map(removeExtension);

const indexContent = [
  "import React from 'react';",
  "import { Icon } from './Icon';\n",
  "interface IconProps {\n name: string; \n size: string | number; \n color: string; \n};",
  "",
  icons
    .map(
      (icon) =>
        `export const ${toPascalCase(
          icon
        )}: React.FC<IconProps> = (props) => <Icon {...props} name="${icon}" />;`
    )
    .join("\n"),
].join("\n");

writeFileSync(`src/components/icons/index.tsx`, indexContent);
console.log("Icon component file created! ✅");

const iconMapContent = [
  icons
    .map(
      (icon) =>
        `import { ReactComponent as ${toPascalCase(
          icon
        )} } from './${icon}.svg';`
    )
    .join("\n"),
  "",
  "export default {",
  icons.map((icon) => `"${icon}": ${toPascalCase(icon)}, `).join("\n"),
  "};",
].join("\n");

writeFileSync(`src/assets/icons/icon-map.ts`, iconMapContent);
console.log("Web Icon Map created! ✅");

const iconListContent = [
  "export default [",
  icons.map((icon) => `"${icon}"`),
  "];",
].join("");

writeFileSync(`src/assets/icons/icon-list.ts`, iconListContent);
console.log("Web Icon List created! ✅");
