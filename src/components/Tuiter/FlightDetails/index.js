import React from "react";
import {Link} from "react-router-dom";

const FlightDetails = ({flightDetails}) => {
    return(
        <>
            <div className="container wd-fg-color-black wd-whiteBG">
                <div className="row mt-2">
                    <div className="col-2 ps-3 me-3" style={{width:'100%'}}>
                        <label className="wd-fg-color-blue h6 fw-bold">{flightDetails.legs[0].carriers.marketing[0].name}&nbsp;</label>
                        <label className="wd-topic wd-fg-color-light-gray">&nbsp; {flightDetails.legs[0].segments[0].flightNumber}</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4"><b>{flightDetails.legs[0].origin.name}({flightDetails.legs[0].origin.displayCode})</b></div>
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
                    <div className="col-3"> <b>{flightDetails.legs[0].destination.name}({flightDetails.legs[0].destination.displayCode})</b></div>
                    <div className="col-3"><b>${flightDetails.pricing_options[0].price.amount}</b></div>
                </div>
                <div>
                    <div>Arrival - {flightDetails.legs[0].arrival}</div>
                    <div>Departure - {flightDetails.legs[0].departure}</div>
                    <div>Duration of flight - {flightDetails.legs[0].durationInMinutes} Minutes</div>
                    <div>Number of stops - {flightDetails.legs[0].stopCount} </div>
                </div>
                <div className= "border-top border-secondary">
                    <Link to="/login">
                        <button className="primary rounded-pill mt-2">Book</button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default FlightDetails;