import React from "react"

import { useIntl } from "gatsby-plugin-intl"
import { makeStyles } from "@material-ui/core/styles"

import Button from "@material-ui/core/Button"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Collapse from "@material-ui/core/Collapse"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Typography from "@material-ui/core/Typography"

import Link from "./Link"

const useStyles = makeStyles(theme => ({
  title: {
    fontSize: 18,
    fontWeight: 600,
  },
}))

/**
 * ModuleCard displays a summary of a module.
 */
export default props => {
  const classes = useStyles()
  const intl = useIntl()

  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card>
      <CardActionArea
        component={Link}
        to={"/modules" + props.module.fields.slug}
      >
        <CardContent>
          <Typography className={classes.title}>
            {props.module.title}
          </Typography>
          {props.module?.duration ? (
            <Typography variant="subtitle2" paragraph>
              {intl.formatMessage(
                { id: "time.minute" },
                { count: props.module.duration }
              )}
            </Typography>
          ) : null}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={handleExpandClick} color="primary">
          {expanded
            ? intl.formatMessage({ id: "text.seeLess" })
            : intl.formatMessage({ id: "text.seeMore" })}
        </Button>
      </CardActions>

      {/* Display a collapsible list of units. */}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <List disablePadding>
          {props.module.units?.map((unit, index) => (
            <ListItem
              button
              key={index}
              component={Link}
              to={"/modules" + props.module.fields.slug + index}
            >
              <ListItemText primary={index + 1 + ". " + unit.title} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </Card>
  )
}
