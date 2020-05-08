import React from "react"

import { graphql } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"

import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

import ChipGroup from "../components/ChipGroup"
import DefaultLayout from "../components/DefaultLayout"
import LearningObjectives from "../components/LearningObjectives"
import ModuleCard from "../components/ModuleCard"

import parseCourse from "../parse/parseCourse"
import parseModule from "../parse/parseModule"
import "katex/dist/katex.min.css"

/**
 * Template for a course page.
 */
export default ({ data }) => {
  const intl = useIntl()

  const courseNode = data.course

  const course = parseCourse(courseNode.htmlAst)

  const modules = courseNode.frontmatter.curriculum
    ?.map(item =>
      data.modules.edges
        .map(({ node }) => node)
        .find(module => {
          return module.fields.slug === item
        })
    )
    .map(module => {
      return {
        ...module,
        ...parseModule(module.htmlAst),
      }
    })

  return (
    <DefaultLayout>
      <Typography variant="overline">
        {intl.formatMessage({ id: "text.course" })}
      </Typography>
      <Typography variant="h1">{course.title}</Typography>
      <ChipGroup labels={course.topics} />

      {course.elements}

      {course.learningObjectives ? (
        <LearningObjectives items={course.learningObjectives} />
      ) : null}

      {modules ? (
        <Typography variant="h2" paragraph>
          {intl.formatMessage({ id: "course.curriculum" })}
        </Typography>
      ) : null}

      <Grid container spacing={2}>
        {modules.map((module, index) => {
          return (
            <Grid item xs={12} key={index} style={{ maxWidth: "500px" }}>
              <ModuleCard module={module} />
            </Grid>
          )
        })}
      </Grid>
    </DefaultLayout>
  )
}

export const query = graphql`
  query($slug: String!) {
    course: markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        curriculum
      }
      fields {
        slug
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
`
