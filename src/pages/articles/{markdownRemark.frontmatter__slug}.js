import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../../components/layout"
import Post from "../../components/post"

export default function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout pageTitle={frontmatter.title}>
      <Post>
        <div>
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <div
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
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
      }
    }
  }
`