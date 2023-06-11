import { Box, Grid, TablePagination, Typography } from '@mui/material'
import { Link } from 'gatsby'
import * as React from 'react'
import ArticleCard from './articleCard'

const ArticlesList = ({ articles }) => {

    const [page, setPage] = React.useState(0);

    let num_articles = articles.nodes.length
    let articles_slice = articles.nodes.slice(page * 10, (page + 1) * 10)

    return (
        <Box>
            <Typography variant='h2' sx={{ textAlign: 'center', mt: 5 }}>Articles</Typography>
            <Grid container spacing={2} sx={{ mt: 5 }}>
                {
                    articles_slice.map((article) => {
                        return (
                            <Grid item sm={12} md={6} key={article.id}>
                                <Link to={article.frontmatter.slug} key={article.frontmatter.slug} style={{ textDecoration: 'none' }}>
                                    <ArticleCard article={article.frontmatter} />
                                </Link>
                            </Grid>
                        )
                    })
                }
            </Grid>

            <TablePagination
                component="div"
                count={num_articles}
                page={page}
                onPageChange={(event, newPage) => {
                    setPage(newPage);
                }}
                rowsPerPage={10}
            />
        </Box>
    )
}

export default ArticlesList