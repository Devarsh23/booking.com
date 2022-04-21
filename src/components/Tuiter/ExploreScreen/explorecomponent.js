import React from "react";
import "./explore.css";
const ExploreComponent = ({
        size
    }) => {
        if (size==="md" || size==="lg" || size==="xl" || size==="xxl") {
            return(
                <>
                    <div className="row">
                        <div className="form-group wd-search mb-1">
                            <div className="input-group">
                                <span className="fa fa-search ps-3 form-control-feedback" style={{color:"#657786", paddingTop: "10px"}}></span>
                                <input type="text" className="form-control rounded-pill small wd-bg-color-black-twitter border-0" placeholder="Search Tuiter">
                                </input>
                                <span className="fa fa-cog fa-inverse ps-2 pt-1" style={{color:"#2a9fd6", fontSize:"30px"}}></span>
                            </div>
                        </div>
                    </div>
                    <ul className="nav mb-1 nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" href="#"><label>For you</label></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><label>Trending</label></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><label>News</label></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><label>Sports</label></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><label>Entertainment</label></a>
                        </li>
                    </ul>
                    <div className="position-relative">
                        <img src="/tuiter/images/starship.jpeg" className="card-img rounded-0" width="100%"></img>
                        <div className="card-img-overlay h-100 d-flex flex-column justify-content-end">
                            <h1 className="card-title wd-fg-color-white bottom-50" >SpaceX's Starship</h1>
                        </div>
                    </div>
                </>
            );
        }
        else {
            return(
                <>
                    <div className="row">
                        <div className="form-group wd-search mb-1">
                            <div className="input-group">
                                <span className="fa fa-search ps-3 form-control-feedback" style={{color:"#657786", paddingTop: "10px"}}></span>
                                <input type="text" className="form-control rounded-pill small wd-bg-color-black-twitter border-0" placeholder="Search Tuiter">
                                </input>
                                <span className="fa fa-cog fa-inverse ps-2 pt-1" style={{color:"#2a9fd6", fontSize:"30px"}}></span>
                            </div>
                        </div>
                    </div>
                    <ul className="nav mb-1 nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" href="#"><label>For you</label></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><label>Trending</label></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><label>News</label></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><label>Sports</label></a>
                        </li>
                    </ul>
                    <div className="position-relative">
                        <img src="/tuiter/images/starship.jpeg" className="card-img rounded-0" width="100%"></img>
                        <div className="card-img-overlay h-100 d-flex flex-column justify-content-end">
                            <h1 className="card-title wd-fg-color-white bottom-50" >SpaceX's Starship</h1>
                        </div>
                    </div>
                </>
            );
        }
}
export default ExploreComponent;

