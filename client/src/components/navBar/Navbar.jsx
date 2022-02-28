import './Navbar.css';
import { Link } from 'react-router-dom';
import { Button, } from '@material-ui/core'

export default function Navbar(){
  return(
    <header>
      <nav className="navbar-nav">
        <h2 className="title">Invoicebiz</h2>
        <ul>
          <li className="nav-links"><a href="">Why Invoicebiz</a></li>
          <li className="nav-links"><a href="">Book a demo</a></li>
          <li className="nav-links"><a href="">Pricing</a></li>
          <li className="nav-links"><a href="">FAQ</a></li>
          <li><Link to="/sign_in" className="sign-in">Sign in</Link></li>
          <li><button className="sign-up">Sign up free</button></li>
        </ul>
      </nav>
    </header>
    
  )
}