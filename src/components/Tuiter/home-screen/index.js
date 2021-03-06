import React, {useEffect, useState} from "react";
import Navigationsidebar from ".././NavigationSidebar";
import Deals from "../Deals";
import TuitList from "../tuit-list";
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";
import HeaderComponent from "../HeaderComponent";
//import {Provider, useDispatch, useSelector} from "react-redux";
import {combineReducers, createStore} from "redux";
import loginReducers from "../reducers/login-reducers";
import whoReducer from "../reducers/who-reducer";
import dealsReducers from "../reducers/deals-reducer";
import {findlogin, findData} from "../../actions/actions";
import Mybookings from "../Mybookings";
// const reducer = combineReducers({
//     tuits: loginReducers, who: whoReducer, deals: dealsReducers, login: loginReducers
// });
// const store = createStore(reducer);

const HomeScreen = (callbackFn) => {
    const [passengers, setPassengers] = useState(1);
    const [origin, setOrigin] = useState("BOS");
    const [destination, setDestination] = useState("EWR");
    const [date, setDate] = useState("2022-04-25");
    const location = useLocation();
    if (location.state === null) {
        return(
            <>
                <div>
                <HeaderComponent location={location}/>
                </div>
                <div className=" container wd-whiteBG">
                    <div className="row mt-2">
                        <div className="col-2 d-none d-sm-none d-md-block col-md-4 col-lg-3 col-xl-3 col-xxl-2">

                        <Navigationsidebar setPassengers={setPassengers} setOrigin={setOrigin}
                                               setDestination={setDestination} setDate={setDate}/>
                        </div>
                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-5 col-xxl-6" style={{"position": "relative"}}>
                            <div className="wd-whiteBG">
                                <TuitList passengers={passengers} origin={origin} destination={destination} date={date} callbackFn={callbackFn}/>
                            </div>
                        </div>
                        <div className="col-4 d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 col-xxl-4">

                        <Deals/>
                        </div>
                    </div>
                </div>
                </>
        )
    }
    else {
        return (
            <>
                <div>
                <HeaderComponent location={location}/>
                </div>
                <div>

                    <div className="row mt-2">
                        <div className="col-2 d-none d-sm-none d-md-block col-md-4 col-lg-3 col-xl-3 col-xxl-2">
                            <Navigationsidebar setPassengers={setPassengers} setOrigin={setOrigin}
                                               setDestination={setDestination} setDate={setDate}/>
                        </div>
                        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-5 col-xxl-6" style={{"position": "relative"}}>
                            <div className="wd-bg-color-black-twitter">
                                <TuitList passengers={passengers} origin={origin} destination={destination} date={date}
                                          callbackFn={callbackFn}
                                userdata = {location.state}/>
                            </div>
                        </div>
                        <div className="col-4 d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 col-xxl-4">
                                <Deals/>
                            <Mybookings location = {location}/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default HomeScreen;