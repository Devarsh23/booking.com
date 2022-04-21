import posts from './posts.js';
import PostSummaryItem from './postsummaryitem.js';

const PostSummaryList = () => {
    return (`
            <ul class="list-group rounded-0">
                ${
                    posts.map(post => {
                        return(PostSummaryItem(post));
                    }).join('')
                }
            </ul>
`); }

export default PostSummaryList;
