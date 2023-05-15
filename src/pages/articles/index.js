import { graphql } from "gatsby";
import * as React from "react";
import ArticlesList from "../../components/articlesList";
import Layout from "../../components/layout";


export default function BlogPostTemplate({ data }) {


    const articles = data.allMarkdownRemark;

    return (
        <Layout pageTitle="Articles">
            <ArticlesList articles={articles} />
        </Layout >
    )

}

// Get all the markdown files from the src/content directory
export const query = graphql`
    query{
        allMarkdownRemark( sort: {frontmatter: {date: DESC}}) {
            nodes {
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