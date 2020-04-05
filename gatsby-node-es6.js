import { createFilePath } from "gatsby-source-filesystem"
import parseModule from "./src/parse/parseModule"

const path = require(`path`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `src/modulesmd` })

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `src/coursesmd` })

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
        filter: { frontmatter: { type: { eq: "course" } } }
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
        filter: { frontmatter: { type: { eq: "module" } } }
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
      component: path.resolve(`./src/templates/module.js`),
      context: {
        slug: node.fields.slug,
        index: 0,
      },
    })

    const module = parseModule(node.htmlAst)

    module.units.forEach((unit, index) => {
      createPage({
        path: "/modules" + node.fields.slug + (index + 1),
        component: path.resolve(`./src/templates/module.js`),
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
      component: path.resolve(`./src/templates/course.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
