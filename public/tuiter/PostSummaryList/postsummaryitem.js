const PostSummaryItem = (post) => {
    return(`
         <li class="list-group-item">
            <div class="row">
                <div class="wd-topic d-flex flex-column col-10">
                    <label class="wd-topic wd-fg-color-light-gray">${post.topic}</label>
                    <label class="wd-fg-color-white h6">${post.userName} <i class="fas fa-circle"></i>
                    <label class="wd-topic wd-fg-color-light-gray">-${post.time}</label></label> 
                    <label class="wd-fg-color-white h6">${post.title}</label>
                </div>
                <div class="col-2">
                    <img src=${post.image} class="wd-rounded-borders img-fluid">
                </div>
            </div>
        </li>
    `);
}
export default PostSummaryItem;
