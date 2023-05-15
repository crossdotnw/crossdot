import * as React from 'react';

import { post_container } from './post.module.css';

const Post = ({ children }) => {

    return (
        <div className={post_container}>
            {children}
        </div>
    )
}

export default Post;