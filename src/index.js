import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './Home'
import About from './About'
import User from './User'
import Contact from './Contact'


const App = () => {
  return(
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/user/:id" element={<User/>}/>
        </Routes>
      </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);