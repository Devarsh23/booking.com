import posts from './posts.js';
import PostItem from './postitem.js';

const PostList = (size) => {
    return (`
            <ul class="list-group rounded-0">
                ${
                    posts.map(post => {
                        return(PostItem(post, size));
                    }).join('') 
                }
            </ul>
    `);
}

export default PostList;
