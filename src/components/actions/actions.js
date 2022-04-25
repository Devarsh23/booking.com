import * as service from "../services/services"

export const FIND_LOGIN = 'FIND_LOGIN';
export const CREATE_USER = 'CREATE_USER';
export const FIND_DEALS = 'FIND_DEALS';
export const CREATE_DEALS = 'CREATE_DEALS'
export const FIND_AIRLINES = 'FIND_AIRLINES';

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