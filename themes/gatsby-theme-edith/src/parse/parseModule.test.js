import u from "unist-builder"

import parse from "./parseModule"

describe("parse", () => {
  it("parses module titles", () => {
    const ast = u("root", [
      u("element", { tagName: "h1" }, [u("text", "Module title")]),
      u("text", "\n"),
      u("element", { tagName: "h2" }, [u("text", "Introduction")]),
      u("text", "\n"),
      u("element", { tagName: "p" }, [u("text", "This is about sheep.")]),
      u("text", "\n"),
      u("element", { tagName: "p" }, [
        u("text", "Lots of "),
        u("element", { tagName: "em" }, [u("text", "sheep")]),
      ]),
      u("text", "\n"),
      u("element", { tagName: "h2" }, [u("text", "Do this")]),
      u("text", "\n"),
      u("element", { tagName: "h2" }, [u("text", "Do that")]),
      u("text", "\n"),
      u("element", { tagName: "ul" }, [
        u("element", { tagName: "li" }, "First"),
        u("text", "\n"),
        u("element", { tagName: "li" }, "Second"),
        u("text", "\n"),
        u("element", { tagName: "li" }, "Third"),
      ]),
    ])

    expect(parse(ast)).toMatchSnapshot()
  })
})
