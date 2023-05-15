import { Link } from 'gatsby'
import * as React from 'react'
import ArticleCard from './articleCard'
import { articles_container, articles_grid } from './articlesList.module.css'

const ArticlesList = ({ articles }) => {

    return (
        <div className={articles_container}>
            <h1>Articles</h1>
            <div className={articles_grid}>
                {
                    articles.nodes.map((article) => {
                        return (
                            <Link to={article.frontmatter.slug} key={article.frontmatter.slug}>
                                <ArticleCard article={article.frontmatter} />
                            </Link>
                        )
                    })
                }
            </div >
        </div >
    )
}

export default ArticlesList