import { DARK, LIGHT } from "./colors";
import { breakpoints } from "./breakpoint";

export const theme = {
  color: { light: LIGHT, dark: DARK },
  font: {
    family: {
      default: `"Open Sans", sans-serif`,
    },
  },
  breakpoints,
};
