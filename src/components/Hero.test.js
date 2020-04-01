import React from "react"
import renderer from "react-test-renderer"

import Hero from "./Hero"

describe("Hero", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Hero title="Foo" description="Bar" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
