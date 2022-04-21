import React from "react";
import "../ExploreScreen/explore.css"
const PostSummaryItem = ({post=
    {
        "topic": "Web Development",
        "userName": "ReactJS",
        "time": "2h",
        "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
        "image": ""
    }
}) => {
    return(
        <>
             <li className="list-group-item">
                <div className="row">
                    <div className="wd-topic d-flex flex-column col-10">
                        <label className="wd-topic wd-fg-color-light-gray">{post.topic}</label>
                        <label className="wd-fg-color-white h6">{post.userName} <i className="fas fa-circle"></i>
                        <label className="wd-topic wd-fg-color-light-gray">-{post.time}</label></label>
                        <label className="wd-fg-color-white h6">{post.title}</label>
                    </div>
                    <div className="col-2">
                        <img src={post.image} className="wd-rounded-borders img-fluid"></img>
                    </div>
                </div>
            </li>
        </>
    );
}

export default PostSummaryItem;
