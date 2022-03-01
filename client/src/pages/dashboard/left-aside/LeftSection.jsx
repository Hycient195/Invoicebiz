import { useState } from 'react';
import './LeftSection.css';

export default function LeftSection(){

  const [dropDown, setDropdown] = useState({
    Business : '', Document: '', Invoices: '', Privacy: '', Terms: ''
  })

  const showDropDown = (e) =>{
    console.log(e)

    if(dropDown == ''){
      setDropdown(
        {[e.target.textContent]: <ul>
          <li>{e.target.textContent} 1</li>
          <li>{e.target.textContent} 2</li>
          <li>{e.target.textContent} 3</li>
          <li>{e.target.textContent} 4</li>
        </ul> }
      )
      e.target.style.background = 'rgba(2, 37, 103, 0.33)';
    }else{
      setDropdown('')
      e.target.style.background = 'rgba(29, 76, 244, 0.15)';
    }
  }

  return(
    <aside className="left-section">
    <div className="main-menu">
      <div className="line"><button>Main Menu</button></div>
      
    </div>

    <div className="left-section-body">
      <div className="section-item">
        Dashboard
      </div>
      <div onClick={showDropDown} className="section-item">
        Business
        {
          dropDown && dropDown.Business
        }
      </div>
      <div onClick={showDropDown} className="section-item">
        Document
        {
          dropDown && dropDown.Document
        }
      </div>
      <div onClick={showDropDown} className="section-item">
        Invoices
        {
          dropDown && dropDown.Invoices
        }
      </div>
      <hr/>
      <div onClick={showDropDown} className="section-item">
        Privacy
        {
          dropDown && dropDown.Privacy
        }
      </div>
      <div onClick={showDropDown} className="section-item">
        Terms
        {
          dropDown && dropDown.Terms
        }
      </div>
      <hr/>
      <div className="section-item">
        <p>Send Feedback</p>
      </div>
      <div className="section-item">  
        <p>Get Help</p>
      </div>
    </div>

    
  </aside>
  )
}