import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import CourseList from './components/CourseList';
import CourseDetail from './components/CourseDetail'; // Import CourseDetail component
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';

const App = () => {
  return (
    <div>
      <Router>
        <Header/>
        
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/certifications" element={<CourseList />} />
          <Route path="/certifications/:id" element={<CourseDetail />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;
