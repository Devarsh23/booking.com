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
                    <div className="row mt-2 ">
                        <div className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-8 col-xxl-8 " style={{"position": "relative"}}>



                            <div>
                                <img
                                    src="https://www.wekatravel.com/wp-content/uploads/2017/10/banner-flights.jpg"
                                    width="100%"
                                    style={{
                                        position: "relative",
                                    }}
                                    alt=""
                                />
                            </div>

                            <div className="wd-container ">
                                <img
                                    src="https://media.istockphoto.com/vectors/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-vector-id1316420668?k=20&m=1316420668&s=612x612&w=0&h=Z2cc0HZXkovLCVmoJ8LCIG5eWMetgOX9oLe-lF0OWJM="
                                    width='150px'
                                    height='150px'
                                    className='rounded-circle border border-dark'
                                    style={{
                                        position: "relative",
                                        marginTop: "-75px",
                                        marginLeft: "10px",
                                    }}
                                    alt=""
                                />
                            </div>

                            <br></br><br></br><br></br>

                            <div className="mt-2 row ">
                                <label className="wd-blueFont"><b>{userDataToSend?.firstname} {userDataToSend?.lastname}</b></label>
                                {/*<label className="wd-blueFont"><b>{userDataToSend?.lastname}</b></label>*/}
                                <label className="wd-blueFont"><b>{userDataToSend?.email}</b></label>
                                <br/>
                                <label className="wd-font wd-blueFont">500 Bookings</label>

                            </div>

                            <div className="ms-3 wd-blueFont">

                                <label>@{userDataToSend?.firstname}</label> &nbsp;&nbsp;
                                <i className="fas fa-map-marker-alt me-2"></i><label>{userDataToSend?.location}</label>&nbsp; &nbsp;
                                <i className="fas fa-golf-ball ms-2 me-2"></i><label>Born {userDataToSend?.dateOfBirth}</label> &nbsp;&nbsp;
                                <i className="fas fa-calendar-alt ms-2 me-2"></i><label>Joined {userDataToSend?.dateJoined}</label> &nbsp;&nbsp;
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
                    <div className="row mt-2  ">
                        <div className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-8 col-xxl-8" style={{"position": "relative"}}>
                            {/*{*/}
                            {/*    profile.map(id=>*/}
                            {/*        <ProfileComponent key={id.dateOfBirth} profile={id}/>*/}
                            {/*    )*/}
                            {/*}*/}


                            <div>
                                <img
                                    src="https://www.wekatravel.com/wp-content/uploads/2017/10/banner-flights.jpg"
                                    width="100%"

                                    style={{
                                        position: "relative",
                                    }}
                                    alt=""
                                />
                            </div>

                            <div className="wd-container ">
                                <img
                                    src="https://media.istockphoto.com/vectors/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-vector-id1316420668?k=20&m=1316420668&s=612x612&w=0&h=Z2cc0HZXkovLCVmoJ8LCIG5eWMetgOX9oLe-lF0OWJM="
                                    width='150px'
                                    height='150px'
                                    className='rounded-circle border border-dark'
                                    style={{
                                        position: "relative",
                                        marginTop: "-75px",
                                        marginLeft: "10px",
                                    }}
                                    alt=""
                                />

                            </div>
                            <br/><br/><br/>
                            <div className="mt-2 row">
                                <label className="wd-blueFont"><b>{userDataToSend?.firstname} {userDataToSend?.lastname}</b></label>
                                {/*<label className="wd-blueFont"><b>{userDataToSend?.lastname}</b></label>*/}
                                <label className="wd-blueFont"><b>{userDataToSend?.email}</b></label>
                                <label className="wd-font wd-blueFont">1000 Bookings</label>
                            </div>
                            <button type="button" className="btn-primary rounded-pill wd-right border-secondary mt-3 me-3"
                                    onClick={() => navigate("/edit-profile", {state: location.state})}>Edit
                                Profile
                            </button>
                            <div className="ms-3 wd-blueFont">
                                <br/>
                                <label>@{userDataToSend?.firstname} </label>&nbsp;&nbsp;
                                <i className="fas fa-map-marker-alt me-2"></i><label>{userDataToSend?.location}</label>&nbsp;&nbsp;
                                <i className="fas fa-golf-ball ms-2 me-2"></i><label>Born {userDataToSend?.dateOfBirth}</label>&nbsp;&nbsp;
                                <i className="fas fa-calendar-alt ms-2 me-2"></i><label>Joined {userDataToSend?.dateJoined}</label>&nbsp;&nbsp;
                                <br></br>
                            </div>


                        </div>
                        <div className="d-none d-lg-block col-lg-4 col-xl-4 col-xxl-4">
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