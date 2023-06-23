import { Button, Card, CardActions, CardContent, Typography } from "@mui/material"
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"

const ArticleCard = ({ article, featured, showImage }) => {

    let slug = "/articles/" + article.slug + "/"
    const image = article.featuredImage && getImage(article.featuredImage.childImageSharp.gatsbyImageData)

    return (
        <Link to={slug} style={{textDecoration: "none"}}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "end" }}>
                {showImage && <GatsbyImage image={image} alt={article.title} />}
                <CardContent>
                    <Typography variant={featured ? "h2" : "h5"} >{article.title}</Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>{article.date}</Typography>
                    <Typography variant="body1" color="text.secondary">{article.summary}</Typography>
                </CardContent>
                <CardActions>
                    <Button size="large">Read More</Button>
                </CardActions>
            </Card>
        </Link>
    )
}

export default ArticleCard
