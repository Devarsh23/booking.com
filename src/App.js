import './App.css';
import './vendors/bootstrap/bootstrap-5.1.3-dist/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/fontawesome-free-5.15.4-web/css/all.css';
import Index from "./components/Tuiter/index";
import HomeScreen from "./components/Tuiter/home-screen"
import ExploreScreen from "./components/Tuiter/ExploreScreen/explorescreen"
import Profile from "./components/Tuiter/Profile/index"
import EditProfile from "./components/Tuiter/EditProfile"
import FlightDetails from "./components/Tuiter/FlightDetails";
import SignUp from "./components/Tuiter/SignUpComponent";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {useState} from "react";
import LoginComponent from "./components/Tuiter/LoginComponent";
import SignUpComponent from "./components/Tuiter/SignUpComponent";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import tuitsReducer from "./components/Tuiter/reducers/tuits-reducer";
import whoReducer from "./components/Tuiter/reducers/who-reducer";
import profileReducer from "./components/Tuiter/reducers/profile-reducer";
import loginReducers from "./components/Tuiter/reducers/login-reducers";
import dealsReducers from "./components/Tuiter/reducers/deals-reducer";
import AdminPage from "./components/Tuiter/AdminPage";
import airlineReducers from "./components/Tuiter/reducers/airline-reducers";
import AirlinePage from "./components/Tuiter/AirlinePage";
const reducer = combineReducers({
    tuits: loginReducers, who: whoReducer, profileReducer: profileReducer, deals: dealsReducers, login: loginReducers, airlines: airlineReducers
});
const store = createStore(reducer);
function App() {
    const [flightDetails, setFlightDetails] = useState(1);
    const callbackFn = (data)=>{
        setFlightDetails(data);
    }
    return (
        <Provider store={store}>
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/">
                        <Route path="tuiter"
                               element={<Index/>}>
                            <Route path = "home"
                                   element = {<HomeScreen callbackFn = {callbackFn}/>}/>
                            <Route path = "explore"
                                   element = {<ExploreScreen/>}/>
                            <Route path = "profile"
                                   element = {<Profile/>}/>
                            <Route path="edit-profile"
                                   element = {<EditProfile/>}/>
                        </Route>
                        <Route path="details/:paramId"
                               element={<FlightDetails flightDetails={flightDetails}/>}>
                        </Route>
                        <Route path="signup"
                               element={<SignUp/>}>
                        </Route>
                        <Route path="login"
                               element={<LoginComponent usertype="user"/>}>
                        </Route>
                        <Route path="admin"
                               element={<LoginComponent usertype="admin"/>}>
                        </Route>
                        <Route path="airline"
                               element={<LoginComponent usertype="airline"/>}>
                        </Route>
                        <Route path="user/register"
                               element={<SignUpComponent userStatus="user"/>}>
                        </Route>
                        <Route path="admin/register"
                               element={<SignUpComponent userStatus="admin"/>}>
                        </Route>
                        <Route path="airline/register"
                               element={<SignUpComponent userStatus="airline"/>}>
                        </Route>
                        <Route path="/admin-form"
                               element={<AdminPage/>}>
                        </Route>
                        <Route path="/airline-form"
                               element={<AirlinePage/>}>
                        </Route>
                        <Route path="/profile"
                        element={<Profile/>}></Route>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
        </Provider>
    );
}


export default App;