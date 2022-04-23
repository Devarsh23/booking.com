import React from "react";
import HomeScreen from "../home-screen";

// const handleClick = () => {    console.log('this is:');
//     <HomeScreen passengers="r"/>
//     console.log("thai ja");}
const Navigationsidebar = ({activeParam, size}) => {
            return (
                <>
                    <div className="list-group">
                            <div className="form-group">
                                <label htmlFor="numberOfPassengers">Passengers</label>
                                <input type="number" className="form-control" id="numberOfPassengers"
                                       placeholder="No of travelers">
                                </input>
                            </div>
                            <br></br>
                            <div className="form-group">
                                <label htmlFor="origin">Origin</label>
                                <input type="text" className="form-control" id="origin"
                                       placeholder="Origin">
                                </input>
                            </div>
                            <br></br>
                            <div className="form-group">
                                <label htmlFor="destination">Destination</label>
                                <input type="text" className="form-control" id="destination"
                                       placeholder="Destination">
                                </input>
                            </div>
                            <br></br>
                            <div className="form-group">
                                <label htmlFor="date">Travel Date</label>
                                <input type="date" className="form-control" id="date"
                                       placeholder="From Date">
                                </input>
                            </div>
                            <br></br>
                            <button type="submit" className="btn btn-primary rounded-pill"
                            onClick={() => {
                                App()
                            }}>Submit</button>
                    </div>
                </>
            );
    }

export default Navigationsidebar;