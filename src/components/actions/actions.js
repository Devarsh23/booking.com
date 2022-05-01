import * as service from "../services/services"
import DealItems from "../Tuiter/Deals/dealItems";

export const FIND_LOGIN = 'FIND_LOGIN';
export const CREATE_USER = 'CREATE_USER';
export const FIND_DEALS = 'FIND_DEALS';
export const CREATE_DEALS = 'CREATE_DEALS'
export const FIND_AIRLINES = 'FIND_AIRLINES';
export const CREATE_AIRLINES = 'CREATE_AIRLINES';
export const API_RESULTS = 'API_RESULTS';
export const INITIAL_VALUES = 'INITIAL_VALUES';
export const SINGLE_INITIAL_VALUES = 'SINGLE_INITIAL_VALUES';
export const FIND_BOOKINGS = 'FIND_BOOKINGS';
export const CREATE_BOOKINGS = 'CREATE_BOOKINGS';
export const UPDATE_USERS = 'UPDATE_USERS';
export const FIND_DISCOUNT = 'FIND_DISCOUNT';
export const UPDATE_DISCOUNT = 'UPDATE_DISCOUNT';



export const findlogin = async(dispatch) => {
    const login = await service.findLogin();
    dispatch({type: FIND_LOGIN, login})
}

export const findDeals = async(dispatch) => {
    const deals = await service.findDeals();
    dispatch({type: FIND_DEALS, deals})
}

export const findAirlines = async(dispatch) => {
    const airlines = await service.findAirlines();
    dispatch({type: FIND_AIRLINES, airlines})
}

export const createuser = async(dispatch, user) => {
    const newUser = await service.createUser(user);
    dispatch({type: CREATE_USER, newUser});
}

export const createdeal = async(dispatch, userDeal) => {
    const newDeal = await service.createDeal(userDeal);
    dispatch({type: CREATE_DEALS, newDeal});
}

export const createairline = async(dispatch, AirlineData) => {
    const newAirline = await service.createAirline(AirlineData);
    dispatch({type: CREATE_AIRLINES, newAirline});
}

export const apiresults = async(dispatch, details) => {
    const results = await service.flightSearchResults(details);
    dispatch({type: API_RESULTS, results})
}

export const updateData = async(dispatch, singleValue) => {
    const response = await service.updateInitial(singleValue);
    dispatch({type: INITIAL_VALUES, singleValue})
}


export const updateUsers = async(dispatch, profile) => {
    const response = await service.updateUser(profile);
    dispatch({type: UPDATE_USERS, profile})
}


export const findSingleValue = async(dispatch) => {
    const singleValue = await service.findInitial();
    dispatch({type: SINGLE_INITIAL_VALUES, singleValue})
}

export const findBookings = async(dispatch) => {
    const bookings = await service.findBookings();
    dispatch({type: FIND_BOOKINGS, bookings})
}

export const createNewBookings = async(dispatch, bookings) => {
    const newBooking = await service.createBookings(bookings);
    dispatch({type: CREATE_BOOKINGS, newBooking})
}


export const findDiscountValue = async(dispatch) => {
    const discountValue = await service.findAppliedBooking();
    dispatch({type: FIND_DISCOUNT, discountValue})
}
export const updateDiscount = async(dispatch, flag) => {
    const response = await service.updateDiscount(flag);
    dispatch({type: UPDATE_DISCOUNT, flag})
}
