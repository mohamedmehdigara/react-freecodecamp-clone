import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import {Routes, Route, BrowserRouter as Router} from "react-router-dom";
import './App.css';

const App = () => {
  return (
    <div>
      <Router>
        <Header/>
        
        <Routes>
          <Route path="/" element={<Main />}/>
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
};

export default App;
