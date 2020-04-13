import React from "react"
import { render } from "@testing-library/react"

import Question from "./Question"

describe("Question", () => {
  it("renders correctly", () => {
    const question = {
      question: "Foo?",
      answers: [
        {
          answer: "Bar!",
          correct: true,
          response: "Right",
        },
        {
          answer: "Baz!",
          response: "Wrong",
        },
      ],
    }
    const { asFragment } = render(<Question question={question} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
