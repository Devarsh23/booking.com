import * as service from "../services/services"

export const FIND_LOGIN = 'FIND_LOGIN';
export const CREATE_USER = 'CREATE_USER';

export const findlogin = async(dispatch) => {
    const tuits = await service.findLogin();
    dispatch({type: FIND_LOGIN, tuits})
}

export const createuser = async(dispatch, user) => {
    const newUser = await service.createUser(user);
    dispatch({type: CREATE_USER, newUser});
}