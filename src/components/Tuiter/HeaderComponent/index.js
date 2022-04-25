import {Link} from "react-router-dom";
import React from "react";
const HeaderComponent = ({location}) => {
    if(location.state === null) {
        return (
            <>
                <div className="row mt-3">
                    <div className="col">
                        <h3>Book My Flight</h3>
                    </div>
                    <div className="col">
                        {location?.state?.firstname} {location?.state?.lastname}
                        <Link to="/login">

                            <i className="fas fa-user float-end"></i>
                        </Link>
                    </div>
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <div className="row mt-3">
                    <div className="col">
                        <h3>Book My Flight</h3>
                    </div>
                    <div className="col">
                        {location?.state?.firstname} {location?.state?.lastname}
                        <Link to="/profile">

                            <i className="fas fa-user float-end"></i>
                        </Link>
                    </div>
                </div>
            </>
        )
    }
}
export default HeaderComponent;