import {Link} from "react-router-dom";
import React, {useEffect} from "react";
import {findBookings} from "../../actions/actions";
import {useDispatch, useSelector} from "react-redux";
import OtherBookingItem from "./OtherBookingItem";
const OtherBooking = ({location}) => {
    const currentUser = location.state.firstname;
    const dispatch = useDispatch();
    const bookings = useSelector(state => state.bookings);
    useEffect(() => findBookings(dispatch),[])

    return (
        <>
            <ul className="list-group mt-5">
                <h5 className="wd-blueFont">Check out what others are upto:</h5>
                {
                    bookings.map(booking => {
                        return(<OtherBookingItem key = {booking._id} booking={booking}/>);
                    })
                }

            </ul>
        </>
    )
}
export default OtherBooking;