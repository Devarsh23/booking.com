import React from "react";
import Navigationsidebar from ".././NavigationSidebar";
import WhoToFollowList from "../WhoToFollowList";
import TuitList from "../tuit-list"

const HomeScreen = () => {
    return(
        <>
            <div className="d-none d-xxl-block">
                <div className="row mt-2">
                    <div className="col-2">
                        <Navigationsidebar activeParam="home" size="xxl"/>
                    </div>
                    <div className="col-6" style={{"position": "relative"}}>
                        <div className="wd-bg-color-black-twitter">
                            <TuitList/>
                        </div>
                    </div>
                    <div className="col-4">
                        <WhoToFollowList/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomeScreen;

