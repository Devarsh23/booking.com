import {Link} from "react-router-dom";
import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
// import * as services from "../../services/services"
import {findlogin, createuser} from "../../actions/actions";
import { useNavigate } from 'react-router-dom';

const Login = ({usertype}) => {
    const navigate = useNavigate();
    const data = useSelector(state => state.login);
    const dispatch = useDispatch();
    useEffect(() => findlogin(dispatch),[]);
    const [email, setemail] = useState(1);
    const [password, setpassword] = useState(1);
    function useSubmitted() {
        for (let i = 0; i < data.length; i++) {
            if (data[i].email === email) {
                if (data[i].password === password) {
                    if (data[i].isAdmin) {
                        navigate('/admin-form');
                        var flag = "true";

                    }
                    else if (data[i].isAirline) {
                        navigate('/airline-form');
                        var flag = "true";
                    }
                    else {
                        navigate('/tuiter/home', {state: data[i]});
                        var flag = "true";
                    }
                }
            }
        }
        if (flag != "true") {
            alert("Wrong UserID or password please try again");
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
                <button type="submit" className="btn btn-primary btn-block" onClick={useSubmitted}>Submit</button>
                <br></br>
                <label>New User? <Link to={{pathname: `/${usertype}/register`}}>Click here to Register as new {usertype}</Link>
                    </label>
            </form>
        </div>
    );
}
export default Login;