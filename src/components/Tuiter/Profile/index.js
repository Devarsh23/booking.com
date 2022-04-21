import React from "react";
import profile from "../data/profile.json";
import ProfileComponent from "../Profile/ProfileComponent";
import Navigationsidebar from "../NavigationSidebar";
import WhoToFollowList from "../WhoToFollowList";

const Profile = () => {
    return(
        <>
            <div className="d-block d-sm-none">
                <div className="row mt-2">
                    <div className="col-2">
                        <Navigationsidebar activeParam="profile" size="xs"/>
                    </div>
                    <div className="col-10" style={{"position": "relative"}}>
                        {
                            profile.map(id=>
                                <ProfileComponent key={id.dateOfBirth} profile={id}/>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="d-none d-sm-block d-md-none">
                <div className="row mt-2">
                    <div className="col-2">
                        <Navigationsidebar activeParam="profile" size="sm"/>
                    </div>
                    <div className="col-10" style={{"position": "relative"}}>
                        {
                            profile.map(id=>
                                <ProfileComponent key={id.dateOfBirth} profile={id}/>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="d-none d-md-block d-lg-none">
                <div className="row mt-2">
                    <div className="col-2">
                        <Navigationsidebar activeParam="profile" size="md"/>
                    </div>
                    <div className="col-10" style={{"position": "relative"}}>
                        {
                            profile.map(id=>
                                <ProfileComponent key={id.dateOfBirth} profile={id}/>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="d-none d-lg-block d-xl-none">
                <div className="row mt-2">
                    <div className="col-1">
                        <Navigationsidebar activeParam="profile" size="lg"/>
                    </div>
                    <div className="col-7" style={{"position": "relative"}}>
                        {
                            profile.map(id=>
                                <ProfileComponent key={id.dateOfBirth} profile={id}/>
                            )
                        }
                    </div>
                    <div className="col-4">
                        <WhoToFollowList/>
                    </div>
                </div>
            </div>
            <div className="d-none d-xl-block d-xxl-none">
                <div className="row mt-2">
                    <div className="col-2">
                        <Navigationsidebar activeParam="profile" size="xxl"/>
                    </div>
                    <div className="col-6" style={{"position": "relative"}}>
                        {
                            profile.map(id=>
                                <ProfileComponent key={id.dateOfBirth} profile={id}/>
                            )
                        }
                    </div>
                    <div className="col-4">
                        <WhoToFollowList/>
                    </div>
                </div>
            </div>
            <div className="d-none d-xxl-block">
                <div className="row mt-2">
                    <div className="col-2">
                        <Navigationsidebar activeParam="profile" size="xxl"/>
                    </div>
                    <div className="col-6" style={{"position": "relative"}}>
                        {
                            profile.map(id=>
                                <ProfileComponent key={id.dateOfBirth} profile={id}/>
                            )
                        }
                    </div>
                    <div className="col-4">
                        <WhoToFollowList/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;