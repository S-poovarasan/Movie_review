import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Feedback from "./components/Feedback";
import Review from "./components/Review";

function App() {
  return (
    <Router>
      <div>
        <h1>Movie Reviews</h1>
        <nav>
          <Link to="/feedback" className="link1">Give Feedback </Link>
          <Link to="/reviews" className="link2">     View Reviews</Link>
        </nav>
        <Routes>
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/reviews" element={<Review />} />  {}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
