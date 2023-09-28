import React from "react";
import { ColorModeContext, useMode } from "../../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import "../../index.css";
import Topbar from "../global/Topbar";
import AdminSidebar from "../global/AdminSidebar";

const StaffInfoAdmin = () => {
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
      <h2>Staff Information</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        {/* <tbody tbody>
          {(data.length > 0 ) ? data.map((data, index) => {
            return (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.email}</td>
              </tr>
            )
          }): <tr>
            <td></td>
            <td></td>
            </tr>}
        </tbody> */}
       </table>
     </div> 
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default StaffInfoAdmin;
