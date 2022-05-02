import React, {useEffect} from "react";
import "../ExploreScreen/explore.css"
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {findDiscountValue} from "../../actions/actions";
import data from "./ApiData.json";

const TuitListItem = ({param, callbackFn, userdata, discountData}) => {
    function update(param) {
        callbackFn.callbackFn(param);
    }
    const discountValues = parseInt(param.pricing_options[0].price.amount);
    const p = parseInt(discountData.valueData);
    const q = (1 - p/100) * discountValues;
    // console.log("discount data -->", discountData);

    if (discountData.tempData === param.legs[0].carriers.marketing[0].name) {

        if (userdata === null) {
            return (
                <div className="container">
                    <div className="row mt-2">
                        <div className="col-2 ps-3 me-3" style={{width: '100%'}}>
                            <label
                                className="wd-fg-color-blue h6 fw-bold">{param.legs[0].carriers.marketing[0].name}&nbsp;</label>
                            <label
                                className="wd-topic wd-fg-color-light-gray">&nbsp; {param.legs[0].segments[0].flightNumber}</label>
                        </div>
                    </div>
                    <div className="row border-bottom border-secondary">
                        <div className="col-2"><b>{param.legs[0].origin.displayCode}</b></div>
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
                        <div className="col-3"><b>{param.legs[0].destination.displayCode}</b></div>
                        <div className="col-3"><b><s>${param.pricing_options[0].price.amount}</s></b>
                            </div>
                        <div className="col-2">
                            <Link to={{pathname: `/details/${param.id}`}}>
                                <button className="primary rounded-pill" onClick={update.bind(this, param)}>Details
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="container">

                    <div className="row mt-2">
                        <div className="col-2 ps-3 me-3" style={{width: '100%'}}>
                            <label
                                className="wd-fg-color-blue h6 fw-bold">{param.legs[0].carriers.marketing[0].name}&nbsp;</label>
                            <label
                                className="wd-topic wd-fg-color-light-gray">&nbsp; {param.legs[0].segments[0].flightNumber}</label>
                        </div>
                    </div>
                    <div className="row border-bottom border-secondary">
                        <div className="col-2"><b>{param.legs[0].origin.displayCode}</b></div>
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
                        <div className="col-3"><b>{param.legs[0].destination.displayCode}</b></div>
                        <div className="col-3"><b><s>${param.pricing_options[0].price.amount}</s></b>
                            <br></br>
                            <b>${q}</b>
                        </div>
                        <div className="col-2">
                            <Link to={{pathname: `/details/${param.id}`}} state={userdata}>
                                <button className="primary rounded-pill" onClick={update.bind(this, param)}>Details
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            );
        }

    }
    else {
        if (userdata === null) {
            return (
                <div className="container">
                    <div className="row mt-2">
                        <div className="col-2 ps-3 me-3" style={{width: '100%'}}>
                            <label
                                className="wd-fg-color-blue h6 fw-bold">{param.legs[0].carriers.marketing[0].name}&nbsp;</label>
                            <label
                                className="wd-topic wd-fg-color-light-gray">&nbsp; {param.legs[0].segments[0].flightNumber}</label>
                        </div>
                    </div>
                    <div className="row border-bottom border-secondary">
                        <div className="col-2"><b>{param.legs[0].origin.displayCode}</b></div>
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
                        <div className="col-3"><b>{param.legs[0].destination.displayCode}</b></div>
                        <div className="col-3"><b>${param.pricing_options[0].price.amount}</b></div>
                        <div className="col-2">
                            <Link to={{pathname: `/details/${param.id}`}}>
                                <button className="primary rounded-pill" onClick={update.bind(this, param)}>Details
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="container">

                    <div className="row mt-2">
                        <div className="col-2 ps-3 me-3" style={{width: '100%'}}>
                            <label
                                className="wd-fg-color-blue h6 fw-bold">{param.legs[0].carriers.marketing[0].name}&nbsp;</label>
                            <label
                                className="wd-topic wd-fg-color-light-gray">&nbsp; {param.legs[0].segments[0].flightNumber}</label>
                        </div>
                    </div>
                    <div className="row border-bottom border-secondary">
                        <div className="col-2"><b>{param.legs[0].origin.displayCode}</b></div>
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
                        <div className="col-3"><b>{param.legs[0].destination.displayCode}</b></div>
                        <div className="col-3"><b>${param.pricing_options[0].price.amount}</b></div>
                        <div className="col-2">
                            <Link to={{pathname: `/details/${param.id}`}} state={userdata}>
                                <button className="primary rounded-pill" onClick={update.bind(this, param)}>Details
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default TuitListItem;