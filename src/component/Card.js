import React from "react";
//import cardimg from "./img/cover-12.png";
import './Insta.css'

function Card({cardimg, username}) {
  return (
    <div>
      <div className="profile-card">
        <div className="profile-pic">
          <img src={cardimg} alt="alt" />
        </div>
        <div className="description-text">
          <p className="username">{username}</p>
          <p className="sub-text">get meowed</p>
        </div>
        <button className="action-btn">Follow</button>
      </div>
    </div>
  );
}

export default Card;
