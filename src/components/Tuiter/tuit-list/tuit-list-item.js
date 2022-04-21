import React from "react";
import {useDispatch} from "react-redux";
import "../ExploreScreen/explore.css"
import TuitStats from "../tuit-stats/tuit-stats";

const TuitListItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuit = (tuit) => {
        dispatch({type: 'delete-tuit', tuit})
    };
    return (
            <div className="mt-2 d-flex flex-row border-bottom border-secondary">
                <div className="wd-topic d-flex flex-column ps-2">
                    <img src={tuit['logo-image']} className="rounded-pill"></img>
                </div>
                <div className="ps-3 me-3" style={{width:'100%'}}>
                    <label className="wd-fg-color-white h6 fw-bold">{tuit.postedBy.username}
                        {tuit.verified && <i className="ms-1 fas fa-check-circle"></i>}</label>
                    <label className="wd-topic wd-fg-color-light-gray">&nbsp;@{tuit.handle}</label>
                    <i onClick={() => deleteTuit(tuit)} className="fa fa-pull-right">&#xf00d;</i>
                    <br></br>
                    <label className="wd-fg-color-white h6">{tuit.tuit}</label>
                    {
                        tuit.attachments && tuit.attachments.image &&
                        <img src={tuit.attachments.image}
                             className="mt-2 wd-rounded-borders"
                             style={{width: "100%"}}/>
                    }
                    {
                        tuit.attachments && tuit.attachments.video &&
                        <iframe width="100%" height="350px"
                                className="mt-2 wd-rounded-borders"
                                style={{width: "100%"}}
                                src={`https://www.youtube.com/embed/${tuit.attachments.video}`}
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                    }
                    <div>
                        <i className="far fa-comment"></i>
                        <label className="wd-comment-text me-5">&nbsp;&nbsp;{tuit.stats.comments}</label>
                        <i className="fas fa-retweet ps-5"></i>
                        <label className="wd-comment-text me-5">&nbsp;&nbsp;{tuit.stats.retuits}</label>
                        <TuitStats tuit={tuit}/>
                        <i className="fas fa-external-link-alt ps-5"></i>
                    </div>
                    <br></br>

                </div>
            </div>
    );
}

export default TuitListItem;