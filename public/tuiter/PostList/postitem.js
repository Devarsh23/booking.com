const PostItem = (post, size) => {
    if (size==="xs") {
        return (`
         <div class="d-flex flex-row">
            <div class="wd-topic d-flex flex-column">
                <img src="${post.dp}" class="rounded-pill">
            </div>
            <div class="ps-4">
                <label class="wd-fg-color-white h6">${post.name} <i class="fas fa-check-circle"></i></label>
                <label class="wd-topic wd-fg-color-light-gray">${post.userName}</i>
                <label class="wd-topic wd-fg-color-light-gray">&#183; ${post.time}</label></label>
                <br>
                <label class="wd-fg-color-white h6">${post.caption}</label>
                <div class="wd-rounded-borders border border-secondary">
                    ${post.imageTitle ?
                    `<img src=${post.image} class="img-fluid border-bottom border-secondary">
                            <label class="wd-fg-color-white h6 ps-1">${post.imageTitle}</label>
                            <label class="ps-1">${post.text}</label>` :
                    `<img src=${post.image} class="img-fluid border-bottom border-secondary wd-rounded-borders">`}
                </div>
                <div>
                    <i class="far fa-comment"></i>
                    <label class="wd-comment-text">&nbsp;&nbsp;${post.comments}</label>
                    <i class="fas fa-retweet ps-3"></i>
                    <label class="wd-comment-text">&nbsp;&nbsp;${post.retweets}</label>
                    <i class="far fa-heart ps-3"></i>
                    <label class="wd-comment-text">&nbsp;&nbsp;${post.likes}</label>
                    <i class="fa fa-arrow-up-from-bracket ps-3"></i>
                </div>
                <br>
            </div>
        </div>
    `);
    }
    else if (size==="sm") {
        return (`
         <div class="d-flex flex-row">
            <div class="wd-topic d-flex flex-column">
                <img src="${post.dp}" class="rounded-pill">
            </div>
            <div class="ps-4">
                <label class="wd-fg-color-white h6">${post.name} <i class="fas fa-check-circle"></i></label>
                <label class="wd-topic wd-fg-color-light-gray">${post.userName}</i>
                <label class="wd-topic wd-fg-color-light-gray">&#183; ${post.time}</label></label>
                <br>
                <label class="wd-fg-color-white h6">${post.caption}</label>
                <div class="wd-rounded-borders border border-secondary">
                    ${post.imageTitle ?
            `<img src=${post.image} class="img-fluid border-bottom border-secondary">
                            <label class="wd-fg-color-white h6 ps-1">${post.imageTitle}</label>
                            <label class="ps-1">${post.text}</label>` :
            `<img src=${post.image} class="img-fluid border-bottom border-secondary wd-rounded-borders">`}
                </div>
                <div>
                    <i class="far fa-comment"></i>
                    <label class="wd-comment-text">&nbsp;&nbsp;${post.comments}</label>
                    <i class="fas fa-retweet ps-4"></i>
                    <label class="wd-comment-text">&nbsp;&nbsp;${post.retweets}</label>
                    <i class="far fa-heart ps-4"></i>
                    <label class="wd-comment-text">&nbsp;&nbsp;${post.likes}</label>
                    <i class="fa fa-arrow-up-from-bracket ps-4"></i>
                </div>
                <br>
            </div>
        </div>
    `);
    }
    else {
        return (`
         <div class="d-flex flex-row">
            <div class="wd-topic d-flex flex-column">
                <img src="${post.dp}" class="rounded-pill">
            </div>
            <div class="ps-4">
                <label class="wd-fg-color-white h6">${post.name} <i class="fas fa-check-circle"></i></label>
                <label class="wd-topic wd-fg-color-light-gray">${post.userName}</i>
                <label class="wd-topic wd-fg-color-light-gray">&#183; ${post.time}</label></label>
                <br>
                <label class="wd-fg-color-white h6">${post.caption}</label>
                <div class="wd-rounded-borders border border-secondary">
                    ${post.imageTitle ?
            `<img src=${post.image} class="img-fluid border-bottom border-secondary">
                    <label class="wd-fg-color-white h6 ps-1">${post.imageTitle}</label>
                    <label class="ps-1">${post.text}</label>` :
            `<img src=${post.image} class="img-fluid border-bottom border-secondary wd-rounded-borders">`}
                </div>
                <div>
                    <i class="far fa-comment"></i>
                    <label class="wd-comment-text">&nbsp;&nbsp;${post.comments}</label>
                    <i class="fas fa-retweet ps-5"></i>
                    <label class="wd-comment-text">&nbsp;&nbsp;${post.retweets}</label>
                    <i class="far fa-heart ps-5"></i>
                    <label class="wd-comment-text">&nbsp;&nbsp;${post.likes}</label>
                    <i class="fa fa-arrow-up-from-bracket ps-5"></i>
                </div>
                <br>
            </div>
        </div>
    `);
    }
}
export default PostItem;
