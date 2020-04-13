import React from "react"
import renderer from "react-test-renderer"

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
    const tree = renderer.create(<Question question={question} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
