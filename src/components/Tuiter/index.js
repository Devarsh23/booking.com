import React from "react";
import {Outlet} from "react-router-dom";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import profileReducer from "./reducers/profile-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import homeScreen from "./home-screen";
import apiReducers from "./reducers/apiResults-reducer";
import initialReducer from "./reducers/initial-reducer";
const reducer = combineReducers({
    tuits: tuitsReducer, who: whoReducer, profileReducer: profileReducer, results: apiReducers, singleValue : initialReducer
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