import logo from './logo.svg';
import './App.css';
import LeftNav from './'
import SignIn from './pages/signIn/SignIn';
import Home from './pages/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';
import Dashboard from './pages/dashboard/Dashboard';
import "@fontsource/poppins"; 

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sign_in" element={<SignIn/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
      <Footer/>
     </BrowserRouter>  
    </div>
  );
}

export default App;
