import {UPDATE_DISCOUNT, FIND_DISCOUNT, INITIAL_VALUES} from "../../actions/actions";
const discountReducer = (state = [], action) => {
    switch (action.type) {
        case FIND_DISCOUNT:
            return action.discountValue
        case UPDATE_DISCOUNT:
            return state.map(discountValue => discountValue?._id === action.discountValue?._id ? action.discountValue :discountValue)
        default:
            return state;
    }
}
export default discountReducer;