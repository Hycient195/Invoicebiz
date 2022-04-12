import "./LeftNav.css";
import RocketImg from '../../assets/rocket.svg';
import  Pieces from '../../components/Pieces/index';

export default function LeftNav(){
  return(
    <div className="left-nav-container">
      
      {/*=========================*/}
      {/* Begining Of Top Section */}
      {/*=========================*/}
      <div className="top-section">
        <h2 className="top-text">Invoicebiz</h2>
      </div>

      <div className="middle-section">
        <img src={RocketImg} alt="" className="rocket-img"/>
      </div>
     

      {/*===========================*/}
      {/* Begining Of Lower Section */}
      {/*===========================*/}
      <div className="lower-section">
        <h3>Upgrade Now</h3>
        <p>For Unlimited Access</p>
        <ul>
          <li><span><Pieces.Icons.Tick/></span> <p>Unlimited Invoices</p></li>
          <li><span><Pieces.Icons.Tick/></span> <p>Unlimited Clients</p></li>
          <li><span><Pieces.Icons.Tick/></span> <p>Cancel Anytime</p></li>
        </ul>
      </div>

      <div className="keyboard-container">
        <Pieces.VectorImages.Keyboard/>
      </div>
    </div>
  )
}