import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

import Answer from "./Answer"

const useStyles = makeStyles(theme => ({
  root: {
    display: "block",
    marginTop: 28,
    marginBottom: 28,
  },
  label: {
    lineHeight: 1.5,
    color: theme.palette.text.disabled,
  },
  answer: {
    backgroundColor: theme.palette.background.default,
  },
}))

export default props => {
  const classes = useStyles()

  const [value, setValue] = React.useState("")
  const [revealed, setRevealed] = React.useState(false)

  const handleRadioChange = answer => () => {
    setValue(answer)
    setRevealed(true)
  }

  const currentAnswer = props.question.answers.find(a => a.answer === value)

  const color = currentAnswer?.correct ? "correct" : "incorrect"

  return (
    <div
      style={{
        marginTop: 28,
        marginBottom: 28,
      }}
    >
      <Typography variant="body1" className={classes.label} paragraph>
        {props.question.question}
      </Typography>
      <Grid
        container
        spacing={2}
        style={{
          marginBottom: 14,
        }}
      >
        {props.question.answers.map((answer, index) => {
          return (
            <Grid key={index} item xs={12} md={6}>
              <Answer
                onClick={handleRadioChange(answer.answer)}
                color={
                  revealed && currentAnswer.answer === answer.answer
                    ? color
                    : "default"
                }
                label={answer.answer}
                disabled={revealed}
              />
            </Grid>
          )
        })}
      </Grid>
      {revealed ? (
        <Typography variant="body2">{currentAnswer.response}</Typography>
      ) : null}
    </div>
  )
}
