import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
// import * as services from "../../services/services"
import {findlogin, createuser} from "../../actions/actions";


const SignUp = ({userStatus}) => {
    const [newUser, setnewUser] = useState({user : 'New User'});
    const tuits = useSelector(state => state.tuits);
    const dispatch = useDispatch();
    // const findLogin = async () => {
    //     const tuits = await services.findLogin();
    //     dispatch({type: 'FIND_LOGIN',
    //         tuits: tuits
    //     });
    //
    //     }
    //     useEffect(findLogin, []);
    // useEffect(() => findlogin(dispatch),[]);
    // console.log(tuits);

    const [firstname, setfirstname] = useState(1);
    const [lastname, setlastname] = useState(1);
    const [email, setemail] = useState(1);
    const [password, setpassword] = useState(1);
    function submitted() {
        console.log("Hello");
        //tuitsModel.create({"firstname" : firstname});
        // setnewUser({...newUser,firstname})
        // return createuser(dispatch, newUser);
        // var isUser;
        // var isAdmin;
        // var isAirline;
        if (userStatus === "user") {
            var isUser = "true";
            var isAdmin = "false";
            var isAirline = "false";
        }
        else if (userStatus === "admin") {
            isAdmin = "true";
            isUser = "false";
            isAirline = "false";
        }
        else if (userStatus === "airline") {
            isAirline = "true";
            isUser = "false";
            isAdmin = "false";
        }
        else {
            isAirline = "false";
            isUser = "true";
            isAdmin = "false";
        }
        createuser(dispatch,{firstname,lastname,email,password,isUser,isAdmin,isAirline});
    }

    return (
        <div className="container mt-5 p-5 col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4 col-xxl-4 wd-blueBG">
                <h3 className="wd-whiteFont">Sign Up</h3>
            <form>
                <div className="form-group">
                    <label className=" wd-fontBold">First name</label>
                    <input type="text" className="form-control border" placeholder="First name" onChange={event =>
                        setfirstname(event.target.value)}/>
                </div>

                <div className="form-group">
                    <label className=" wd-fontBold">Last name</label>
                    <input type="text" className="form-control border" placeholder="Last name" onChange={event =>
                        setlastname(event.target.value)}/>
                </div>

                <div className="form-group">
                    <label className=" wd-fontBold">Email address</label>
                    <input type="email" className="form-control border" placeholder="Enter email" onChange={event =>
                        setemail(event.target.value)} />
                </div>

                <div className="form-group">
                    <label className=" wd-fontBold">Password</label>
                    <input type="password" className="form-control border" placeholder="Enter password" onChange={event =>
                        setpassword(event.target.value)}/>
                </div>
                <br></br>
                <button type="submit" className="btn btn-primary btn-block" onClick={submitted}>Sign Up</button>

                <p className="forgot-password text-right  ">
                    Already registered as {userStatus}? <Link to="/login">Sign in</Link>
                </p>
            </form>
        </div>
    );
}
export default SignUp;