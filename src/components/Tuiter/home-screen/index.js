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
            <div>
                <div className="row mt-3">
                    <div className="col">
                        <h3>Book My Flight</h3>
                    </div>
                    <div className="col">
                        <Link to="/login">
                            <i className="fas fa-user float-end"></i>
                        </Link>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-2">
                        <Navigationsidebar setPassengers={setPassengers} setOrigin={setOrigin}
                                           setDestination={setDestination} setDate={setDate}/>
                    </div>
                    <div className="col-6" style={{"position": "relative"}}>
                        <div className="wd-bg-color-black-twitter">
                            <TuitList passengers={passengers} origin={origin} destination={destination} date={date} callbackFn={callbackFn}/>
                        </div>
                    </div>
                    <div className="col-4">
                        <Deals/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomeScreen;