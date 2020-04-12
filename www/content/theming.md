---
type: module
difficulty: Intermediate
audience: ["Educator"]
topics: ["Configuration"]
---

# Creating custom themes

## Introduction

Edith is built using [Material UI](https://material-ui.com/) which lets you customize your application using _themes_.

To override the default theme:

1. In the root directory of your project, create the following directory:

   ```
   mkdir -p src/gatsby-theme-edith/components
   cd src/gatsby-theme-edith/components
   ```

1. In the `components` directory, create a file called `theme.js`:

   ```js:title=src/gatsby-theme-edith/components/theme.js
   import { createMuiTheme } from "@material-ui/core/styles"

   export default theme =>
     createMuiTheme({
       ...theme,
     })
   ```

1. Change the primary color by overriding the palette:

   ```js:title=src/gatsby-theme-edith/components/theme.js
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
   ```

1. Start the site:

   ```
   gatsby develop
   ```

1. Navigate to [localhost:8000](http://localhost:8000).

For more information on what you can customize, check out [Theming](https://material-ui.com/customization/theming/) in the Material UI docs.

> **What just happened?**
>
> By adding a `theme.js` in `src/gatsby-theme-edith/components`, you're [_shadowing_](https://www.gatsbyjs.org/docs/themes/shadowing/) the original `theme.js` file in Edith.
