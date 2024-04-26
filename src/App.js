import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import CourseList from './components/CourseList'; // Import CourseList component
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';

const App = () => {
  return (
    <div>
      <Router>
        <Header/>
        
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Certifications" element={<CourseList />} /> {/* Render CourseList component for /courses route */}
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;
