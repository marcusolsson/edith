import React from "react"
import renderer from "react-test-renderer"

import Answer from "./Answer"

describe("Answer", () => {
  it("renders correctly by default", () => {
    const component = renderer.create(<Answer label="Foo" />)

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("renders correctly when answer is correct", () => {
    const component = renderer.create(<Answer label="Foo" color="correct" />)

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("renders correctly when answer is incorrect", () => {
    const component = renderer.create(<Answer label="Foo" color="incorrect" />)

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("renders correctly when disabled", () => {
    const component = renderer.create(<Answer label="Foo" disabled />)

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("renders correctly when disabled and answer is correct", () => {
    const component = renderer.create(
      <Answer label="Foo" color="correct" disabled />
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("renders correctly when disabled and answer is incorrect", () => {
    const component = renderer.create(
      <Answer label="Foo" color="incorrect" disabled />
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
