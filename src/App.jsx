import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import GuideList from "./pages/GuideList";
import Admin from "./pages/Admin";
import Staff from "./pages/Staff";
import Student from "./pages/Student";

import Navbarmenu from "./Components/Navbarmenu";

function App() {
  return (
    <div>
      <Router basename="/">
        {/* Add Menu Component */}
        <Navbarmenu />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/guide-list" element={<GuideList />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/student" element={<Student />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
