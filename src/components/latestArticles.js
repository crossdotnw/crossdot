import * as React from "react";
import ArticleCard from './articleCard';
import { latest_article_card_container, latest_article_container } from "./latestArticles.module.css";

const LatestArticles = ({ articles }) => {
    return (
        <div>
            <div className={latest_article_container}>
                <h1>Latest Articles</h1>
                <div className={latest_article_card_container}>
                    {articles.nodes.map(article => (
                        <ArticleCard article={article.frontmatter} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LatestArticles