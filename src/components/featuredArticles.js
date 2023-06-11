import * as React from "react"
import Carousel from "react-material-ui-carousel"
import ArticleCard from "./articleCard"


const FeaturedArticles = ({ articles }) => {

    let featured_articles = articles.nodes.filter((article) => article.frontmatter.featured)

    return (
        <Carousel height={600} sx={{ mt: 5 }}>
            {featured_articles.map((article) => (
                <ArticleCard article={article.frontmatter} key={article.id} featured showImage />
            ))}
        </Carousel>
    )
}

export default FeaturedArticles

