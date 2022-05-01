import React from "react";
import {Outlet} from "react-router-dom";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import homeScreen from "./home-screen";
import apiReducers from "./reducers/apiResults-reducer";
import initialReducer from "./reducers/initial-reducer";
import BookingReducer from "./reducers/booking-reducer";
import dealsReducers from "./reducers/deals-reducer";
import loginReducers from "./reducers/login-reducers";
import discountReducer from "./reducers/discount-reducer";
import HomeScreen from "./home-screen";

const reducer = combineReducers({
    tuits: tuitsReducer, who: whoReducer, results: apiReducers, singleValue : initialReducer, bookings:BookingReducer, deals: dealsReducers, login:loginReducers, flags: discountReducer
});
const store = createStore(reducer);

const Index = () => {
    return(
        <>
            <Provider store={store}>
                <Outlet/>
            </Provider>
        </>
    );
};

export default Index;