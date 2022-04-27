import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findData, findSingleValue, updateData} from "../../actions/actions";

const Navigationsidebar = ({setPassengers, setOrigin, setDestination, setDate}) => {
    const [passengers, setpassengers] = useState([])
    const [origin, setorigin] = useState([])
    const [destination, setdestination] = useState([])
    const [date, setdate] = useState([])
    var filterData = useSelector(state => state?.singleValue[0]);
    // const check = useSelector(state => state);
    // console.log("check -->",check);
    // var filterData;
    const _id = filterData?._id;
    var singleValue = {_id, passengers,origin,destination,date}
    useEffect(() => findSingleValue(dispatch),[]);
    const useSetValues = () => {
        updateData(dispatch,{...singleValue})
    }
    const dispatch = useDispatch();

    return (
        <>
            <div className="list-group">
                <div>
                    <h5>Filters</h5>
                </div>
                {/*<form>*/}
                <div>
                    <label htmlFor="numberOfPassengers">Passengers</label>
                    <input type="number" id="numberOfPassengers" placeholder="No of travelers" onChange={event =>
                        setpassengers(event.target.value)
                    }>
                    </input>
                </div>
                <br></br>
                <div>
                    <label htmlFor="origin">Origin</label>
                    <input type="text" id="origin" placeholder="Origin" onChange={event =>
                        setorigin(event.target.value)
                    }>
                    </input>
                </div>
                <br></br>
                <div>
                    <label htmlFor="destination">Destination</label>
                    <input type="text" id="destination" placeholder="Destination" onChange={event =>
                        setdestination(event.target.value)
                    }>
                    </input>
                </div>
                <br></br>
                <div>
                    <label htmlFor="date">Travel Date</label>
                    <input type="date" id="date" placeholder="From Date" onChange={event =>
                        setdate(event.target.value)
                    }>
                    </input>
                </div>
                <br></br>
                <button className="btn btn-primary rounded-pill" onClick={useSetValues}>Submit</button>
                {/*</form>*/}
           </div>
        </>
    );
}

export default Navigationsidebar;