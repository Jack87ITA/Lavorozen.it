import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { colors } from "./colors";
// import { fonts } from "./fonts";

const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: "light",
};

export const theme = extendTheme({
  colors,
  config,
});
