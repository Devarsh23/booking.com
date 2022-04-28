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
            <div className="list-group p-3 wd-blueBG ">
                <div>
                    <h5>Filters</h5>
                </div>
                {/*<form>*/}
                <div>
                    <label htmlFor="numberOfPassengers">Number of Passengers</label>
                    <input className=" wd-width100 wd-textCenter"  type="number" id="numberOfPassengers" placeholder="1" onChange={event =>
                        setpassengers(event.target.value)
                    }>
                    </input>
                </div>
                <br></br>
                <div>
                    <label htmlFor="origin">Origin</label>
                    <input className=" wd-width100 wd-textLeft"  type="text" id="origin" placeholder="Origin" onChange={event =>
                        setorigin(event.target.value)
                    }>
                    </input>
                </div>
                <br></br>
                <div>
                    <label htmlFor="destination">Destination</label>
                    <input className=" wd-width100"  type="text" id="destination" placeholder="Dest" onChange={event =>
                        setdestination(event.target.value)
                    }>
                    </input>
                </div>
                <br></br>
                <div>
                    <label htmlFor="date">Travel Date</label>
                    <input className=" wd-width100 wd-textCenter"  type="date" id="date" placeholder="From Date" onChange={event =>
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