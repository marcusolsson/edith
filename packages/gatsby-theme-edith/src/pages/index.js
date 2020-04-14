import React from "react"

import { graphql } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"

import { makeStyles } from "@material-ui/core/styles"

import FormControl from "@material-ui/core/FormControl"
import Grid from "@material-ui/core/Grid"
import MenuItem from "@material-ui/core/MenuItem"
import Select from "@material-ui/core/Select"
import Typography from "@material-ui/core/Typography"

import DefaultLayout from "../components/DefaultLayout"
import ContentCard from "../components/ContentCard"
import Hero from "../components/Hero"

import parseModule from "../parse/parseModule"

const useStyles = makeStyles(theme => ({
  filterGroup: {
    marginBottom: theme.spacing(2),
  },
  noResults: {
    padding: theme.spacing(5),
  },
  formControl: {
    width: "100%",
  },
}))

/**
 * The landing page. Browse modules and courses.
 */
export default ({ data }) => {
  const intl = useIntl()
  const classes = useStyles()

  const defaults = {
    type: intl.formatMessage({ id: "browse.anyType" }),
    topic: intl.formatMessage({ id: "browse.anyTopic" }),
    audience: intl.formatMessage({ id: "browse.anyAudience" }),
    difficulty: intl.formatMessage({ id: "browse.anyDifficulty" }),
  }

  // State
  const [state, setState] = React.useState({
    selectedType: defaults.type,
    selectedTopic: defaults.topic,
    selectedAudience: defaults.audience,
    selectedDifficulty: defaults.difficulty,
  })

  // Event handlers
  const handleTopicChange = event => {
    setState({ ...state, selectedTopic: event.target.value })
  }
  const handleTypeChange = event => {
    setState({ ...state, selectedType: event.target.value })
  }
  const handleAudienceChange = event => {
    setState({ ...state, selectedAudience: event.target.value })
  }
  const handleDifficultyChange = event => {
    setState({ ...state, selectedDifficulty: event.target.value })
  }

  const allNodes = data.allMarkdownRemark.edges
    .map(({ node }) => node)
    .sort((a, b) => {
      if (a.title < b.title) {
        return -1
      }
      if (b.title < a.title) {
        return 1
      }
      return 0
    })

  // Build filters
  const allTypes = ["course", "module"]
  const allTopics = [
    ...new Set(allNodes.flatMap(node => node.frontmatter.topics)),
  ]
    .filter(t => t)
    .sort()
  const allAudiences = [
    ...new Set(allNodes.flatMap(node => node.frontmatter.audience)),
  ]
    .filter(a => a)
    .sort()
  const allDifficulties = [
    ...new Set(allNodes.map(node => node.frontmatter.difficulty)),
  ]
    .filter(d => d)
    .sort()

  // Current state
  const {
    selectedType,
    selectedTopic,
    selectedAudience,
    selectedDifficulty,
  } = state

  // Build filtered list of content nodes.
  const filteredNodes = allNodes
    .filter(node => {
      // Filter by type
      return (
        selectedType === node.frontmatter.type || selectedType === defaults.type
      )
    })
    .filter(node => {
      // Filter by topic
      return (
        node.frontmatter.topics?.find(t => selectedTopic === t) ||
        selectedTopic === defaults.topic
      )
    })
    .filter(node => {
      // Filter by audience
      return (
        node.frontmatter.audience?.find(a => selectedAudience === a) ||
        selectedAudience === defaults.audience
      )
    })
    .filter(node => {
      // Filter by difficulty
      return (
        node.frontmatter.difficulty?.includes(selectedDifficulty) ||
        selectedDifficulty === defaults.difficulty
      )
    })

  const markdownModules = filteredNodes
    .map(node => {
      const module = parseModule(node.htmlAst)
      module.audience = node.frontmatter.audience
      module.difficulty = node.frontmatter.difficulty
      module.topics = node.frontmatter.topics
      module.type = node.frontmatter.type
      module.fields = { slug: node.fields.slug }
      return module
    })

    .sort((a, b) => {
      if (a.title < b.title) {
        return -1
      } else if (a.title > b.title) {
        return 1
      }
      return 0
    })

  return (
    <DefaultLayout>
      <Hero
        title={intl.formatMessage({ id: `browse.hero.title` })}
        description={intl.formatMessage({ id: `browse.hero.description` })}
      />
      {/* Filter boxes */}
      <Grid container spacing={1} className={classes.filterGroup}>
        <Grid item xs={12} sm={3}>
          <FormControl className={classes.formControl}>
            <Select
              variant="outlined"
              value={selectedType}
              onChange={handleTypeChange}
            >
              <MenuItem value={defaults.type}>{defaults.type}</MenuItem>
              {allTypes.map((type, index) => (
                <MenuItem value={type} key={index}>
                  {intl.formatMessage({ id: `text.${type}` })}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControl className={classes.formControl}>
            <Select
              variant="outlined"
              value={selectedTopic}
              onChange={handleTopicChange}
            >
              <MenuItem value={defaults.topic}>{defaults.topic}</MenuItem>
              {allTopics.map((topic, index) => (
                <MenuItem value={topic} key={index}>
                  {topic}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControl className={classes.formControl}>
            <Select
              variant="outlined"
              value={selectedAudience}
              onChange={handleAudienceChange}
            >
              <MenuItem value={defaults.audience}>{defaults.audience}</MenuItem>
              {allAudiences.map((audience, index) => (
                <MenuItem value={audience} key={index}>
                  {audience}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControl className={classes.formControl}>
            <Select
              variant="outlined"
              value={selectedDifficulty}
              onChange={handleDifficultyChange}
            >
              <MenuItem value={defaults.difficulty}>
                {defaults.difficulty}
              </MenuItem>
              {allDifficulties.map((difficulty, index) => (
                <MenuItem value={difficulty} key={index}>
                  {difficulty}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      {/* Content cards */}
      <Grid container spacing={2}>
        {markdownModules.length > 0 ? (
          markdownModules.map((module, index) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <ContentCard content={module} />
              </Grid>
            )
          })
        ) : (
          // No results found
          <Typography variant="body2" className={classes.noResults}>
            {intl.formatMessage({ id: "browse.noResults" })}
          </Typography>
        )}
      </Grid>
    </DefaultLayout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { type: { in: ["module", "course"] } } }
    ) {
      edges {
        node {
          frontmatter {
            audience
            difficulty
            topics
            type
          }
          fields {
            slug
          }
          htmlAst
        }
      }
    }
  }
`
