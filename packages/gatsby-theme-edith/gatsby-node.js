const { createFilePath } = require("gatsby-source-filesystem")
const { parseModuleTitles } = require("./src/parse/parseModuleTitles")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `content` })

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      courses: allMarkdownRemark(
        filter: {
          fields: { draft: { eq: false } }
          frontmatter: { type: { eq: "course" } }
        }
      ) {
        edges {
          node {
            htmlAst
            fields {
              slug
            }
          }
        }
      }
      modules: allMarkdownRemark(
        filter: {
          fields: { draft: { eq: false } }
          frontmatter: { type: { eq: "module" } }
        }
      ) {
        edges {
          node {
            htmlAst
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.modules.edges.forEach(({ node }) => {
    createPage({
      path: "/modules" + node.fields.slug,
      component: require.resolve(`./src/templates/module.js`),
      context: {
        slug: node.fields.slug,
        index: 0,
      },
    })

    const module = parseModuleTitles(node.htmlAst)

    module.units.forEach((unit, index) => {
      createPage({
        path: "/modules" + node.fields.slug + (index + 1),
        component: require.resolve(`./src/templates/module.js`),
        context: {
          slug: node.fields.slug,
          index: index,
        },
      })
    })
  })

  result.data.courses.edges.forEach(({ node }) => {
    createPage({
      path: "/courses" + node.fields.slug,
      component: require.resolve(`./src/templates/course.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
