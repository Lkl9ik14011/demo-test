import { createTheme } from '@mui/material/styles';
import { red, grey } from "@mui/material/colors";

// Create a theme instance.
const Theme = createTheme({
  typography: {
    subtitle1: {
      fontSize: 12,
    },
    h6: {
      fontWeight: 600,
    },
    body1: {
      fontWeight: 500,
    },
  },
  palette: {
    primary: {
      main: "#1589FF",
      contrastText: "#fff",
      pallid: "rgba(21, 137, 255, 0.1)",
    },
    secondary: {
      main: "#68BD49",
      pallid: "rgba(104, 189, 73, 0.1)",
    },
    error: {
      main: red.A400,
      contrastText: "#fff",
      pallid: "rgba(244, 67, 54, 0.1)",
    },
    background: {
      default: "#fafbfc",
    },
    action: {
      selected: "rgba(0, 175, 203, 0.05)",
    },
    text: {
      secondary: grey[600],
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        ".ant-picker-dropdown, .ant-select-dropdown": {
          zIndex: "99999 !important",
          "& .enablesurvey-cancel-tag": {
            display: "inline",
          },
          "& .sv-es-string-viewer": {
            "& p": {
              margin: 0,
            },
          },
        },
        "#nprogress": {
          position: "relative",
          zIndex: 9999999,
          "& .bar": {
            background: `#1589FF !important`,
          },
        },
      },
    },
    MuiButton: {
      root: {
        borderRadius: "8px",
      },
      contained: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none",
        },
      },
    },
    MuiTextField: {
      root: {
        "& .MuiOutlinedInput-root": {
          borderRadius: `8px`,
        },
        "& .MuiInputBase-root": {
          lineHeight: 1.6,
        },
      },
    },
    MuiPaper: {
      elevation1: { boxShadow: "0 2px 14px 0 rgba(0, 0, 0, 0.06)" },
      rounded: { borderRadius: "8px" },
    },
    MuiListItem: {
      root: {
        "&&:hover": {
          backgroundColor: "rgba(0, 175, 203, 0.05)",
        },
      },
    },
  },
});

export default Theme;
