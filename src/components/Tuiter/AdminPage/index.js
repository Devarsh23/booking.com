import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {createdeal, createuser} from "../../actions/actions";
import {useDispatch, useSelector} from "react-redux";

const AdminPage = () => {
    const navigate = useNavigate();
    const [newUser, setnewUser] = useState({user : 'New User'});
    const tuits = useSelector(state => state.tuits);
    const dispatch = useDispatch();
    const [discount, setdiscount] = useState(1);
    const [airlines, setairline] = useState(1);
    const [creditCard, setCreditCard] = useState(1);
    function submitted () {
        createdeal(dispatch,{discount,airlines,creditCard});
    }


    return(
        <>
            <div className="col-4">
                <h3>WELCOME TO ADMIN DEALS POSTING PAGE</h3>
                <form>
                    <div className="form-group">
                        <label>Discount in Percentage </label>
                        <input type="number" className="form-control" placeholder="discount in %" onChange={event =>
                            setdiscount(event.target.value)}/>
                    </div>

                    <div className="form-group">
                        <label>Enter the Name of Airline on which you want to give discount</label>
                        <input type="text" className="form-control" placeholder="Airline" onChange={event =>
                            setairline(event.target.value)}/>
                    </div>

                    <div className="form-group">
                        <label>Enter the card on which you want discount</label>
                        <input type="text" className="form-control" placeholder="credit card" onChange={event =>
                            setCreditCard(event.target.value)} />
                    </div>
                    <br></br>
                    <button type="submit" className="btn btn-primary btn-block" onClick={submitted}>Sign Up</button>
                </form>
            </div>
        </>
    );
}
export default AdminPage;