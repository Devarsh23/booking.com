import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
// import deals from "./deals.json";
import DealItems from "./dealItems";
import {findDeals, createuser, findlogin} from "../../actions/actions";
import * as service from "../../services/services"

const Deals = () => {
    const deals = useSelector(state => state.deals);

    // console.log(data);
    // const dispatch = useDispatch();
    // useEffect(() => findDeals(dispatch),[]);
    // console.log(data);
    const dispatch = useDispatch();
    // useEffect(() => findlogin(dispatch),[]);
    const findDeals = async () => {
        const deals = await service.findDeals();
        dispatch({
            type: 'FIND_DEALS',
            deals: deals
        });
        return deals;
    }
    useEffect(findDeals,[]);
    return(
        <>
            <ul className="list-group">
                <li className="list-group-item">
                    <h5>Deals</h5>
                </li>
                {
                    deals.map(deal => {
                        return(<DealItems key = {deal._id} deal={deal}/>);
                    })
                }
            </ul>
        </>
    );
}

export default Deals;