import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            description
            logo
            url: siteUrl
          }
        }
      }
    `
  )
  return site.siteMetadata
}
