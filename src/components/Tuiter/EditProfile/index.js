import React, {useEffect, useState} from "react";
import profile from "../data/profile.json";
import EditProfileComponent from "../EditProfile/EditProfileComponent";
import Deals from "../Deals";
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {findlogin} from "../../actions/actions";
import {updateUsers} from "../../actions/actions";
const EditProfile = () => {
    const location = useLocation();
    let userToSearch = location.state.firstname;
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

    const navigate = useNavigate();
    let [oldProfile, setOldProfile] = useState(profileData);
    let _id = userDataToSend?._id;
    let newProfile = {...oldProfile,_id};
    const saveHandler = () => {
        // dispatch({type: 'update-profile',
        //     profile: oldProfile
        // });
        updateUsers(dispatch,{...newProfile})
        for (let i = 0; i < profileData.length; i++) {
            if(profileData[i]._id === newProfile._id) {
                var x = profileData[i]
            }
        }
        if(typeof newProfile?.firstname != 'undefined') {
            x.firstname = newProfile.firstname
        }
        if(typeof newProfile?.location != 'undefined') {
            x.location = newProfile.location
        }
        if(typeof newProfile?.dateOfBirth != 'undefined') {
            x.dateOfBirth = newProfile.dateOfBirth
        }

        navigate("/profile", {state: x})
    }

    return(
        <>
            <div>
                <div className="row mt-2">
                    <div className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-8 col-xxl-8 p-3" style={{"position": "relative"}}>
                        <div className="mt-2 row">
                            <div className="col-1 ps-2">
                                <i className="fa ms-2" onClick={() => navigate("/profile")}>&#xf00d;</i>
                            </div>
                            <div className="col-11 ps-2">
                                <label className="wd-blueFont wd-fontBold"><b>{userDataToSend?.firstname}</b></label>
                                <button type="button" className="btn-primary wd-save wd-color-black rounded-pill wd-right me-3 mb-2"
                                        onClick={saveHandler}>Save
                                </button>
                            </div>
                        </div>

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

                        <br></br><br></br><br></br><br/>


                        <div className="ms-3">
                            <div className="wd-blueBG p-4 ">
                                <label>Name</label>
                                <br></br>
                                <textarea defaultValue={userDataToSend?.firstname} onChange={(event) =>
                                    setOldProfile({...oldProfile, firstname: event.target.value})}
                                          style={{width: "90%", height: "40px", color: "black", padding: "0px", backgroundColor: "white",
                                              border:"solid", borderColor:"gray"}}>
                    </textarea>

                                <br></br>
                                <label>Location</label>
                                <br></br>
                                <textarea defaultValue={userDataToSend?.location} onChange={(event) =>
                                    setOldProfile({...oldProfile, location: event.target.value})}
                                          style={{width: "90%", height: "40px", color: "black", padding: "0px", backgroundColor: "white",
                                              border:"solid", borderColor:"gray"}}>
                    </textarea>

                                <br></br>
                                <label>Date of Birth</label>
                                <br></br>
                                <textarea defaultValue={userDataToSend?.dateOfBirth} onChange={(event) =>
                                    setOldProfile({...oldProfile, dateOfBirth: event.target.value})}
                                          style={{width: "90%", height: "40px", color: "black", padding: "0px", backgroundColor: "white",
                                              border:"solid", borderColor:"gray"}}>
                    </textarea>
                            </div>
                        </div>
                        {
                            // profile.map(id=>
                            //     <EditProfileComponent key={id.dateOfBirth} profile={id}/>
                            // )
                        }
                    </div>
                    <div className="d-none d-lg-block col-lg-4 col-xl-4 col-xl-4">
                        <Deals/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditProfile;