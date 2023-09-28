import React from "react";
import { ColorModeContext, useMode } from "../../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import'./studentinfo.css';
import Topbar from "../global/Topbar";
import AdminSidebar from "../global/AdminSidebar";

const StudentInfoAdmin = () => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <AdminSidebar />
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

export default StudentInfoAdmin;