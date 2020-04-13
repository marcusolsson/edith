import React from "react"
import { render } from "@testing-library/react"

import ChipGroup from "./ChipGroup"

describe("ChipGroup", () => {
  it("renders correctly with no labels", () => {
    const { asFragment } = render(<ChipGroup />)
    expect(asFragment()).toMatchSnapshot()
  })

  it("renders correctly with one label", () => {
    const labels = ["Foo"]
    const { asFragment } = render(<ChipGroup labels={labels} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it("renders correctly with multiple labels", () => {
    const labels = ["Foo", "Bar", "Baz"]
    const { asFragment } = render(<ChipGroup labels={labels} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
