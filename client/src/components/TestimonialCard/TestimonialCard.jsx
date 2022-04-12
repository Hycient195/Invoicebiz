import './TestimonialCard.css';

export default function({image, content, writer, location}){
  return(
    <div className="testimonial-card">
      <div className="image-container">
        <img src={image} alt=""/>
      </div>
      <div className="content">
        {content}
      </div>
      <div className="writer">
      ... {writer} <br/> {location}.
      </div>
    </div>
  )
}