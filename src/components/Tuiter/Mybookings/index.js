import {Link} from "react-router-dom";
import React, {useEffect} from "react";
import BookingItems from "./BookingItems";
import {findBookings} from "../../actions/actions";
import {useDispatch, useSelector} from "react-redux";
const Mybookings = ({location}) => {
    const currentUser = location.state.firstname;
    const dispatch = useDispatch();
    const bookings = useSelector(state => state.bookings);
    useEffect(() => findBookings(dispatch),[])
    let bookingDataOfUser = [];
    for (let i = 0; i < bookings.length; i++) {

        if (bookings[i].user === currentUser) {
            bookingDataOfUser.push(bookings[i]);
        }

    }

    return (
        <>
            <ul className="list-group mt-5">
                    <h5 className="wd-blueFont">My Bookings</h5>
                {
                    bookingDataOfUser.map(booking => {
                        return(<BookingItems key = {booking._id} booking={booking}/>);
                    })
                }

            </ul>
        </>
    )
}
export default Mybookings;