import downArrow from '../../assets/down-arrow.svg';
import feedIcon from '../../assets/feed-icon.svg';

export default function FeedItem ({ showFeedContent, feedContent, time, title, index }){
  const liHide = (e) =>{
    if(e.target.children[2].className == "feed-content"){
      e.target.children[2].className = "hidden"
      e.target.children[0].children[0].children[0].style.transition = "transform 500ms" 
      e.target.children[0].children[0].children[0].style.transform = "rotate(0deg)" 
    }else{
      e.target.children[2].className = "feed-content"
      e.target.children[0].children[0].children[0].style.transition = "transform 500ms" 
      console.log(e.target.children[0].children[0].children[0].style.transform = "rotate(180deg)" )
    }
  }

  const h3Hide = (e) =>{
    if( e.target.parentElement.children[2].className == "feed-content"){
      e.target.parentElement.children[2].className = "hidden"
      e.target.parentElement.children[0].children[0].children[0].style.transition = "transform 500ms" 
      e.target.parentElement.children[0].children[0].children[0].style.transform = "rotate(0deg)" 
    }else{
      e.target.parentElement.children[2].className = "feed-content"
      e.target.parentElement.children[0].children[0].children[0].style.transition = "transform 500ms" 
      e.target.parentElement.children[0].children[0].children[0].style.transform = "rotate(180deg)" 
    }
  }

  return(
    <li onClick={liHide}>
      <h3 onClick={h3Hide} className="shed-margin-padding title not-bold">{title}<span><img style={{height: "20px"}} src={downArrow} alt="" /></span> </h3>
      <p className="shed-margin-padding time">{time}</p>
      <div className="hidden">
        <div className="icon"><img src={feedIcon} alt="" /></div>
        <div className="text">
          {feedContent}
        </div>
      </div>
    </li>
  )
}