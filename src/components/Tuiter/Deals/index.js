import React from "react";
import deals from "./deals.json";
import DealItems from "./dealItems";

const Deals = () => {
    return(
        <>
            <ul className="list-group">
                <li className="list-group-item">
                    <h5>Deals</h5>
                </li>
                {
                    deals.map(deal => {
                        return(<DealItems key = {deal.id} deal={deal}/>);
                    })
                }
            </ul>
        </>
    );
}

export default Deals;