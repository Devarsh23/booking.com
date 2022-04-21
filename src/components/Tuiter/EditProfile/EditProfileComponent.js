import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import "../Profile/profile.css"

const EditProfileComponent = ({profile}) => {
    const navigate = useNavigate();
    const profileData = {
        name: 'Jose Annunziato', handle: 'jannunzi',
        profilePicture: '/tuiter/images/test.jpeg', bannerPicture: '/tuiter/images/webDev.png',
        bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast.Retuits and likes are not endorsements.',
        website: 'youtube.com/webdevtv',
        location: 'Boston, MA',	dateOfBirth: '7/7/1968',	dateJoined: '4/2009',
        followingCount: 312,	followersCount: 180
    }
    let [oldProfile, setOldProfile] = useState(profileData);
    const saveHandler = () => {
        dispatch({type: 'update-profile',
            profile: oldProfile
        });
        navigate("/tuiter/profile")
    }
    const dispatch = useDispatch();
    return (
        <>
            <div className="mt-2 row">
                <div className="col-1 ps-2">
                    <i className="fa ms-2" onClick={() => navigate("/tuiter/profile")}>&#xf00d;</i>
                </div>
                <div className="col-11 ps-2">
                    <label className="wd-color-white"><b>{profile.name}</b></label>
                    <button type="button" className="btn wd-save wd-color-black rounded-pill wd-right me-3 mb-2"
                            onClick={saveHandler}>Save
                    </button>
                </div>
            </div>
            <div className="wd-container">
                <img src={profile.bannerPicture} className="wd-main"></img>
                <img src={profile.profilePicture} className="rounded-pill wd-border-black wd-overlay"></img>
                <button type="button" className="btn rounded-pill wd-right mt-3 me-3 wd-color-black">Edit Profile
                </button>
            </div>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <div className="ms-3">
                <div>
                    <label>Name</label>
                    <br></br>
                    <textarea defaultValue={profile.name} onChange={(event) =>
                        setOldProfile({...oldProfile, name: event.target.value})}
                              style={{width: "90%", color: "white", padding: "0px", backgroundColor: "black",
                        border:"solid", borderColor:"gray"}}>
                    </textarea>
                    <br></br>
                    <label>Bio</label>
                    <br></br>
                    <textarea defaultValue={profile.bio} onChange={(event) =>
                        setOldProfile({...oldProfile, bio: event.target.value})}
                              style={{width: "90%", color: "white", padding: "0px", backgroundColor: "black",
                        border:"solid", borderColor:"gray"}}>
                    </textarea>
                    <br></br>
                    <label>Location</label>
                    <br></br>
                    <textarea defaultValue={profile.location} onChange={(event) =>
                        setOldProfile({...oldProfile, location: event.target.value})}
                              style={{width: "90%", color: "white", padding: "0px", backgroundColor: "black",
                        border:"solid", borderColor:"gray"}}>
                    </textarea>
                    <br></br>
                    <label>Website</label>
                    <br></br>
                    <textarea defaultValue={profile.website} onChange={(event) =>
                        setOldProfile({...oldProfile, website: event.target.value})}
                              style={{width: "90%", color: "white", padding: "0px", backgroundColor: "black",
                        border:"solid", borderColor:"gray"}}>
                    </textarea>
                    <br></br>
                    <label>Date of Birth</label>
                    <br></br>
                    <textarea defaultValue={profile.dateOfBirth} onChange={(event) =>
                        setOldProfile({...oldProfile, dateOfBirth: event.target.value})}
                              style={{width: "90%", color: "white", padding: "0px", backgroundColor: "black",
                        border:"solid", borderColor:"gray"}}>
                    </textarea>
                </div>
            </div>
        </>
    );
};

export default EditProfileComponent;