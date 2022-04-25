import {FIND_DEALS, CREATE_DEALS} from "../../actions/actions";
const dealsReducers = (state = [], action) => {
    switch (action.type) {
        case FIND_DEALS:
            return action.deals;
        case CREATE_DEALS:
            return [...state, action.newDeal];
        default:
            return state;
    }
}
export default dealsReducers;