const visit = require("unist-util-visit")

/**
 * TODO: This duplicates a lot of what's in parseModule, but currently needed to be
 * able to be imported in gatsby-node.js
 */
exports.parseModuleTitles = ast => {
  let module = {}

  let units = []
  let currentUnit = {}
  visit(ast, "element", node => {
    if (node.tagName === "h1") {
      // Parse module title.
      let title = ""
      visit(node, "text", node => {
        title = title + node.value
      })
      module.title = title
    } else if (node.tagName === "h2") {
      // Close the previous unit.
      if (currentUnit.title) {
        units.push(currentUnit)
        currentUnit = {
          components: [],
        }
      }

      // Parse unit title.
      let title = ""
      visit(node, "text", node => {
        title = title + node.value
      })
      currentUnit.title = title
    } else {
      return visit.SKIP
    }
  })

  // Close last unit.
  if (currentUnit.title) {
    units.push(currentUnit)
  }

  module.units = units

  return module
}
