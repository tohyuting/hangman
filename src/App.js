import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import StartPage from "./pages/StartPage";
import ThemesPage from "./pages/ThemesPage";
import MainPage from "./pages/MainPage";
import ErrorPage from "./pages/ErrorPage";

function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/themes" element={<ThemesPage />} />
          <Route path="/hangman" element={<MainPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
  );
}

export default App;
