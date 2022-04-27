import React, {useEffect} from "react";
import profile from "../data/profile.json";
import ProfileComponent from "../Profile/ProfileComponent";
import Deals from "../Deals";
import {useLocation} from "react-router-dom";
import HeaderComponent from "../HeaderComponent";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {findlogin} from "../../actions/actions";
import OtherBooking from "../OtherBooking";
import Mybookings from "../Mybookings";
const Profile = () => {
    const location = useLocation();
    let stateCheck = location?.state?.flag;
    const navigate = useNavigate();
    let userToSearch = location?.state?.firstname;
    const dispatch = useDispatch();
    const profileData = useSelector(state => state.login);
    useEffect(() => findlogin(dispatch),[]);
    let userDataToSend;
    for (let i = 0; i < profileData.length; i++) {
        let userInOurDb = profileData[i].firstname;
        if (userInOurDb === userToSearch) {
            userDataToSend = profileData[i];
        }
    }
    if (stateCheck) {
        return (
            <>
                <div>
                    <div className="row mt-2">
                        <div className="col-8" style={{"position": "relative"}}>

                            <div className="mt-2 row">
                                <label className="wd-color-white"><b>{userDataToSend?.firstname}</b></label>
                                <label className="wd-color-white"><b>{userDataToSend?.lastname}</b></label>
                                <label className="wd-color-white"><b>{userDataToSend?.email}</b></label>
                                <br></br>
                                <label className="wd-font">1000 Bookings</label>
                            </div>
                            <div className="wd-container">
                                <img src={profile?.bannerPicture} className="wd-main"></img>
                                <img src={profile?.profilePicture}
                                     className="rounded-pill wd-border-black wd-overlay"></img>

                            </div>
                            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                            <div className="ms-3">
                                <label
                                    className="wd-username-font wd-color-white"><b>{userDataToSend?.firstname}</b></label>
                                <br></br>
                                <label>@{userDataToSend?.firstname}</label>
                                <i className="fas fa-map-marker-alt me-2"></i><label>{userDataToSend?.location}</label>
                                <i className="fas fa-golf-ball ms-2 me-2"></i><label>Born {userDataToSend?.dateOfBirth}</label>
                                <i className="fas fa-calendar-alt ms-2 me-2"></i><label>Joined {userDataToSend?.dateJoined}</label>
                                <br></br>
                            </div>


                        </div>
                    </div>
                    <div>
                        <OtherBooking location={location}/>
                    </div>
                </div>
            </>
        );
    }
    else {
        return (
            <>
                <div>
                    <div className="row mt-2">
                        <div className="col-8" style={{"position": "relative"}}>
                            {/*{*/}
                            {/*    profile.map(id=>*/}
                            {/*        <ProfileComponent key={id.dateOfBirth} profile={id}/>*/}
                            {/*    )*/}
                            {/*}*/}

                            <div className="mt-2 row">
                                <label className="wd-color-white"><b>{userDataToSend?.firstname}</b></label>
                                <label className="wd-color-white"><b>{userDataToSend?.lastname}</b></label>
                                <label className="wd-color-white"><b>{userDataToSend?.email}</b></label>
                                <br></br>
                                <label className="wd-font">1000 Bookings</label>
                            </div>
                            <div className="wd-container">
                                <img src={profile?.bannerPicture} className="wd-main"></img>
                                <img src={profile?.profilePicture}
                                     className="rounded-pill wd-border-black wd-overlay"></img>
                                <button type="button" className="btn rounded-pill wd-right border-secondary mt-3 me-3"
                                        onClick={() => navigate("/tuiter/edit-profile", {state: location.state})}>Edit
                                    Profile
                                </button>

                            </div>
                            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                            <div className="ms-3">
                                <label
                                    className="wd-username-font wd-color-white"><b>{userDataToSend?.firstname}</b></label>
                                <br></br>
                                <label>@{userDataToSend?.firstname}</label>
                                <i className="fas fa-map-marker-alt me-2"></i><label>{userDataToSend?.location}</label>
                                <i className="fas fa-golf-ball ms-2 me-2"></i><label>Born {userDataToSend?.dateOfBirth}</label>
                                <i className="fas fa-calendar-alt ms-2 me-2"></i><label>Joined {userDataToSend?.dateJoined}</label>
                                <br></br>
                            </div>


                        </div>
                        <div className="col-4">
                            <Deals/>
                            <Mybookings location={location}/>
                        </div>
                    </div>
                    <div>
                        <OtherBooking location={location}/>
                    </div>
                </div>
            </>
        );
    }
};

export default Profile;