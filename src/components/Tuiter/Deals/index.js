import React from "react";
import deals from "./deals.json";
import DealItems from "./dealItems";

const Deals = () => {
    return(
        <>
            <ul className="list-group wd-list-group-item">
                <li className="list-group-item">
                    <h5 className="wd-blueBG">Deals</h5>
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