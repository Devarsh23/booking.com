import React from "react";
import posts from './posts.json';
import PostItem from './postitem';

const PostList = () => {
    return (
        <>
            <ul className="list-group rounded-0">
                {
                    posts.map(post => {
                        return(
                            <PostItem key = {post.dp} post = {post}/>
                        );
                    })
                }
            </ul>
        </>
    );
}

export default PostList;
