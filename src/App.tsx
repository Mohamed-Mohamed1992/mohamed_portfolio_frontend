import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import Achievements from './pages/Achievements';
import Hobbies from './pages/Hobbies';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Profile />} />
          <Route path="projects" element={<Projects />} />
          <Route path="achievements" element={<Achievements />} />
          <Route path="hobbies" element={<Hobbies />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;