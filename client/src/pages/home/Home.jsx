import './Home.css';
import LaptopImg from '../../assets/laptop.png';
import TabletImg from '../../assets/tablet.svg';
import testimonials from '../../constants/testimonials';
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard';
import SmartphoneImg from '../../assets/smartphone.svg';
import Pieces from '../../components/Pieces/index';

export default function Home(){
  return(
    <main className="home-container">

      {/*=================================*/}
      {/* Begining of Hero header section */}
      {/*=================================*/}
      <div className="hero-header">
        <div className="text-section">
          <h2>Your Business. Your Clients <br/> One Free, Powerful Invoicing Platform</h2>
 
          <p>
            Connect with our seamless invoicing platform with a unified system
            that helps you pitch your business to clients all over the world.
          </p>
          <button >Start using Invoicebiz free</button>
          <button >Take a tour</button>
        </div>
        <div className="image-section">
          <img className="laptop-img" src={LaptopImg} alt=""/>
        </div>
      </div>
      {/* End of Hero header section */}


      {/*=================================*/}
      {/* Begining of Get-started section */}
      {/*=================================*/}
      <section className="get-started">
        <p>Send your first invoice today - it's free!</p>
          <input type="text" placeholder="Email address"/>
          <input type="text" placeholder="First name"/>
          <button>Get Started</button>
      </section>
      {/* End of Get-started section */}


      {/*=================================*/}
      {/* Begining of Testimonial section */}
      {/*=================================*/}
      <section className="testimonials">
        <h4>FOCUS ON GROWING YOUR BUSINESS</h4>
        <p>We're here to help you get your finances out of the way - 
          invoicebiz is free <br/> simple and secure invoicing for small businesses.
        </p>
        <div className="testimonial-grid">
          {
            testimonials.map((testimonial, index) =>{
              return(
                <TestimonialCard
                  key={index}
                  image={testimonial.image}
                  content={testimonial.content}
                  writer={testimonial.writer}
                  location={testimonial.location}
                />
              )
            })
          }
        </div>
      </section>
      {/* End Of Testimonial Section */}



      {/*==============================*/}
      {/* Begining of Download section */}
      {/*==============================*/}
      <section className="download-section">
        <div className="download-grid">
          <img className="smartphone-img" src={SmartphoneImg} alt=""/>
          <div className="download-grid-right-item">
            <h4>UNLIMITED, MOBILE INVOICING</h4>
            <p>Get Invoicely now on any IOS or Android device!</p>
            <div className="download-button-container">
              <button><Pieces.Icons.App_store_download_btn/></button>
              <button><Pieces.Icons.Play_store_download_btn/></button> 
            </div>
          </div>
        </div>
      </section>
      {/* End of download section */}

    </main>
  )
}