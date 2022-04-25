import {FIND_AIRLINES} from "../../actions/actions";
const airlineReducers = (state = [], action) => {
    switch (action.type) {
        case FIND_AIRLINES:
            return action.airlines;
        default:
            return state;
    }
}
export default airlineReducers;