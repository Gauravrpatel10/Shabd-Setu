import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import BlogDetailPage from "./pages/BlogDetail_page";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    
    
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        {/* Homepage */}
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogDetailPage />} />
      </Routes>
    </Router>
   
  );
}

export default App;
