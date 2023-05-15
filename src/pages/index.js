import { graphql } from "gatsby";
import * as React from "react";
import Jumbotron from '../components/jumbotron';
import LatestArticles from '../components/latestArticles';
import Layout from '../components/layout';

const IndexPage = ({ data }) => {

  const articles = data.allMarkdownRemark;

  return (
    <Layout pageTitle="crossdot">
      <Jumbotron />
      <LatestArticles articles={articles} />
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
                    }
                }
            }
        }
`