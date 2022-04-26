import * as service from "../services/services"

export const FIND_LOGIN = 'FIND_LOGIN';
export const CREATE_USER = 'CREATE_USER';
export const FIND_DEALS = 'FIND_DEALS';
export const CREATE_DEALS = 'CREATE_DEALS'
export const FIND_AIRLINES = 'FIND_AIRLINES';
export const CREATE_AIRLINES = 'CREATE_AIRLINES';
export const API_RESULTS = 'API_RESULTS';
export const INITIAL_VALUES = 'INITIAL_VALUES';
export const SINGLE_INITIAL_VALUES = 'SINGLE_INITIAL_VALUES';


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

export const findSingleValue = async(dispatch) => {
    const singleValue = await service.findInitial();
    dispatch({type: SINGLE_INITIAL_VALUES, singleValue})
}