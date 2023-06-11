import { Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "gatsby";
import * as React from "react";
import ArticleCard from './articleCard';

const LatestArticles = ({ articles }) => {
    return (
        <Container maxWidth="lg" >
            <Typography variant="h2" textAlign="center" gutterBottom>Latest Articles</Typography>
            <Grid container spacing={5} sx={{ mb: 5 }}>
                {articles.nodes.map(article => (
                    <Grid item xs={12} md={6} key={article.id}>
                        <ArticleCard article={article.frontmatter} />
                    </Grid>
                ))}
            </Grid >
            <Typography align="center">
                <Link to="/articles"><Button size="large">See More</Button></Link>
            </Typography>
        </Container >
    )
}

export default LatestArticles
