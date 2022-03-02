import { useLocation } from 'react-router-dom'
import './Footer.css';

const routesWithoutFooter = ["/sign_in", "/dashboard"];

export default function Footer(){
  const { pathname } = useLocation();

  if(routesWithoutFooter.some(route => pathname.includes(route))) return null

  return(
    <footer className="footer-container">
      <p className="title">Invoicebiz @ 2021. All rights reserved</p>
      <ul>
        <li><a href="#">HOME</a></li>
        <li><a href="">COLLECTIVE</a></li>
        <li><a href="">WORK WITH US</a></li>
        <li><a href="">ABOUT</a></li>
      </ul>
    </footer>
  )
}