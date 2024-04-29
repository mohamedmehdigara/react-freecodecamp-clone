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
import "./App.css";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('en');

  const courses = [
    {
      id: 1,
      title: "Introduction to JavaScript",
      description: "Learn the basics of JavaScript programming language.",
      // Other properties
    },
    // Other course objects
  ];

  const handleSearch = (searchTerm) => {
    const filteredCourses = courses.filter(course =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredCourses);
  };

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  return (
    <div>
      <Router>
        <Header theme={theme} language={language} onThemeChange={handleThemeChange} onLanguageChange={handleLanguageChange} />
        <Search onSearch={handleSearch} />
        <NotificationBell />

        <Routes>
          <Route path="/" element={<Main theme={theme} language={language} />} />
          <Route path="/learn" element={<CourseList courses={searchResults.length ? searchResults : courses} />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/learn/:id" element={<CourseDetail />} />
        </Routes>

        <Footer theme={theme} language={language} onThemeChange={handleThemeChange} onLanguageChange={handleLanguageChange} />
      </Router>
    </div>
  );
};

export default App;
