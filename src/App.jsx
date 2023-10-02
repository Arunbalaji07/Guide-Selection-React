import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import GuideList from "./pages/GuideList";
import Admin from "./pages/Admin";
import Staff from "./pages/Staff";
import Student from "./pages/Student";
import Createstudent from "./scences/form/Createstudent";
import Createstaff from "./scences/form/Createstaff";
import StudentInfoAdmin from "./scences/studentinfo/StudentInfoAdmin"
import StaffInfoAdmin from "./scences/staffinfoadmin/StaffInfoAdmin";
import StudentInfoStaff from "./scences/studentinfo/StudentInfoStaff";

// import Navbarmenu from "./Components/Navbarmenu";
import AdminDashboard from "./scences/dashboard/AdminDashboard";
import StaffDashboard from "./scences/dashboard/StaffDashboard";
import StudentDashboard from "./scences/dashboard/StudentDashboard";
import StudentReviewForm from "./scences/ReviewOptions/StudentReviewForm";
import PPTUpload from "./scences/ReviewOptions/PPTUpload";
import ReportUpload from "./scences/ReviewOptions/ReportUpload";

function App() {
  return (
    <div>
      <Router basename="/">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/guide-list" element={<GuideList />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/student" element={<Student />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/staff-dashboard" element={<StaffDashboard />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/create-student" element={<Createstudent />} />
          <Route path="/create-staff" element={<Createstaff />} />
          <Route path="/student-data-admin" element={<StudentInfoAdmin />} />
          <Route path="/student-data-staff" element={<StudentInfoStaff />} />
          <Route path="/staff-data-admin" element={<StaffInfoAdmin />} />
          <Route path="/student-review-form" element={<StudentReviewForm />} />
          <Route path="/student-upload-ppt" element={<PPTUpload />} />
          <Route path="/student-upload-report" element={<ReportUpload />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
