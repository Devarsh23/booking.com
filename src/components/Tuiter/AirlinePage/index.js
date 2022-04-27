import React, {useEffect, useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {createdeal, createuser,createairline} from "../../actions/actions";
import {useDispatch, useSelector} from "react-redux";
import HeaderComponent from "../HeaderComponent";
import Login from "../LoginComponent";

const AirlinePage = () => {
    const [newAirline, setnewAirline] = useState({airline : 'New Airline'});
    const dispatch = useDispatch();
    const [airlineName, setAirlineName] = useState(1);
    const [originName, setOrigin] = useState(1);
    const [originCode, setOriginCode] = useState(1);
    const [destinationName, setDestination] = useState(1);
    const [destinationCode, setDestinationCode] = useState(1);
    const [flightNumber, setFlightNumber] = useState(1);
    const [price, setPrice] = useState(1);
    const [arrival, setArrival] = useState(1);
    const [departure, setDeparture] = useState(1);
    const [durationInMinutes,setdurationInMinutes] = useState(1);
    const [stopCount,setStopCount] = useState(1);



    const location = useLocation();


    function submitted () {
        let holder = {"legs" : {
            "origin" : {
                originName,originCode
            },
                "destination" : {
                destinationName,destinationCode
                },
                durationInMinutes,
                stopCount,
                departure,
                arrival,
                "carriers" : {
                "marketing" : {
                    airlineName
                }
                },
                price,
                flightNumber
            }}
        createairline(dispatch,holder);
    }
    if (location.state === null) {
        alert("Please login before accessing this page");
        return (
            <>
                <Login/>
            </>
        );
    }
    else {
        return (
            <>
                <HeaderComponent location={location}/>
                <div className="col-4">
                    <h3>WELCOME TO AIRLINE PAGE</h3>
                    <h4>Please Enter the details of the flight to want to add</h4>
                    <form>
                        <div className="form-group">
                            <label>Enter Flight Number</label>
                            <input type="number" className="form-control" placeholder="Flight Number" onChange={event =>
                                setFlightNumber(event.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label>Enter name of the airline</label>
                            <input type="text" className="form-control" placeholder="Name of Airline" onChange={event =>
                                setAirlineName(event.target.value)}/>
                        </div>

                        <div className="form-group">
                            <label>Origin</label>
                            <input type="text" className="form-control" placeholder="Origin" onChange={event =>
                                setOrigin(event.target.value)}/>
                        </div>

                        <div className="form-group">
                            <label>Origin Airport Code</label>
                            <input type="text" className="form-control" placeholder="Origin Airport Code"
                                   onChange={event =>
                                       setOriginCode(event.target.value)}/>
                        </div>

                        <div className="form-group">
                            <label>Destination</label>
                            <input type="text" className="form-control" placeholder="Destination" onChange={event =>
                                setDestination(event.target.value)}/>
                        </div>

                        <div className="form-group">
                            <label>Destination Airport Code</label>
                            <input type="text" className="form-control" placeholder="Destination Airport Code"
                                   onChange={event =>
                                       setDestinationCode(event.target.value)}/>
                        </div>

                        <div className="form-group">
                            <label>Price</label>
                            <input type="number" className="form-control" placeholder="Price" onChange={event =>
                                setPrice(event.target.value)}/>
                        </div>

                        <div className="form-group">
                            <label>Arrival</label>
                            <input type="text" className="form-control" placeholder="Arrival" onChange={event =>
                                setArrival(event.target.value)}/>
                        </div>

                        <div className="form-group">
                            <label>Departure</label>
                            <input type="text" className="form-control" placeholder="Departure" onChange={event =>
                                setDeparture(event.target.value)}/>
                        </div>

                        <div className="form-group">
                            <label>Duration in mins</label>
                            <input type="text" className="form-control" placeholder="Duration" onChange={event =>
                                setdurationInMinutes(event.target.value)}/>
                        </div>

                        <div className="form-group">
                            <label>Stop Count</label>
                            <input type="number" className="form-control" placeholder="Stop Count" onChange={event =>
                                setStopCount(event.target.value)}/>
                        </div>

                        <br></br>
                        <button type="submit" className="btn btn-primary btn-block" onClick={submitted}>Sign Up</button>
                    </form>
                </div>
            </>
        );
    }
}
export default AirlinePage;