import {Link} from "react-router-dom";
import React from "react";
import {useDispatch, useSelector} from "react-redux";

const HeaderComponent = ({location}) => {

    if(location?.state === null) {
        return (
            <>
                <div className="row mt-3">
                    <div className="col col-xxl-9 col-xl-9 col-lg-7 col-md-6 col-sm-4 col-4">
                        <h3 className="wd-blueFont"><Link to ="/tuiter/home"><i className="fa fa-plane wd-blueFont"></i></Link> Book My Flight</h3>
                    </div>
                    <div className="col wd-blueFont">
                        {location?.state?.firstname} {location?.state?.lastname}
                        <Link to="/login">
                            <i className="fas fa-user float-end wd-blueFont"></i>
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
                    <div className="col col-xxl-9 col-xl-9 col-lg-7 col-md-6 col-sm-4 col-4">
                        <h3 className="wd-blueFont"><Link to ="/tuiter/home"><i className="fa fa-plane wd-blueFont"></i></Link> Book My Flight</h3>
                    </div>
                    <div className="col wd-blueFont ">
                        Welcome {location?.state?.firstname} {location?.state?.lastname} !
                        <Link to="/profile"  state={location.state}>
                            <i className="fas fa-user float-end wd-blueFont"></i>
                        </Link>
                    </div>
                </div>
            </>
        )
    }
}
export default HeaderComponent;