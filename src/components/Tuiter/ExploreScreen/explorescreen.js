import React from "react";
import Navigationsidebar from "../NavigationSidebar";
import ExploreComponent from "./explorecomponent";
import WhoToFollowList from "../WhoToFollowList";
import PostSummaryList from "../PostSummaryList";

const ExploreScreen = () => {
    return(
        <>
            <div className="d-block d-sm-none">
                <div className="row mt-2">
                    <div className="col-2">
                        <Navigationsidebar activeParam="explore" size="xs"/>
                    </div>
                    <div className="col-10"
                         style={{"position": "relative"}}>
                        <ExploreComponent size="xs"/>
                        <PostSummaryList/>
                    </div>
                </div>
            </div>
            <div className="d-none d-sm-block d-md-none">
                <div className="row mt-2">
                    <div className="col-2">
                        <Navigationsidebar activeParam="explore" size="sm"/>
                    </div>
                    <div className="col-10"
                         style={{"position": "relative"}}>
                        <ExploreComponent size="sm"/>
                        <PostSummaryList/>
                    </div>
                </div>
            </div>
            <div className="d-none d-md-block d-lg-none">
                <div className="row mt-2">
                    <div className="col-2">
                        <Navigationsidebar activeParam="explore" size="md"/>
                    </div>
                    <div className="col-10"
                         style={{"position": "relative"}}>
                        <ExploreComponent size="md"/>
                        <PostSummaryList/>
                    </div>
                </div>
            </div>
            <div className="d-none d-lg-block d-xl-none">
                <div className="row mt-2">
                    <div className="col-1">
                        <Navigationsidebar activeParam="explore" size="lg"/>
                    </div>
                    <div className="col-7"
                         style={{"position": "relative"}}>
                        <ExploreComponent size="lg"/>
                        <PostSummaryList/>
                    </div>
                    <div className="col-4">
                        <WhoToFollowList/>
                    </div>
                </div>
            </div>
            <div className="d-none d-xl-block d-xxl-none">
                <div className="row mt-2">
                    <div className="col-2">
                        <Navigationsidebar activeParam="explore" size="xxl"/>
                    </div>
                    <div className="col-6"
                         style={{"position": "relative"}}>
                        <ExploreComponent size="xl"/>
                        <PostSummaryList/>
                    </div>
                    <div className="col-4">
                        <WhoToFollowList/>
                    </div>
                </div>
            </div>
            <div className="d-none d-xxl-block">
                <div className="row mt-2">
                    <div className="col-2">
                        <Navigationsidebar activeParam="explore" size="xxl"/>
                    </div>
                    <div className="col-6"
                         style={{"position": "relative"}}>
                        <ExploreComponent size="xxl"/>
                        <PostSummaryList/>
                    </div>
                    <div className="col-4">
                        <WhoToFollowList/>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ExploreScreen;

