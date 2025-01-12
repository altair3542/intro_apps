import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeContent from "./components/HomeContent";
import Session1 from "./components/Session1";


function App() {
  const { darkMode } = useTheme();

  return (
    <Router>
      <div
        className={`min-h-screen flex flex-col justify-between ${
          darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
        } transition-all duration-300`}
      >
        <Header />
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/session/1" element={<Session1 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default function RootApp() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
