import React from "react";
import profile from "../data/profile.json";
import ProfileComponent from "../Profile/ProfileComponent";
import Deals from "../Deals";
import {useLocation} from "react-router-dom";
import HeaderComponent from "../HeaderComponent";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
const Profile = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const profileData = useSelector(state => state);
    console.log("profile data -->" , profileData);
    // const data = useSelector(state => state);
    // const dispatch = useDispatch();
    // console.log("user data",data);
    return(
        <>
            <HeaderComponent location={location}/>
            <div className="d-block d-sm-none">
                <div className="row mt-2">
                        {
                            profile.map(id=>
                                <ProfileComponent key={id.dateOfBirth} profile={id}/>
                            )
                        }

                </div>
            </div>
            <div className="d-none d-sm-block d-md-none">
                <div className="row mt-2">
                        {
                            profile.map(id=>
                                <ProfileComponent key={id.dateOfBirth} profile={id}/>
                            )
                        }
                </div>
            </div>
            <div className="d-none d-md-block d-lg-none">
                <div className="row mt-2">
                        {
                            profile.map(id=>
                                <ProfileComponent key={id.dateOfBirth} profile={id}/>
                            )
                        }
                </div>
            </div>
            <div className="d-none d-lg-block d-xl-none">
                <div className="row mt-2">
                    <div className="col-8" style={{"position": "relative"}}>
                        {
                            profile.map(id=>
                                <ProfileComponent key={id.dateOfBirth} profile={id}/>
                            )
                        }
                    </div>
                    <div className="col-4">
                        <Deals/>
                    </div>
                </div>
            </div>
            <div className="d-none d-xl-block d-xxl-none">
                <div className="row mt-2">
                    <div className="col-8" style={{"position": "relative"}}>
                        {/*{*/}
                        {/*    profile.map(id=>*/}
                        {/*        <ProfileComponent key={id.dateOfBirth} profile={id}/>*/}
                        {/*    )*/}
                        {/*}*/}

                        <div className="mt-2 row">
                                <label className="wd-color-white"><b>{profile.name}</b></label>
                                <br></br>
                                <label className="wd-font">1000 Tweets</label>
                        </div>
                        <div className="wd-container">
                            <img src={profile.bannerPicture} className="wd-main"></img>
                            <img src={profile.profilePicture} className="rounded-pill wd-border-black wd-overlay"></img>
                            <button type="button" className="btn rounded-pill wd-right border-secondary mt-3 me-3"
                                    onClick={() => navigate("/tuiter/edit-profile")}>Edit Profile
                            </button>

                        </div>
                        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                        <div className="ms-3">
                            <label className="wd-username-font wd-color-white"><b>{profile.name}</b></label>
                            <br></br>
                            <label>@{profile.handle}</label>
                            <label className="wd-color-white">{profile.bio}</label>
                            <i className="fas fa-map-marker-alt me-2"></i><label>{profile.location}</label>
                            <i className="fas fa-golf-ball ms-2 me-2"></i><label>Born {profile.dateOfBirth}</label>
                            <i className="fas fa-calendar-alt ms-2 me-2"></i><label>Joined {profile.dateJoined}</label>
                            <br></br>
                            <label className="wd-color-white me-2"><b>{profile.followingCount}</b></label>
                            <label>Following</label>
                            <label className="wd-color-white ms-2 me-2"><b>{profile.followersCount}</b></label>
                            <label>Followers</label>
                        </div>


                    </div>
                    <div className="col-4">
                        <Deals/>
                    </div>
                </div>
            </div>
            <div className="d-none d-xxl-block">
                <div className="row mt-2">
                    <div className="col-8" style={{"position": "relative"}}>
                        {
                            profile.map(id=>
                                <ProfileComponent key={id.dateOfBirth} profile={id}/>
                            )
                        }
                    </div>
                    <div className="col-4">
                        <Deals/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;