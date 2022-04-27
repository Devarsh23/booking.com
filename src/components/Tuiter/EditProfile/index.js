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

        navigate("/tuiter/profile", {state: x})
    }

    return(
        <>
            <div>
                <div className="row mt-2">
                    <div className="col-8" style={{"position": "relative"}}>
                        <div className="mt-2 row">
                            <div className="col-1 ps-2">
                                <i className="fa ms-2" onClick={() => navigate("/tuiter/profile")}>&#xf00d;</i>
                            </div>
                            <div className="col-11 ps-2">
                                <label className="wd-color-white"><b>{userDataToSend?.firstname}</b></label>
                                <button type="button" className="btn wd-save wd-color-black rounded-pill wd-right me-3 mb-2"
                                        onClick={saveHandler}>Save
                                </button>
                            </div>
                        </div>
                        <div className="wd-container">
                            <img src={profile?.bannerPicture} className="wd-main"></img>
                            <img src={profile?.profilePicture} className="rounded-pill wd-border-black wd-overlay"></img>
                            <button type="button" className="btn rounded-pill wd-right mt-3 me-3 wd-color-black">Edit Profile
                            </button>
                        </div>
                        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                        <div className="ms-3">
                            <div>
                                <label>Name</label>
                                <br></br>
                                <textarea defaultValue={userDataToSend?.firstname} onChange={(event) =>
                                    setOldProfile({...oldProfile, firstname: event.target.value})}
                                          style={{width: "90%", color: "white", padding: "0px", backgroundColor: "black",
                                              border:"solid", borderColor:"gray"}}>
                    </textarea>

                                <br></br>
                                <label>Location</label>
                                <br></br>
                                <textarea defaultValue={userDataToSend?.location} onChange={(event) =>
                                    setOldProfile({...oldProfile, location: event.target.value})}
                                          style={{width: "90%", color: "white", padding: "0px", backgroundColor: "black",
                                              border:"solid", borderColor:"gray"}}>
                    </textarea>

                                <br></br>
                                <label>Date of Birth</label>
                                <br></br>
                                <textarea defaultValue={userDataToSend?.dateOfBirth} onChange={(event) =>
                                    setOldProfile({...oldProfile, dateOfBirth: event.target.value})}
                                          style={{width: "90%", color: "white", padding: "0px", backgroundColor: "black",
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
                    <div className="col-4">
                        <Deals/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditProfile;