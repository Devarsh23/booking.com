import {CREATE_USER, FIND_LOGIN, UPDATE_USERS} from "../../actions/actions";
const loginReducers = (state = [], action) => {
    switch (action.type) {

        case FIND_LOGIN:
            return action.login;
        case CREATE_USER:
            return [...state, action.newUser];
        case UPDATE_USERS:
            return state.map(profile => profile._id === action.profile._id ? action.profile :profile);
        default:
            return state;
    }
}
export default loginReducers;