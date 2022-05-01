import React, {useEffect} from "react";
import {findDiscountValue} from "../../actions/actions";
import {useDispatch, useSelector} from "react-redux";
import {updateDiscount} from "../../actions/actions";

const DealItems = ({deal}) => {
    const dispatch = useDispatch();
    const airlines = deal?.airlines;
    const discount = deal?.discount;
    var flag = {airlines,discount};
    useEffect(() => findDiscountValue(dispatch),[]);
    const data = useSelector(state => state.flags[0]);
    const _id = data?._id;
    const discountValue = {_id, airlines,discount}
    function submitted () {
        updateDiscount(dispatch, {...discountValue})
        alert("Discount applied")
    }
    return(
        <>
            <li className="list-group-item">
                <label className="h6 ps-2">{deal['discount']} off on {deal.airlines}</label>
                <button className="rounded-pill float-end btn-primary" onClick={submitted}>Apply</button>
            </li>
        </>
    );
}

export default DealItems;