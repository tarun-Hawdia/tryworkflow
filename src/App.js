// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import DecisionTree from "./components/DecisionTree";
import DropdownPage from "./components/DropdownPage";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/decisiontree">Decision Tree</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<DropdownPage />} />
          <Route path="/decisiontree" element={<DecisionTree />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
