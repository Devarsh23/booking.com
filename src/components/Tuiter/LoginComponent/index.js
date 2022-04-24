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
        <div className="col-4">
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={event =>
                        setemail(event.target.value)}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={event =>
                        setpassword(event.target.value)}/>
                </div>
                <br></br>
                <button type="submit" className="btn btn-primary btn-block" onClick={submitted}>Submit</button>
                <br></br>
                <label>New User? <Link to={{pathname: `/${usertype}/register`}}>Click here to Register as new {usertype}</Link>
                    </label>
            </form>
        </div>
    );
}
export default Login;