import { extendTheme } from "@chakra-ui/react";

export const getTheme = () => {
  return extendTheme({
    colors: {
      primary: {
        "100": "#B62059",
        "130": "#9C1C4D",
        "70": "#DA2F71",
        "50": "#E05288",
        "30": "#EA86AC",
        "10": "#F3BAD0",
        asBg: "rgba(243, 186, 208, 0.4)",
      },
      white: "#FFF",
      gray: {
        "100": "#403B3B",
        "130": "#2A2727",
        "70": "#6A6262",
        "50": "#898080",
        "30": "#9D9595",
        "10": "#BAB5B5",
      },
    },

    styles: {
      global: {
        "html, body, #root": {
          height: "full",
          width: "full",
          overflow: "hidden",
          font: "san-serif",
        },
      },
    },
  });
};
