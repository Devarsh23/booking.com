import React, {useEffect} from "react";
import TuitListItem from "./tuit-list-item";
import data from "./ApiData.json";
import axios from 'axios';
import {useDispatch, useSelector} from "react-redux";
import {findDiscountValue} from "../../actions/actions";
import {apiresults, findlogin, findSingleValue} from "../../actions/actions";
const TuitList = ({passengers, origin, destination, date, callbackFn, userdata}) => {
    //console.log("tuit from our logic -->", passengers,origin,destination,date);
    const dispatch = useDispatch();
    useEffect(() => findSingleValue(dispatch),[]);
    let test = data[0].itineraries.results;
    const filterData = useSelector(state => state.singleValue[0]);
    useEffect(() => apiresults(dispatch,filterData),[filterData])
    //console.log("check --> ", filterData);
    //console.log("tuit from redux -->", filterData?.passengers, filterData?.origin, filterData?.destination, filterData?.date);
    //const test = useSelector(state => state.results);
    // console.log("test -->",test)

    useEffect(() => findDiscountValue(dispatch),[]);
    const temp = useSelector(state => state.flags[0]);
    const tempData = temp?.airlines;
    const valueData = temp?.discount;
    const discountValue = {tempData,valueData}

    if (userdata === null) {
        return (
            <ul className="ttr-tuits list-group wd-whiteBG wd-blueFont">
                {
                    test.map && test.map(param => <TuitListItem key={param.id} param={param} callbackFn={callbackFn}/>)
                }
            </ul>
        );
    } else {
        return (
            <ul className="ttr-tuits list-group wd-whiteBG wd-blueFont">
                {
                    test.map && test.map(param => <TuitListItem key={param.id} param={param} callbackFn={callbackFn}
                                                                userdata={userdata} discountData={discountValue}/>)
                }
            </ul>
        );
    }
}

export default TuitList;