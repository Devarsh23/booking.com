import React, {useState} from "react";

const Navigationsidebar = ({setPassengers, setOrigin, setDestination, setDate}) => {
    const [passengers, setpassengers] = useState('')
    const [origin, setorigin] = useState('')
    const [destination, setdestination] = useState('')
    const [date, setdate] = useState('')
    function setValues(){
        setPassengers(passengers);
        setOrigin(origin);
        setDestination(destination);
        setDate(date);
    }
    return (
        <>
            <div className="list-group">
                <div>
                    <h5>Filters</h5>
                </div>
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
                <button className="btn btn-primary rounded-pill" onClick={setValues}>Submit</button>
            </div>
        </>
    );
}

export default Navigationsidebar;