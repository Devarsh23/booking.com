import React from "react";
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div className="col-4">
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <br></br>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <br></br>
                <label>New User? <Link to="/signup">Register</Link></label>
            </form>
        </div>
    );
}
export default Login;