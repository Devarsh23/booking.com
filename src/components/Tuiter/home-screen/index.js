import React, {useState} from "react";
import Navigationsidebar from ".././NavigationSidebar";
import Deals from "../Deals";
import TuitList from "../tuit-list";
import {Link} from "react-router-dom";

const HomeScreen = (callbackFn) => {
    const [passengers, setPassengers] = useState(1);
    const [origin, setOrigin] = useState("BOS");
    const [destination, setDestination] = useState("EWR");
    const [date, setDate] = useState("2022-05-20");
    return(
        <>
            <div className="wd-whiteBG">
                <div className="row mt-3">
                    <div className="col">

                        <h3 className="wd-blueFont"><Link to ="/tuiter/home"><i className="fa fa-plane wd-blueFont"></i></Link> Book My Flight</h3>


                    </div>
                    <div className="col wd-blueFont">
                        <Link to="/login">
                            <i className="fa fa-user float-end wd-blueFont"></i>
                        </Link>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-2 d-none d-sm-none d-md-block col-md-4 col-lg-2 col-xl-2 col-xxl-2">
                        <Navigationsidebar setPassengers={setPassengers} setOrigin={setOrigin}
                                           setDestination={setDestination} setDate={setDate}/>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6" style={{"position": "relative"}}>
                        <div className="wd-bg-color-black-twitter">
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
export default HomeScreen;