import React from 'react'
// import coverimg from './img/cover-1.png'
import './Insta.css'
function Wrapper({wrapperimg, username}) {
  return (
    <>
            <div className="status-card">
                <div className="profile-pic">
                    <img src={wrapperimg} alt="alt" />
                </div>
                <p className="username">{username}</p>
            </div>
   </>
  )
}

export default Wrapper