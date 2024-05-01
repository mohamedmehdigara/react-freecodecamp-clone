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
import ThemeSelector from './components/ThemeSelector';
import LanguageSelector from './components/LanguageSelector';
import CourseRatingAndReview from './components/CourseRatingAndReview';
import ProgressTracker from './components/ProgressTracker';
import CourseContentPage from './components/CourseContentPage';
import CourseNavigation from './components/CourseNavigation';
import DiscussionForum from "./components/DiscussionForum";
import CareerCenter from './components/CareerCenter';
import { ToastContainer } from 'react-toastify';
import SupportTicketAdminPanel from './components/SupportTicketAdminPanel';
import SupportTicketDashboard from './components/SupportTicketDashboard';
import SupportTicketAnalytics from './components/SupportTicketAnalytics';
import Support from './components/Support';

import "./App.css";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('en');

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

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

  return (
    <div className={`app-container ${theme}`}>
      <Router>
        <Header onThemeChange={handleThemeChange} onLanguageChange={handleLanguageChange} />
        <Search onSearch={handleSearch} />
        <NotificationBell />

        <Routes>
          <Route path="/" element={<Main theme={theme} language={language} />} />
          <Route path="/learn" element={<CourseList courses={searchResults.length ? searchResults : courses} />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/learn/:id" element={<CourseDetail />} />
          <Route path="/rate-and-review" element={<CourseRatingAndReview />} />
          <Route path="/progress-tracker" element={<ProgressTracker />} />
          <Route path="/course-content/:id" element={<CourseContentPage />} /> {/* Route for CourseContentPage */}
          <Route path="/Forum" element={<DiscussionForum/>} />
          <Route path="/CareerCenter" element ={<CareerCenter />} />
          <Route path="/dashboard" element={<SupportTicketDashboard/>} />
          <Route path="/admin-panel" element={<SupportTicketAdminPanel/>} />
          <Route path="/analytics" element={<SupportTicketAnalytics/>} />
          <Route path="/Support" element={<Support/>} />


        </Routes>
        <ToastContainer />

        <Footer onThemeChange={handleThemeChange} onLanguageChange={handleLanguageChange} />
      </Router>
    </div>
  );
};

export default App;
