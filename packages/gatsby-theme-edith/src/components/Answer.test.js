import React from "react"
import { render } from "@testing-library/react"

import Answer from "./Answer"

describe("Answer", () => {
  it("renders correctly by default", () => {
    const { asFragment } = render(<Answer label="Foo" />)
    expect(asFragment()).toMatchSnapshot()
  })

  it("renders correctly when answer is correct", () => {
    const { asFragment } = render(<Answer label="Foo" color="correct" />)
    expect(asFragment()).toMatchSnapshot()
  })

  it("renders correctly when answer is incorrect", () => {
    const { asFragment } = render(<Answer label="Foo" color="incorrect" />)
    expect(asFragment()).toMatchSnapshot()
  })

  it("renders correctly when disabled", () => {
    const { asFragment } = render(<Answer label="Foo" disabled />)
    expect(asFragment()).toMatchSnapshot()
  })

  it("renders correctly when disabled and answer is correct", () => {
    const { asFragment } = render(
      <Answer label="Foo" color="correct" disabled />
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it("renders correctly when disabled and answer is incorrect", () => {
    const { asFragment } = render(
      <Answer label="Foo" color="incorrect" disabled />
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
