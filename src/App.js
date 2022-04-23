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

function App() {
    const [flightDetails, setFlightDetails] = useState(1);
    const callbackFn = (data)=>{
        setFlightDetails(data);
    }
    return (
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
                               element={<LoginComponent/>}>
                        </Route>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}


export default App;