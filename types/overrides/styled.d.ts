import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    boxShadow: string;

    typography: {
      font: string;
      fontSizes: {
        desktop: any;
        mobile: any;
      };
    };

    palette: {
      primary: string;
      secondary: string;
    };
  }
}
