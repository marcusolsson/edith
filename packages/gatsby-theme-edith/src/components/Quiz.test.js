import React from "react"
import renderer from "react-test-renderer"

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
    const tree = renderer.create(<Quiz>{json}</Quiz>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
