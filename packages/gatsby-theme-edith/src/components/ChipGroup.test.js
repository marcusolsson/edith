import React from "react"
import renderer from "react-test-renderer"

import ChipGroup from "./ChipGroup"

describe("ChipGroup", () => {
  it("renders correctly with no labels", () => {
    const tree = renderer.create(<ChipGroup />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("renders correctly with one label", () => {
    const labels = ["Foo"]
    const tree = renderer.create(<ChipGroup labels={labels} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("renders correctly with multiple labels", () => {
    const labels = ["Foo", "Bar", "Baz"]
    const tree = renderer.create(<ChipGroup labels={labels} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
