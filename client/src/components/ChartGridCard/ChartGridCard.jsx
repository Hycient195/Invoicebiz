export default function({signalIcon, title, date, price, rate }){
  return(
    <div className="chart-board-item">
      <div className="title">
        <div className="icon"><img src={signalIcon} alt=""/></div>
        <p className="title-text">{title}</p>
        <p className="date">{date}</p>
      </div>
      <div className="description">
        <div className="amount">
          <h1 className="price shed-margin-padding">{price}</h1>
          <p className="rate shed-margin-padding">{rate}</p>
        </div>
        <div className="chart">
        </div>
      </div>
    </div>
  )
}