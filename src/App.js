import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Wrapper from './component/Wrapper';
import Card from './component/Card';
import Post from './component/Post';

import './component/Insta.css'
// import Scroll from './component/Scroll';
// import image1 from './component/img/cover-1.png'
import rhsimg from "./component/img/cover-1.png"

import imgcard1 from "./component/img/cover-12.png"
import imgcard2 from "./component/img/cover-6.png"
import imgcard3 from "./component/img/cover-3.png"
import imgcard4 from "./component/img/cover-4.png"

import img1 from './component/img/cover-4.png'
import img2 from './component/img/cover-5.png'
import img3 from './component/img/cover-2.png'
import img4 from './component/img/cover-8.png'
import img5 from './component/img/cover-9.png'
import img6 from './component/img/cover-10.png'

import option from './component/img/option.PNG'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='main'>
        <div className="wrapper">
         {/* <Scroll /> */}
         <div className="left-col">
           <div className='status-wrapper'>
            <Wrapper wrapperimg={img1} username="@uguihiho"/>
            <Wrapper wrapperimg={imgcard1} username="@duwuidh"/>
            <Wrapper wrapperimg={imgcard2} username="@dwhiwp"/>
            <Wrapper wrapperimg={imgcard3} username="@okdopqk"/>
            <Wrapper wrapperimg={img6} username="@dnijdie"/>
            <Wrapper wrapperimg={img2} username="#edihqio"/>
            <Wrapper wrapperimg={img3} username="@wiodqi"/>
            <Wrapper wrapperimg={img4} username="@dnqi3dhi"/>
            <Wrapper wrapperimg={img5} username="@wdhuiqho"/>
            <Wrapper wrapperimg={img6} username="@wdjioq"/>
            </div>

            <Post coverimg={img6} userimg={img6} username="@getmeowedhuman"/>
            <Post coverimg={imgcard2} userimg={imgcard2} username="@itsloremipsumbro" />
            <Post coverimg={img3} userimg={img3} username="@broidontcare" />
            <Post coverimg={img4} userimg={img4} username="@whatever"/>
            <Post coverimg={img5} userimg={img5} username="@quitsulking" />
            </div>
           <div className="right-col">
           <div className="profile-card">
            <div className="profil-pic">
                <img src={rhsimg} alt="" />
            </div>
            <div className="description-text">
                <p className="username">@meowmi</p>
                <p className="sub-text">get meowed</p>
            </div>
            <button className="action-btn">
                switch
            </button>
           </div>
           {/* profile card ends */}
           <h3 className="post-suggest">Suggestions for you</h3>
            <Card cardimg={imgcard1} username="@pampam" />
            <Card cardimg={imgcard2} username="@dwightsch" s/>
            <Card cardimg={imgcard3} username="@michaelsc" />
            <Card cardimg={imgcard4} username="@spamspam"  />
            </div>
            {/* right col ends */}
        </div>
        {/* wrapper ends */}
      </div>
      {/* main ends */}
    </div>
  );
}

export default App;


