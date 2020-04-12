import { createMuiTheme } from "@material-ui/core/styles"

export default theme =>
  createMuiTheme({
    ...theme,
    palette: {
      primary: {
        main: "#ff0000",
      },
    },
  })
