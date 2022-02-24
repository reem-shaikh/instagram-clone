import React from 'react'
import './Insta.css'
//import img1 from './img/cover-1.png'
import option from './img/option.PNG'
//import cover from './img/cover-1.png'
import like from './img/like.PNG'
import comment from "./img/comment.PNG"
import send from "./img/send.PNG"
import save from "./img/save.PNG"
import smile from "./img/smile.PNG"

function Post({coverimg, userimg, username}) {
  return (
    <>
    <div className="post">
            <div className="info">
                <div className="user">
                    <div className="profile-pic">
                        <img src={userimg} alt="" />
                    </div>
                    <p className="username">{username}</p>
                </div>
                {/* user ends */}

                <img src={option} alt="alt" />
            </div>
            {/* info ends */}
            <img src={coverimg} alt="" className="post-image" />

            <div className="post-content">

                <div className="reaction-wrapper">
                    <img src={like} alt="" className="ricon" />
                    <img src={comment} alt="" className="ricon" />
                    <img src={send} alt="" className="ricon" />
                    <img src={save} alt="" className="saveicon ricon" />
                </div>

                <p className="likes">1000 likes</p>
                <p className="description">
                    <span>{username}</span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum laudantium eaque qui ea dicta quam, tempora cupiditate quae ad facere?
                </p>
                <p className="post-time">2 minutes ago</p>
            </div>
            <div className="comment-wrapper">
                <img src={smile} alt="" className="icon" />
                <input type="text" name="" id="" placeholder="Add a comment" className="comment-box" />
                <button className="comment-btn">post</button>
            </div>
        </div>
        </>
  )
}

export default Post