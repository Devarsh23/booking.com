import React from "react";
import TuitListItem from "./tuit-list-item";
import data from "./ApiData.json";
import axios from 'axios';

const TuitList = ({passengers, origin, destination, date, callbackFn,userdata}) => {
    const options = {
        method: 'GET',
        url: 'https://skyscanner44.p.rapidapi.com/search-extended',
        params: {
            adults: passengers,
            origin: origin,
            destination: destination,
            departureDate: date,
            currency: 'USD'
        },
        headers: {
            'X-RapidAPI-Host': 'skyscanner44.p.rapidapi.com',
            'X-RapidAPI-Key': '96f6331ecamsh89f106ecd061eb5p16708djsnad3ed151876a'
        }
    };
    let test
    // function getData() {
    //     return axios.request(options).then(response => {
    //         response = response.data.itineraries.results
    //         return response
    //     })
    // }
    // let test = getData();
    // console.log(test);
    // axios.request(options).then(function (response) {
    //     // console.log(response.data.itineraries.results);
    //    const test = response.data.itineraries.results
    // }).catch(function (error) {
    //     console.error(error);
    // });
    // console.log(test);
    test = data[0].itineraries.results;
    if (userdata === null) {
        return (
            <ul className="ttr-tuits list-group">
                {
                    test.map && test.map(param => <TuitListItem key={param.id} param={param} callbackFn={callbackFn}/>)
                }
            </ul>
        );
    }
    else {
        return (
            <ul className="ttr-tuits list-group">
                {
                    test.map && test.map(param => <TuitListItem key={param.id} param={param} callbackFn={callbackFn} userdata = {userdata}/>)
                }
            </ul>
        );
    }
}

export default TuitList;