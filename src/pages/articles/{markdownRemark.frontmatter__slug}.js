import { Container, Typography } from "@mui/material"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../../components/layout"
import Post from "../../components/post"

export default function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const image = frontmatter.featuredImage && getImage(frontmatter.featuredImage.childImageSharp.gatsbyImageData)
  return (
    <Layout pageTitle={frontmatter.title}>
      <Post>
        <Typography variant='h2' component='h1'>{frontmatter.title}</Typography>
        <Typography variant='subtitle1' color='text.secondary' component='h2' >{frontmatter.date} {frontmatter.author && `by ${frontmatter.author}`} </Typography>
        <Container sx={{ mt: 5, mb: 5 }}>
          <GatsbyImage image={image} alt={frontmatter.title} style={{ borderRadius: 10 }} />
        </Container>
        <Typography variant='body1' component='div'
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Post>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        summary
        featured
        author
        featuredImage {
          childImageSharp {
            gatsbyImageData(
              width: 800
            )
          }
        }
      }
    }
  }
`