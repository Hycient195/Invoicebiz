import './Home.css';
import { Button } from '@material-ui/core';
import LaptopImg from '../../assets/laptop.svg';
import TabletImg from '../../assets/tablet.svg';
import Testimonial_1 from '../../assets/testimonial-1.png';
import Testimonial_2 from '../../assets/testimonial-2.png';
import Testimonial_3 from '../../assets/testimonial-3.png';
import Testimonial_4 from '../../assets/testimonial-4.png';
import SmartphoneImg from '../../assets/smartphone.svg';
import AppStoreDownloadBtn from '../../components/pieces/app-store-download-btn';
import PlayStoreDownloadBtn from '../../components/pieces/play-store-download-btn';

// import Laptop from '../../components/pieces/laptop'

export default function Home(){
  return(
    <main className="home-container">
      <div className="hero-header">
        <div className="text-section">
          <h2>Your Business. Your Clients</h2>
          {/* <br/> */}
          <h2>One Free, Powerful Invoicing Platform</h2>
          {/* <br/> */}
          <p>
            Connect with our seamless invoicing platform with a unified system
            that helps you pitch your business to clients all over the world.
          </p>
          <Button color="secondary" variant="contained">Start using Invoicebiz free</Button>
          <Button color="primary" variant="text">Take a tour</Button>
        </div>
        <div className="image-section">
          {/* <LaptopImg/> */}
          {/* <div className="laptop-img-container"> */}
            <img className="laptop-img" src={LaptopImg} alt=""/>
          {/* </div> */}
          {/* <div className="tablet-img-container"> */}
            <img className="tablet-img" src={TabletImg} alt=""/>
          {/* </div>  */}
        </div>
      </div>

      <section className="get-started">
        <p>Send your first invoice today - it's free!</p>
        <input type="text" placeholder="Your email address"/>
        <input type="text" placeholder="Your first name"/>
        <button>Get Started</button>
      </section>


      {/*=========== Begining Of Testimonial Section ========== */}
      <section className="testimonials">
        <h4>FOCUS ON GROWING YOUR BUSINESS</h4>
        <p>We're here to help you get your finances out of the way - 
          invoicebiz is free <br/> simple and secure invoicing for small businesses.
        </p>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <div className="image-container">
              <img src={Testimonial_1} alt=""/>
            </div>
            <div className="content">
            Accept credit cards and many payment gateways from day one, and let clients pay right from your... read more.
            
            </div>
            <div className="writer">
            ... Cher Uka <br/> London.
            </div>
          </div>

          <div className="testimonial-card">
            <div className="image-container">
              <img src={Testimonial_2} alt=""/>
            </div>
            <div className="content">
              Consider switching to a cloud app like invoicely to manage & track all of your invoices from a Single Dashboard
            </div>
            <div className="writer">
            ... Ian Bukky <br/> Alaska.
            </div>
          </div>

          <div className="testimonial-card">
            <div className="image-container">
              <img src={Testimonial_3} alt=""/>
            </div>
            <div className="content">
              Enjoy a fully-featured suite of customizable business reports and summaries so you always know ...  read more.
            </div>
            <div className="writer">
            ... Cher Uka <br/> London.
            </div>
          </div>

          <div className="testimonial-card">
            <div className="image-container">
              <img src={Testimonial_4} alt=""/>
            </div>
            <div className="content">
              Track hourly billed tasks, expenses & trips with ease and convert them into elegant invoices or . ... read more.
            </div>
            <div className="writer">
            ... Anh Bemj <br/> Paga Desing.
            </div>
          </div>
        </div>
      </section>
      {/*-------------- End Of Testimonial Section --------------------*/}

      {/*============== Begining Of Download Section ================= */}
      <section className="download-section">
        <div className="download-grid">
          {/* <div className="download-grid-item"> */}
            <img className="smartphone-img" src={SmartphoneImg} alt=""/>
          {/* </div> */}

          <div className="download-grid-right-item">
            <h4>UNLIMITED, MOBILE INVOICING</h4>
            <p>Get Invoicely now on any IOS or Android device!</p>
            <div className="download-button-container">
              <button><AppStoreDownloadBtn/></button>
              <button><PlayStoreDownloadBtn/></button> 
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}