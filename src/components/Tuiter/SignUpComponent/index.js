import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
// import * as services from "../../services/services"
import {findlogin, createuser} from "../../actions/actions";


const SignUp = () => {
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
    useEffect(() => findlogin(dispatch),[]);
    // console.log(tuits);

    const [firstname, setfirstname] = useState(1);
    const [lastname, setlastname] = useState(1);
    const [email, setemail] = useState(1);
    const [password, setpassword] = useState(1);
    function submitted() {
        console.log("Hello");
        console.log("last name --> ", lastname);
        console.log("First name --> ", firstname);
        console.log(email);
        console.log(password);
        //tuitsModel.create({"firstname" : firstname});
        // setnewUser({...newUser,firstname})
        // return createuser(dispatch, newUser);
        createuser(dispatch,{firstname});
    }

    return (
        <div className="col-4">
            <form>
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" onChange={event =>
                        setfirstname(event.target.value)}/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" onChange={event =>
                        setlastname(event.target.value)}/>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={event =>
                        setemail(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={event =>
                        setpassword(event.target.value)}/>
                </div>
                <br></br>
                <button type="submit" className="btn btn-primary btn-block" onClick={submitted}>Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered? <Link to="/login">sign in</Link>
                </p>
            </form>
        </div>
    );
}
export default SignUp;