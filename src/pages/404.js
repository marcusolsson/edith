import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import Typography from "@material-ui/core/Typography"
import DefaultLayout from "../components/DefaultLayout"

/**
 * 404 page
 */
export default props => {
  const intl = useIntl()
  return (
    <DefaultLayout>
      <Typography variant="h1">404</Typography>
      <Typography variant="body1">
        {intl.formatMessage({ id: "error.404" })}
      </Typography>
    </DefaultLayout>
  )
}
