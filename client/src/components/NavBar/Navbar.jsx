import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

const routeseWithoutSidebar = ["/dashboard", "/sign_in"];

export default function Navbar(){
  const { pathname } = useLocation();

  /** Hiding the navbar for specific pages */
  if(routeseWithoutSidebar.some(route => pathname.includes(route))) return null

  return(
    <header>
      <nav className="navbar-nav">
        <h2 className="title">Invoicebiz</h2>
        <ul>
          <li className="nav-links"><a href="#">Why Invoicebiz</a></li>
          <li className="nav-links"><a href="#">Book a demo</a></li>
          <li className="nav-links"><a href="#">Pricing</a></li>
          <li className="nav-links"><a href="#">FAQ</a></li>
          <li><Link to="/sign_in" className="sign-in">Sign in</Link></li>
          <li><button className="sign-up">Sign up free</button></li>
        </ul>
        <Link to="/sign_in" className="sign-in-mobile">Sign in</Link>
      </nav>
    </header>
    
  )
}