import React from "react";
import TuitListItem from "../tuit-list/tuit-list-item";
import {useSelector} from "react-redux";

const CombinedComponent = (
    {traveler}
) => {
    const tuits = useSelector(state => state.tuits);
    return (
        <>
        <div className="col-2">
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
                        }}>Submit</button>
            </div>
        </div>
        <div className="col-6" style={{"position": "relative"}}>
            <div className="wd-bg-color-black-twitter">
                <ul className="ttr-tuits list-group">
                    {
                        tuits.map && tuits.map(tuit =>
                            <TuitListItem key={tuit._id}
                                          tuit={tuit}/>)
                    }
                </ul>
            </div>
        </div>
            </>
    );
}

export default CombinedComponent;
