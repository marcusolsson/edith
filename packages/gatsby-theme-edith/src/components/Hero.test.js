import React from "react"
import { render } from "@testing-library/react"

import Hero from "./Hero"

describe("Hero", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Hero title="Foo" description="Bar" />)
    expect(asFragment()).toMatchSnapshot()
  })
})
