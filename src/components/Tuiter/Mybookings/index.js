import {Link} from "react-router-dom";
import React from "react";
import deals from "../Deals/deals.json";
import DealItems from "../Deals/dealItems";
const Mybookings = () => {
    return (
        <>
            <ul className="list-group">
                <li className="list-group-item">
                    <h5>My Bookings</h5>
                </li>
                {
                    deals.map(deal => {
                        return(<DealItems key = {deal.id} deal={deal}/>);
                    })
                }
            </ul>
        </>
    )
}
export default Mybookings;