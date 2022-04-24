import {Link} from "react-router-dom";
import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
// import * as services from "../../services/services"
import {findlogin, createuser} from "../../actions/actions";

const Login = ({usertype}) => {
    const data = useSelector(state => state.tuits);
    const dispatch = useDispatch();
    useEffect(() => findlogin(dispatch),[]);
    const [email, setemail] = useState(1);
    const [password, setpassword] = useState(1);
    function submitted() {
        for (let i = 0; i < data.length; i++) {
            if (data[i].email === email) {
                if (data[i].password === password) {
                    console.log("Sucessfully logged in");
                }
            }
        }
    }

    return (
        <div className="container col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4 col-xxl-4 pt-5">
            <form>
                <h3 className="wd-blueFont">Sign In</h3>

                <div className="form-group">
                    <label className="wd-blueFont wd-fontBold">Email address</label>
                    <input type="email" className="form-control border" placeholder="Enter email" onChange={event =>
                        setemail(event.target.value)}/>
                </div>

                <div className="form-group">
                    <label className="wd-blueFont wd-fontBold">Password</label>
                    <input type="password" className="form-control border" placeholder="Enter password" onChange={event =>
                        setpassword(event.target.value)}/>
                </div>
                <br></br>
                <button type="submit" className="btn btn-primary btn-block wd-fontBold" onClick={submitted}>Submit</button>
                <br></br>
                <label className="wd-blueFont">New User? <Link to={{pathname: `/${usertype}/register`}}>Click here to Register as new {usertype}</Link>
                    </label>
            </form>
        </div>
    );
}
export default Login;