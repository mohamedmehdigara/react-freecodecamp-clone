import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import CourseList from './components/CourseList';
import CourseDetail from './components/CourseDetail'; // Import CourseDetail component
import Certifications from './components/Certifications';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';

const App = () => {
  return (
    <div>
      <Router>
        <Header/>
        
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/learn" element={<CourseList />} />
          <Route path="/certifications" element={<Certifications />} /> {/* Add route for Certifications component */}

          <Route path="/learn/:id" element={<CourseDetail />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;
