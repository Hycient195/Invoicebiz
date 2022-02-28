import { useState } from 'react';
import './RightAside.css';

export default function RightAside(){
  const [ feedContent, setFeedContent ] = useState();
  const [ feedContentState, setFeedContentState ] = useState(false);

  const showFeedContent = (e) =>{
    if(feedContentState == false){
      setFeedContent(
        <div className="feed-content">
          <div className="icon">icon</div>
          <div className="text">
            Do you want to work on a state-of-the-art platform
            used across many industries to solve challenging 
            technical and architecture problems?
          </div>
        </div>
      )
      setFeedContentState(true)
    }
    else{
      setFeedContent('')
      setFeedContentState(false)
    }
  }

  return(
    <div className="right-aside-container">
      <div className="right-aside-top">
        <div className="top">
          <div className="left">
            <h2 className="not-bold shed-margin-padding">John Doe</h2>
            <p className="shed-margin-padding">User</p>
          </div>
          <div className="right">
            <h2 className="not-bold shed-margin-padding">$266</h2>
            <p className="shed-margin-padding">22.2%</p>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <h3 className="shed-margin-padding">$8.99/month</h3>
            <p className="shed-margin-padding">$80.99 billed anually</p>
          </div>
          <div className="right">
            <button>Accept</button>
          </div>
        </div>
      </div>
      {/*------------- End Of Right Section Top -----------------*/}

      {/*======== Begining Of Righto Section Bottom =======*/}
      <div className="right-aside-bottom">
        <div className="title">
          <h3 className="shed-margin-padding not-bold">Feed</h3>
          <p className="shed-margin-padding">Month</p>
        </div>
        <ul className="feed-list">
          <li onClick={showFeedContent}>
            <h3 className="shed-margin-padding title not-bold">New client <span>icon</span> </h3>
            <p className="shed-margin-padding time">1 Hour Ago</p>
            { feedContent && feedContent}
          </li>

          <li onClick={showFeedContent}>
            <h3 className="shed-margin-padding title not-bold">Business added sucessfully <span>icon</span> </h3>
            <p className="shed-margin-padding time">1 Hour Ago</p>
            { feedContent && feedContent}
          </li>

          <li onClick={showFeedContent}>
            <h3 className="shed-margin-padding title not-bold">Invoice sent <span>icon</span> </h3>
            <p className="shed-margin-padding time">1 Hour Ago</p>
            { feedContent && feedContent}
          </li>
        </ul>
        <div className="line"></div>
      </div>
    </div>
  )
}