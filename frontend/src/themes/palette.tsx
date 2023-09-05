/**
 * Color intention that you want to used in your theme
 * @param {JsonObject} theme Theme customization object
 */


interface Theme {
  customization: {
    navType: string; 
  };
  colors: {
    darkPaper: string;

    primaryLight: string;
    primaryMain: string;
    primaryDark: string;
    primary200: string;
    primary800: string;
    secondaryLight:string;
    secondaryMain:string;
    secondaryDark:string;
    secondary200:string;
    secondary800:string;
    errorLight:string;
    errorMain:string;
    errorDark:string;
    orangeLight:string;
    orangeMain:string;
  orangeDark:string;
   warningLight:string;
warningMain:string;
warningDark:string;
successLight:string;
success200:string;
successMain:string;
successDark:string;
 grey50:string;
    grey100:string;
      darkTextSecondary:string;
    heading:string;
   darkTextPrimary:string;
textDark:string;

 darkLevel1:string;
 darkLevel2:string;
 darkBackground:string;
 paper:string;

 backgroundDefault:string





    // ... Define other colors
  };
  
  // Define other theme properties as needed
}

/**
 * Color intention that you want to use in your theme
 * @param {Theme} theme Theme object with TypeScript type
 */
export default function themePalette(theme : Theme) {
  const typedTheme = theme as Theme; 
  return {
    mode: theme?.customization?.navType,
    common: {
      black: theme.colors?.darkPaper
    },
    primary: {
      light: theme.colors?.primaryLight,
      main: theme.colors?.primaryMain,
      dark: theme.colors?.primaryDark,
      '200': theme.colors?.primary200,
      '800': theme.colors?.primary800
    },
    secondary: {
      light: theme.colors?.secondaryLight,
      main: theme.colors?.secondaryMain,
      dark: theme.colors?.secondaryDark,
      '200': theme.colors?.secondary200,
      '800': theme.colors?.secondary800
    },
    error: {
      light: theme.colors?.errorLight,
      main: theme.colors?.errorMain,
      dark: theme.colors?.errorDark
    },
    orange: {
      light: theme.colors?.orangeLight,
      main: theme.colors?.orangeMain,
      dark: theme.colors?.orangeDark
    },
    warning: {
      light: theme.colors?.warningLight,
      main: theme.colors?.warningMain,
      dark: theme.colors?.warningDark
    },
    success: {
      light: theme.colors?.successLight,
      200: theme.colors?.success200,
      main: theme.colors?.successMain,
      dark: theme.colors?.successDark
    },
    grey: {
      50: theme.colors?.grey50,
      100: theme.colors?.grey100,
      500: theme.colors?.darkTextSecondary,
      600: theme.colors?.heading,
      700: theme.colors?.darkTextPrimary,
      900: theme.colors?.textDark
    },
    dark: {
      light: theme.colors?.darkTextPrimary,
      main: theme.colors?.darkLevel1,
      dark: theme.colors?.darkLevel2,
      800: theme.colors?.darkBackground,
      900: theme.colors?.darkPaper
    },
    text: {
      primary: theme.colors?.darkTextPrimary,
      secondary: theme.colors?.darkTextSecondary,
      dark: theme.colors?.textDark,
      hint: theme.colors?.grey100
    },
    background: {
      paper: theme.colors?.paper,
      default: theme.colors?.backgroundDefault
    }
  };
}


