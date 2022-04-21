import React from "react";

const WhoToFollowListItem = (
    {
        who = {
            avatarIcon: "/tuiter/images/nasa_48x48.jpeg",
            userName: 'NASA',
            handle: 'nasa'
        }
    }) => {
    return(
      <>
          <li className="list-group-item">
              <img src={who.avatarIcon} className="rounded-pill"></img>
          <label className="h6 ps-2">{who.userName} <i className="fas fa-circle"></i>
              <br></br>
          <label>@{who.handle}</label>
          </label>
          <button className="btn btn-primary btn-sm rounded-pill float-end">Follow</button>
          </li>
      </>
    );
}

export default WhoToFollowListItem;
