import {SINGLE_INITIAL_VALUES, INITIAL_VALUES} from "../../actions/actions";
const initialReducers = (state = [], action) => {
    switch (action.type) {
        case SINGLE_INITIAL_VALUES:
            return action.singleValue;
        case INITIAL_VALUES:
            return state.map(singleValue => singleValue._id === action.singleValue._id ? action.singleValue :singleValue)
        default:
            return state;
    }
}
export default initialReducers;