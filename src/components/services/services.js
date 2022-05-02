import axios from 'axios';
import {updateData} from "../actions/actions";
const LOGINAPI = 'http://localhost:4000/api/tuits';
const DEALSAPI = 'http://localhost:4000/api/deals';
const AIRLINESAPI = 'http://localhost:4000/api/airlines';
const INITIALAPI = 'http://localhost:4000/api/initial';
const BOOKINGSAPI = 'http://localhost:4000/api/bookings';
const DISCOUNTAPI = 'http://localhost:4000/api/discount';

export const findDeals = async () => {
    const response = await axios.get(DEALSAPI);
    // console.log(response.data);
    const datax = response.data;
    return datax;
}

export const findLogin = async () => {
    const response = await axios.get(LOGINAPI);
    const datax = response.data;
    return datax;
}


export const createUser = async (user) => {
    try {
        const response = await axios.post(LOGINAPI, user)
        return response.data;
    }
    catch (e) {
        console.log(e);
    }

}

export const createDeal = async (userDeal) => {
        const response = await axios.post(DEALSAPI, userDeal )
        return response.data;

}

export const createAirline = async (AirlineData) => {
    //console.log("Airline -->", AirlineData);
    const response = await axios.post(AIRLINESAPI, AirlineData)

    return response.data;

}

export const findAirlines = async () => {
    const response = await axios.get(AIRLINESAPI);
    const datax = response.data;
    return datax;
}

export const flightSearchResults = async (details) => {

    if (typeof details === 'undefined') {
        return {}
    }
    else {
        details.origin = await getCode(details.origin).then(result => result)
        details.destination = await getCode(details.destination).then(result => result)
        const options = {
            method: 'GET',
            url: 'https://skyscanner44.p.rapidapi.com/search-extended',
            params: {
                adults: details.passengers,
                origin: details.origin,
                destination: details.destination,
                departureDate: details.date,
                currency: 'USD'
            },
            headers: {
                'X-RapidAPI-Host': 'skyscanner44.p.rapidapi.com',
                'X-RapidAPI-Key': '96f6331ecamsh89f106ecd061eb5p16708djsnad3ed151876a'
            }
        };
        const response = await axios.request(options);
        return response.data.itineraries.results;
        // return {}
    }
    //  return{}
}

export const updateInitial = async (singleValue) => {
    //console.log("AAi gayo", singleValue);
    const response = await axios.put(`${INITIALAPI}/${singleValue._id}`,singleValue);
    return response.data;
}

export const updateUser = async (profile) => {
    //console.log("AAi gayo", singleValue);
    const response = await axios.put(`${LOGINAPI}/${profile._id}`,profile);
    return response.data;
}


export const findInitial = async () => {
    const response = await axios.get(INITIALAPI);
    const datax = response.data;
    return datax;
}

export const findBookings = async () => {
    const response = await axios.get(BOOKINGSAPI);
    const datax = response.data;
    return datax;
}

export const createBookings = async (bookings) => {
    const response = await axios.post(BOOKINGSAPI, bookings)
    return response.data;
}


export const findAppliedBooking = async () => {
    const response = await axios.get(DISCOUNTAPI);
    const datax = response.data;
    return datax;
}

export const updateDiscount = async (flag) => {
    //console.log("AAi gayo", singleValue);
    const response = await axios.put(`${DISCOUNTAPI}/${flag._id}`,flag);
    return response.data;
}


export const getCode = async (code) => {
    const options = {
        method: 'GET',
        url: 'https://skyscanner44.p.rapidapi.com/autocomplete',
        params: {query: code},
        headers: {
            'X-RapidAPI-Host': 'skyscanner44.p.rapidapi.com',
            'X-RapidAPI-Key': '96f6331ecamsh89f106ecd061eb5p16708djsnad3ed151876a'
        }
    };
    const response = await axios.request(options);
    return response.data[0].iata_code;
}