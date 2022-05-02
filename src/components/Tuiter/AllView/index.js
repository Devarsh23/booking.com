import {Link, useLocation} from "react-router-dom";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import AllviewList from "./AllviewList";
import {findlogin} from "../../actions/actions";
//import OtherBookingItem from "./OtherBookingItem";
const AllView = () => {
    const location = useLocation();
    useEffect(() => findlogin(dispatch),[]);
    const dispatch = useDispatch();
    const data = useSelector(state => state.login);
    console.log("booking -->", data);
    console.log("location -->", location);

    return (
        <>
            <ul className="list-group mt-5">
                <h5 className="wd-blueBG wd-whiteFont wd-fontBold p-4">All Users:</h5>
                {
                     data.map(booking => {
                         return(<AllviewList key = {booking._id} data={booking}/>);
                    }
                    )

                }

            </ul>
        </>
    )
}
export default AllView;