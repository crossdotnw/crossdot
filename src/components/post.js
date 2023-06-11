import { Container } from '@mui/material';
import * as React from 'react';

const Post = ({ children }) => {

    return (
        <Container maxWidth='md' sx={{ mt: 5 }}>
            {children}
        </Container>
    )
}

export default Post;