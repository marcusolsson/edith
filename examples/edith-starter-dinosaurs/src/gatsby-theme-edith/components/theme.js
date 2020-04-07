import { createMuiTheme } from "@material-ui/core/styles";

export default () => {
  return createMuiTheme({
    overrides: {
      MuiTable: {
        root: {
          marginTop: 14,
          marginBottom: 14,
        },
      },
    },
    props: {
      MuiButtonBase: {
        disableRipple: true,
      },
      MuiChip: {
        color: "primary",
      },
    },
    shape: {
      borderRadius: 18,
    },
    typography: {
      fontFamily: [
        "Avenir",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      h1: {
        fontSize: 36,
        fontWeight: 700,
        letterSpacing: 0.25,
        marginBottom: 28,
      },
      h2: {
        fontSize: 28,
        fontWeight: 700,
        marginTop: 28,
        marginBottom: 24,
      },
      h3: {
        fontSize: 24,
        fontWeight: 700,
        marginTop: 24,
        marginBottom: 20,
      },
      h4: {
        fontSize: 20,
        fontWeight: 700,
        marginTop: 20,
        marginBottom: 16,
      },
      h5: {
        fontSize: 16,
        fontWeight: 700,
        marginBottom: 14,
        textTransform: "uppercase",
      },
      h6: {
        fontSize: 14,
        fontWeight: 700,
        marginBottom: 12,
        textTransform: "uppercase",
      },

      body1: {
        fontSize: 20,
      },
      body2: {
        fontSize: 18,
      },
      overline: {
        fontSize: 16,
        fontWeight: 500,
      },
    },
    palette: {
      primary: {
        main: "rgb(104, 79, 248)",
      },
    },
  });
};
