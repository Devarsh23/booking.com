import {CREATE_USER, FIND_LOGIN} from "../../actions/actions";
const loginReducers = (state = [], action) => {
    switch (action.type) {
        case FIND_LOGIN:
            return action.tuits;
        case CREATE_USER:
            return [...state, action.newUser];
        default:
            return state;
    }
}
export default loginReducers;