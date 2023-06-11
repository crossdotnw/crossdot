import { Container, Stack } from "@mui/material";
import { graphql } from "gatsby";
import * as React from "react";
import FeaturedArticles from "../components/featuredArticles";
import LatestArticles from '../components/latestArticles';
import Layout from '../components/layout';

const IndexPage = ({ data }) => {

  const articles = data.allMarkdownRemark;

  return (
    <Layout pageTitle="crossdot">
      <Container maxWidth="lg" >
        <Stack spacing={5}>
          <FeaturedArticles articles={articles} />
          <LatestArticles articles={articles} />
        </Stack>
      </Container>
    </Layout>

  )
}

export const Head = () => <title>crossdot</title>

export default IndexPage

export const query = graphql`
    query{
        allMarkdownRemark( sort: {frontmatter: {date: DESC}} limit: 6){
            nodes{
                    id
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        slug
                        title
                        summary
                        featured
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
        }
`
