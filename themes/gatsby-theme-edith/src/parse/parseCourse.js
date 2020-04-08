import React from "react"
import visit from "unist-util-visit"
import map from "unist-util-map"
import rehypeReact from "rehype-react"

import Link from "@material-ui/core/Link"
import Typography from "@material-ui/core/Typography"
import Table from "@material-ui/core/Table"
import TableHead from "@material-ui/core/TableHead"
import TableBody from "@material-ui/core/TableBody"
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    h1: Typography,
    h2: Typography,
    h3: Typography,
    h4: Typography,
    h5: Typography,
    h6: Typography,
    a: Link,
    p: Typography,
    table: Table,
    thead: TableHead,
    tbody: TableBody,
    tr: TableRow,
    td: TableCell,
    th: TableCell,
  },
}).Compiler

export default ast => {
  let course = {
    elements: [],
  }

  visit(ast, "element", node => {
    if (node.tagName === "h1") {
      // Parse module title.
      let title = ""
      visit(node, "text", node => {
        title = title + node.value
      })
      course.title = title
    } else {
      const next = map(node, n => {
        const headers = ["h1", "h2", "h3", "h4", "h5", "h6"]
        if (headers.includes(n.tagName)) {
          return Object.assign({}, n, {
            tagName: headers[headers.indexOf(n.tagName)],
            properties: {
              ...n.properties,
              variant: headers[headers.indexOf(n.tagName)],
            },
          })
        } else if (n.tagName === "p") {
          return Object.assign({}, n, {
            properties: {
              ...n.properties,
              paragraph: true,
            },
          })
        }
        return n
      })
      course.elements.push(renderAst(next))
      return visit.SKIP
    }
  })

  return course
}
