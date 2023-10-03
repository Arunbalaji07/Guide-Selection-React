import React from "react";
import { ColorModeContext, useMode } from "../../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import "../../index.css";
import Topbar from "../global/Topbar";
import StudentSidebar from "../global/StudentSidebar";

const StudentDashboard = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <StudentSidebar />
          <main className="content">
            <Topbar />
            <div>
              <h2>Student Information</h2>
              <table>
              <tr>
                  <th>Project Title</th>
                  <td>Cell 1</td>
                </tr>
                <tr>
                  <th>Team Member 1</th>
                  <td>Cell 1</td>
                </tr>
                <tr>
                  <th>Register No 1</th>
                  <td>Cell 2</td>
                </tr>
                <tr>
                  <th>Guide Name</th>
                  <td>Cell 2</td>
                </tr>
                <tr>
                  <th>Email 1</th>
                  <td>Cell 2</td>
                </tr>
                <tr>
                  <th>Phone No 1</th>
                  <td>Cell 2</td>
                </tr>
                <tr>
                  <th>Team Member 2</th>
                  <td>Cell 2</td>
                </tr>
                <tr>
                  <th>Register No 2</th>
                  <td>Cell 2</td>
                </tr>
                <tr>
                  <th>Email 2</th>
                  <td>Cell 2</td>
                </tr>
              </table>
            </div>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default StudentDashboard;
