import React from "react"
import { render } from "@testing-library/react"

import Quiz from "./Quiz"

describe("Quiz", () => {
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
    const json = `
    {
        "questions": [
            {
                "question": "Foo?",
                "answers": [
                    {
                        "answer": "Bar!",
                        "correct": true,
                        "response": "Right"
                    },
                    {
                        "answer": "Baz!",
                        "response": "Wrong"
                    }
                ]
            }
        ]
    }
    `
    const { asFragment } = render(<Quiz>{json}</Quiz>)
    expect(asFragment()).toMatchSnapshot()
  })
})
