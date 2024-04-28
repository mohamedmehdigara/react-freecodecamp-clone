import React, { useState } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import CourseList from './components/CourseList';
import CourseDetail from './components/CourseDetail';
import Certifications from './components/Certifications';
import UserProfile from './components/UserProfile';
import Search from './components/Search';
import NotificationBell from './components/NotificationBell';
import './App.css';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  
  const courses = [
    {
      id: 1,
      title: "Introduction to JavaScript",
      description: "Learn the basics of JavaScript programming language.",
      // Other properties
    },
    // Other course objects
  ];

  // Function to handle search
  const handleSearch = (searchTerm) => {
    // Filter courses based on the search term
    const filteredCourses = courses.filter(course =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Update searchResults with filtered courses
    setSearchResults(filteredCourses);
  };

  return (
    <div>
      <Router>
        <Header />
        <Search onSearch={handleSearch} />
        <NotificationBell />


        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/learn" element={<CourseList courses={searchResults.length ? searchResults : courses} />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/learn/:id" element={<CourseDetail />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
