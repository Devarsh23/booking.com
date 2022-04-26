import React, {useEffect} from "react";
import TuitListItem from "./tuit-list-item";
import data from "./ApiData.json";
import axios from 'axios';
import {useDispatch, useSelector} from "react-redux";
import {apiresults, findlogin, findSingleValue} from "../../actions/actions";
const TuitList = ({passengers, origin, destination, date, callbackFn, userdata}) => {
    //console.log("tuit from our logic -->", passengers,origin,destination,date);
    const dispatch = useDispatch();
    useEffect(() => findSingleValue(dispatch),[]);
    //let test = data[0].itineraries.results;
    useEffect(() => apiresults(dispatch,filterData),[])
    const filterData = useSelector(state => state.singleValue[0]);
    //console.log("tuit from redux -->", filterData?.passengers, filterData?.origin, filterData?.destination, filterData?.date);
    const test = useSelector(state => state.results);
    if (userdata === null) {
        return (
            <ul className="ttr-tuits list-group">
                {
                    test.map && test.map(param => <TuitListItem key={param.id} param={param} callbackFn={callbackFn}/>)
                }
            </ul>
        );
    } else {
        return (
            <ul className="ttr-tuits list-group">
                {
                    test.map && test.map(param => <TuitListItem key={param.id} param={param} callbackFn={callbackFn}
                                                                userdata={userdata}/>)
                }
            </ul>
        );
    }
}

export default TuitList;