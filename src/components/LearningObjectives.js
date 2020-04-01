import React from "react"

import { useIntl } from "gatsby-plugin-intl"
import { makeStyles } from "@material-ui/core/styles"

import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CheckIcon from "@material-ui/icons/Check"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(2),
  },
  objective: {
    display: "flex",
    alignItems: "flex-start",
  },
}))

/**
 * LearningObjectives displays a box with learning objectives.
 */
export default props => {
  const classes = useStyles()
  const intl = useIntl()

  return (
    <Card variant="outlined" className={classes.root}>
      <CardContent>
        <Typography variant="overline">
          {intl.formatMessage({ id: "text.whatYouWillLearn" })}
        </Typography>
        <Grid container spacing={2}>
          {props.objectives.map((objective, index) => (
            <Grid key={index} item xs={12} md={6}>
              <div className={classes.objective}>
                <CheckIcon color="primary" />
                &nbsp;
                <Typography>{objective}</Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  )
}
