import "./LeftNav.css";
import RocketImg from '../../assets/rocket.svg';
import TickImg from '../../assets/tick.svg'
import Tick from "../pieces/tick";
import Keyboard from '../pieces/keyboard';

export default function LeftNav(){
  return(
    <div className="left-nav-container">
      <div className="top-section">
        <h2 className="top-text">Invoicebiz</h2>
      </div>

      <div className="middle-section">
        <img src={RocketImg} alt="" className="rocket-img"/>
      </div>
     
      <div className="lower-section">
        <h3>Upgrade Now</h3>
        <p>For Unlimited Access</p>
        <ul>
          <li><span><Tick/></span> <p>Unlimited Invoices</p></li>
          <li><span><Tick/></span> <p>Unlimited Clients</p></li>
          <li><span><Tick/></span> <p>Cancel Anytime</p></li>
        </ul>
      </div>

      <div className="keyboard-container">
        <Keyboard/>
      </div>
    </div>
  )
}