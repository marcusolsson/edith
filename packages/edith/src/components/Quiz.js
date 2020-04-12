import React from "react"

import Question from "./Question"

export default props => {
  const quiz = JSON.parse(props.children)

  return (
    <div
      style={{
        marginTop: 70,
        marginBottom: 70,
      }}
    >
      {quiz.questions.map((question, index) => {
        return <Question key={index} question={question} />
      })}
    </div>
  )
}
