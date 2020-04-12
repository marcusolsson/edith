import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
  colorCorrect: {
    backgroundColor: theme.palette.success.main,
  },
  colorIncorrect: {
    backgroundColor: theme.palette.error.main,
  },
  colorCorrectDisabled: {
    backgroundColor: theme.palette.success.main,
  },
  colorIncorrectDisabled: {
    backgroundColor: theme.palette.error.main,
  },
  disabled: {
    color: theme.palette.text.disabled,
  },
}))

export default props => {
  const classes = useStyles()

  let className
  if (props.color === "correct") {
    className = props.disabled
      ? classes.colorCorrectDisabled
      : classes.colorCorrect
  } else if (props.color === "incorrect") {
    className = props.disabled
      ? classes.colorIncorrectDisabled
      : classes.colorIncorrect
  } else {
    className = classes.root
  }

  return (
    <Card className={className}>
      <CardActionArea onClick={props.onClick} disabled={props.disabled}>
        <CardContent>
          <Typography className={props.disabled ? classes.disabled : null}>
            {props.label}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
