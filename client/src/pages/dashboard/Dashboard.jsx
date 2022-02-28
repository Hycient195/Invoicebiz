import './Dashboard.css';
import { useState } from 'react';
import NotifBellWithDot from '../../components/pieces/notif-bell-with-dot'
// import SettingsIcon from '../../components/pieces/settings';
import ProfilePic from '../../assets/profile-pic.png'

import NotifBell from '../../assets/notif-bell-with-dot.svg';
import SettingsIcon from '../../assets/settings.svg';
import LeftSection from './left-aside/LeftSection';
import ChartGrid from './chart-grid/ChartGrid';
import TransactionList from './transaction-list/TransactionList';
import RightAside from './right-aside/RightAside';

export default function Dashboard(){
  
  return(
    <div className="dashboard-container">
      <nav className="dashboard-navbar">
        <h2 className="dashboard-title">Invoicebiz</h2>
        <div className="right">
          <img src={NotifBell} alt=""/>
          <img src={SettingsIcon} alt=""/>
          <img src={ProfilePic} alt=""/>
        </div> 
      </nav>
      {/*---------------- End Of Navigatin Section ---------------*/}

      {/*=============== Begining Of Main Section =================*/}
      <main className="main-body">
        <LeftSection/>
        
        <div className="center-section">
          <h1 className="not-bold">Dashboard</h1>
        
          <ChartGrid/>
          <TransactionList/>
          
        </div>

        <aside className="right-section">
          <RightAside/>
        </aside>
      </main>
    </div>
  )
}