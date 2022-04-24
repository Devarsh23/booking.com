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
            <div className="list-group p-3 wd-blueBG">
                <div>
                    <h5> Filters</h5>
                </div>
                <div>
                    <label htmlFor="numberOfPassengers">Number of Passengers</label><br/>
                    <input className=" wd-width100 wd-textCenter"  type="number" id="numberOfPassengers" placeholder="1" onChange={event =>
                        setpassengers(event.target.value)
                    }>
                    </input>
                </div>
                <br></br>
                <div>
                    <label htmlFor="origin">Origin</label><br/>
                    <input className=" wd-width100" type="text" id="origin" placeholder="Boston" onChange={event =>
                        setorigin(event.target.value)
                    }>
                    </input>
                </div>
                <br></br>
                <div>
                    <label htmlFor="destination">Destination</label><br/>
                    <input className=" wd-width100" type="text" id="destination" placeholder="Newark" onChange={event =>
                        setdestination(event.target.value)
                    }>
                    </input>
                </div>
                <br></br>
                <div>
                    <label htmlFor="date">Travel Date</label><br/>
                    <input className=" wd-width100 wd-textCenter" type="date" id="date" placeholder="From Date" onChange={event =>
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