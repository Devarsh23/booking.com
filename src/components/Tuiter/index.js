import React from "react";
import {Outlet} from "react-router-dom";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import profileReducer from "./reducers/profile-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";

const reducer = combineReducers({
    tuits: tuitsReducer, who: whoReducer, profileReducer: profileReducer
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