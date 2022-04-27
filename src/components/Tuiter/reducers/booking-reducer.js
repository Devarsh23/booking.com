import {FIND_BOOKINGS, CREATE_BOOKINGS} from "../../actions/actions";

const bookingReducer = (state = [], action) => {
    switch (action.type) {
        case FIND_BOOKINGS:
            return action.bookings;
        case CREATE_BOOKINGS:
            return [...state, action.newBooking];
        default:
            return state;
    }
}
export default bookingReducer;