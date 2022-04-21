import React from "react";
const PostItem = ({
                      post={
                          "dp":"/tuiter/images/elon_musk_dp_48x48.jpeg", "name":"Elon Musk", "userName": "@elonmusk", "time": "23h",
                          "caption": "Amazing show about @Inspiration4x mission!", "image": "/tuiter/images/elon_musk_post.jpeg",
                          "imageTitle":"Countdown: Inspiration 4 mission to space | Netflix Official Site",
                          "text":"From Training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space..",
                          "comments": "4.2k", "retweets": "3.5k", "likes": "37.5k"
                      }
}) => {
        return (
            <>
            <div className="d-flex flex-row">
                <div className="wd-topic d-flex flex-column">
                    <img src={post.dp} className="rounded-pill"></img>
                </div>
                <div className="ps-4">
                    <label className="wd-fg-color-white h6">{post.name} <i className="fas fa-check-circle"></i></label>
                    <label className="wd-topic wd-fg-color-light-gray">{post.userName}
                        <label className="wd-topic wd-fg-color-light-gray">&#183; {post.time}</label>
                    </label>
                    <br></br>
                    <label className="wd-fg-color-white h6">{post.caption}</label>
                    <div className="wd-rounded-borders border border-secondary">
                        {post.imageTitle ?
                            <>
                            <img src={post.image} className="img-fluid border-bottom border-secondary"></img>
                            <label className="wd-fg-color-white h6 ps-1">{post.imageTitle}</label>
                            <label className="ps-1">{post.text}</label>
                            </>:
                            <>
                            <img src={post.image} className="img-fluid border-bottom border-secondary wd-rounded-borders"></img>
                            </>
                        }
                    </div>
                    <div>
                        <i className="far fa-comment"></i>
                        <label className="wd-comment-text">&nbsp;&nbsp;{post.comments}</label>
                        <i className="fas fa-retweet ps-5"></i>
                        <label className="wd-comment-text">&nbsp;&nbsp;{post.retweets}</label>
                        <i className="far fa-heart ps-5"></i>
                        <label className="wd-comment-text">&nbsp;&nbsp;{post.likes}</label>
                        <i className="fa fa-arrow-up-from-bracket ps-5"></i>
                    </div>
                    <br></br>
                </div>
            </div>
            </>
        );
}
export default PostItem;
