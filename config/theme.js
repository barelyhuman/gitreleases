export const colors = {
  white: ["#FFF"],
  black: ["#0E0E20"],
  black2: ["#3C4C61"],
  gray: ["#DCDEE0", "#E9ECF3"],
  green: ["#0EC54C", "#3FE07C", "#E2FFEC"],
  red: ["#F24931", "#FF644F", "#FFDFDB"],
  yellow: ["#D7A700", "#FFDD64", "#FFF4CF"],
  blue: ["#13A3E1", "#42C6FF", "#CAEFFF"],
  indigo: ["#0E049B", "#3B00E7", "#F9F8FF"],
  cyan: ["#05DFE4", "#00F3F9", "#DDFEFF"],
};

export const theme = {
  text: {
    lighter: colors.gray[0],
    light: colors.white[0],
    default: colors.black[0],
    dark: colors.black[0],
  },
  base: {
    light: colors.white[0],
    default: colors.white[0],
    dark: colors.black[0],
  },
  disabled: {
    light: colors.gray[1],
    default: colors.gray[0],
  },
  primary: {
    light: colors.indigo[2],
    default: colors.indigo[1],
    dark: colors.indigo[0],
  },
  secondary: {
    light: colors.cyan[2],
    default: colors.cyan[1],
    dark: colors.cyan[0],
  },
  warning: {
    light: colors.yellow[2],
    default: colors.yellow[1],
    dark: colors.yellow[0],
  },
  success: {
    light: colors.green[2],
    default: colors.green[1],
    dark: colors.green[0],
  },
  error: {
    light: colors.red[2],
    default: colors.red[1],
    dark: colors.red[0],
  },
};
