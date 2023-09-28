import React, { useState, useEffect } from "react";
import { ColorModeContext, useMode } from "../../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import'./studentinfo.css';
import Topbar from "../global/Topbar";
import StaffSidebar from "../global/StaffSidebar";

const StudentInfoStaff = () => {
  const [theme, colorMode] = useMode();
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`http://localhost:7777/api/students`)
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err))
  }, [])

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <StaffSidebar />
          <main className="content">
            <Topbar />
            <div>
      <h2>Student Information</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Registration Number</th>
            <th>Batch</th>
          </tr>
        </thead>
        <tbody>
          {(data.length > 0 ) ? data.map((data, index) => {
            return (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.regno}</td>
                <td>{data.batch}</td>
              </tr>
            )
          }): <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            </tr>}
        {/* <td>{name}</td>
              <td>{email}</td>
              <td>{regno}</td>
              <td>{batch}</td> */}
          {/* {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.regno}</td>
              <td>{student.batch}</td>
            </tr>
          ))} */}
        </tbody> 
       </table>
     </div> 
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default StudentInfoStaff;