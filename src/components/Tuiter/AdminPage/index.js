import React, {useEffect, useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {createdeal, createuser} from "../../actions/actions";
import {useDispatch, useSelector} from "react-redux";
import Login from "../LoginComponent";
import HeaderComponent from "../HeaderComponent";

const AdminPage = () => {

    const dispatch = useDispatch();
    const [discount, setdiscount] = useState(1);
    const [airlines, setairline] = useState(1);
    const [creditCard, setCreditCard] = useState(1);
    function submitted () {
        createdeal(dispatch,{discount,airlines,creditCard});
    }
    const location = useLocation();

    if (location === null) {
        alert("Please log in as admin before accessing this page");
        return (
            <>
                <Login/>
            </>
        );
    }
    else {
        return (
            <>
                <HeaderComponent location={location}/>
                <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-9 col-sm-10 col-10 wd-blueBG p-5 container ">
                    <h3 className="fw-bold">WELCOME TO ADMIN DEALS POSTING PAGE</h3>
                    <form>
                        <div className="form-group">
                            <label>Discount in Percentage </label>
                            <input type="number" className="form-control wd-px" placeholder="discount in %" onChange={event =>
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
                                setCreditCard(event.target.value)}/>
                        </div>
                        <br></br>
                        <button type="submit" className="btn btn-primary btn-block" onClick={submitted}>Post Deal</button>
                    </form>
                </div>
            </>
        );
    }
}
export default AdminPage;