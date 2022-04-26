import {FIND_AIRLINES, CREATE_AIRLINES} from "../../actions/actions";
const airlineReducers = (state = [], action) => {
    switch (action.type) {
        case FIND_AIRLINES:
            return action.airlines;
        case CREATE_AIRLINES:
            return [...state, action.newAirline];
        default:
            return state;
    }
}
export default airlineReducers;