import { Link } from 'gatsby'
import * as React from "react"
import { card_container, card_date, card_summary, card_title } from "./articleCard.module.css"

const ArticleCard = ({ article }) => {

    let slug = "/articles/" + article.slug + "/"
    return (
        <Link to={slug} className={card_container}>
            <h1 className={card_title}>{article.title}</h1>
            <p className={card_date}>{article.date}</p>
            <p className={card_summary}>{article.summary}</p>
        </Link>
    )
}

export default ArticleCard