import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findDeals, createuser, findlogin,findAirlines} from "../../actions/actions";
// import * as service from "../../services/services"
import {Link, useLocation, useNavigate} from "react-router-dom";
import {Location} from "react-router-dom";
import HeaderComponent from "../HeaderComponent";
import FlightDetailsList from "../FlightDetailsList";
import {createNewBookings} from "../../actions/actions";
import TuitListItem from "../tuit-list/tuit-list-item";

const FlightDetails = ({flightDetails}) => {
    const navigate = useNavigate();
    const data = useSelector(state => state.airlines);

    const dispatch = useDispatch();
    useEffect(() => findAirlines(dispatch),[]);
    const location = useLocation();

    var user = location?.state?.firstname;
    const originName = flightDetails.legs[0].origin.name;
    const originCode = flightDetails.legs[0].origin.displayCode;
    const destinationName = flightDetails.legs[0].destination.name;
    const destinationCode = flightDetails.legs[0].destination.displayCode;
    const durationInMinutes = flightDetails.legs[0].durationInMinutes;
    const stopCount =  flightDetails.legs[0].stopCount;
    const departure = flightDetails.legs[0].departure;
    const arrival = flightDetails.legs[0].arrival;
    const airlineName = flightDetails.legs[0].carriers.marketing[0].name;
    const price = flightDetails.pricing_options[0].price.amount;
    const flightNumber = flightDetails.legs[0].segments[0].flightNumber;
    const booking = {originName,originCode,destinationName,destinationCode,durationInMinutes,stopCount,departure,arrival,airlineName,price,flightNumber};
    function submitted () {
        createNewBookings(dispatch, {user,booking});
        alert("Booking added to your profile");
        navigate('/tuiter/home', {state: location.state});
    }
    let flightDataToSend = [];
    var AirlineToSearch = flightDetails.legs[0].carriers.marketing[0].name;

    for (let i = 0; i < data.length; i++) {
        let airlineInOurDb = data[i].legs.carriers.marketing?.airlineName;
        if (airlineInOurDb === AirlineToSearch) {
            flightDataToSend.push(data[i]);
        }
    }

    if (location.state === null) {
        return (
            <>
                <HeaderComponent location={location}/>
                <div className="container">
                    <div className="row mt-2">
                        <div className="col-2 ps-3 me-3" style={{width: '100%'}}>
                            <label
                                className="wd-fg-color-white h6 fw-bold">{flightDetails.legs[0].carriers.marketing[0].name}&nbsp;</label>
                            <label
                                className="wd-topic wd-fg-color-light-gray">&nbsp; {flightDetails.legs[0].segments[0].flightNumber}</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <b>{flightDetails.legs[0].origin.name}({flightDetails.legs[0].origin.displayCode})</b></div>
                        <div className="col-2">
                    <span className="plane">
                        <svg
                            clipRule="evenodd"
                            fillRule="evenodd"
                            height="50"
                            width="50"
                            imageRendering="optimizeQuality"
                            shapeRendering="geometricPrecision"
                            textRendering="geometricPrecision"
                            viewBox="0 0 500 500"
                            xmlns="http://www.w3.org/2000/svg">
                          <g stroke="#222">
                            <line
                                fill="none"
                                strokeLinecap="round"
                                strokeWidth="30"
                                x1="300"
                                x2="55"
                                y1="390"
                                y2="390"/>
                            <path
                                d="M98 325c-9 10 10 16 25 6l311-156c24-17 35-25 42-50 2-15-46-11-78-7-15 1-34 10-42 16l-56 35 1-1-169-31c-14-3-24-5-37-1-10 5-18 10-27 18l122 72c4 3 5 7 1 9l-44 27-75-15c-10-2-18-4-28 0-8 4-14 9-20 15l74 63z"
                                fill="#222"
                                strokeLinejoin="round"
                                strokeWidth="10"/>
                          </g>
                        </svg>
                    </span>
                        </div>
                        <div className="col-3">
                            <b>{flightDetails.legs[0].destination.name}({flightDetails.legs[0].destination.displayCode})</b>
                        </div>
                        <div className="col-3"><b>${flightDetails.pricing_options[0].price.amount}</b></div>
                    </div>
                    <div>
                        <div>Arrival - {flightDetails.legs[0].arrival}</div>
                        <div>Departure - {flightDetails.legs[0].departure}</div>
                        <div>Duration of flight - {flightDetails.legs[0].durationInMinutes} Minutes</div>
                        <div>Number of stops - {flightDetails.legs[0].stopCount} </div>
                    </div>
                    <div className="border-top border-secondary">
                        <Link to="/login">
                            <button className="primary rounded-pill mt-2">Book</button>
                        </Link>
                    </div>
                    More flights from the same Airline.
                    <ul>
                        {
                            flightDataToSend.map && flightDataToSend.map(param => <FlightDetailsList key={param._id}
                                                                                                     flightDetails={param}/>)
                        }
                    </ul>
                    {/*<FlightDetailsList flightDetails={data}/>*/}
                </div>
            </>
        );
    }
    else {
        return (
            <>
                <HeaderComponent location={location}/>
                <div className="container">
                    <div className="row mt-2">
                        <div className="col-2 ps-3 me-3" style={{width: '100%'}}>
                            <label
                                className="wd-fg-color-white h6 fw-bold">{flightDetails.legs[0].carriers.marketing[0].name}&nbsp;</label>
                            <label
                                className="wd-topic wd-fg-color-light-gray">&nbsp; {flightDetails.legs[0].segments[0].flightNumber}</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <b>{flightDetails.legs[0].origin.name}({flightDetails.legs[0].origin.displayCode})</b></div>
                        <div className="col-2">
                    <span className="plane">
                        <svg
                            clipRule="evenodd"
                            fillRule="evenodd"
                            height="50"
                            width="50"
                            imageRendering="optimizeQuality"
                            shapeRendering="geometricPrecision"
                            textRendering="geometricPrecision"
                            viewBox="0 0 500 500"
                            xmlns="http://www.w3.org/2000/svg">
                          <g stroke="#222">
                            <line
                                fill="none"
                                strokeLinecap="round"
                                strokeWidth="30"
                                x1="300"
                                x2="55"
                                y1="390"
                                y2="390"/>
                            <path
                                d="M98 325c-9 10 10 16 25 6l311-156c24-17 35-25 42-50 2-15-46-11-78-7-15 1-34 10-42 16l-56 35 1-1-169-31c-14-3-24-5-37-1-10 5-18 10-27 18l122 72c4 3 5 7 1 9l-44 27-75-15c-10-2-18-4-28 0-8 4-14 9-20 15l74 63z"
                                fill="#222"
                                strokeLinejoin="round"
                                strokeWidth="10"/>
                          </g>
                        </svg>
                    </span>
                        </div>
                        <div className="col-3">
                            <b>{flightDetails.legs[0].destination.name}({flightDetails.legs[0].destination.displayCode})</b>
                        </div>
                        <div className="col-3"><b>${flightDetails.pricing_options[0].price.amount}</b></div>
                    </div>
                    <div>
                        <div>Arrival - {flightDetails.legs[0].arrival}</div>
                        <div>Departure - {flightDetails.legs[0].departure}</div>
                        <div>Duration of flight - {flightDetails.legs[0].durationInMinutes} Minutes</div>
                        <div>Number of stops - {flightDetails.legs[0].stopCount} </div>
                    </div>
                    <div className="border-top border-secondary">
                            <button className="primary rounded-pill mt-2" onClick={submitted}>Book</button>
                    </div>
                    More flights from the same Airline.
                    <ul>
                        {
                            flightDataToSend.map && flightDataToSend.map(param => <FlightDetailsList key={param._id}
                                                                                                     flightDetails={param}/>)
                        }
                    </ul>
                    {/*<FlightDetailsList flightDetails={data}/>*/}
                </div>
            </>
        );
    }
}

export default FlightDetails;