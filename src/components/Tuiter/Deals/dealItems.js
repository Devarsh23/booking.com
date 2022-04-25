import React from "react";

const DealItems = ({deal}) => {
    return(
        <>
            <li className="list-group-item">
                <label className="h6 ps-2">{deal['discount']} off on {deal.airlines}</label>
                <button className="rounded-pill float-end btn-primary">View</button>
            </li>
        </>
    );
}

export default DealItems;