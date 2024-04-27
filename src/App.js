import React, {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import CourseList from './components/CourseList';
import CourseDetail from './components/CourseDetail'; // Import CourseDetail component
import Certifications from './components/Certifications';
import UserProfile from './components/UserProfile';
import Search from './components/Search';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
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
        <Header/>
        <Search onSearch={handleSearch} />

        
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/learn" element={<CourseList />} />
          <Route path="/certifications" element={<Certifications />} /> {/* Add route for Certifications component */}
          <Route path="/profile" element={<UserProfile />} /> {/* Add route for UserProfile component */}

          <Route path="/learn/:id" element={<CourseDetail />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;
