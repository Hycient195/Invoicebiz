import logo from './logo.svg';
import './App.css';
import LeftNav from './'
import SignIn from './pages/signIn/SignIn';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Routes>
          <Route path="/"> */}
            <Home/>
          {/* </Route>
          <Route path="/sign-in">
            <SignIn/>
          </Route>
        </Routes>
      </Router> */}
     
      
    </div>
  );
}

export default App;
