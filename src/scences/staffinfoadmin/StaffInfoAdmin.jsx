import React, { useEffect, useState } from "react";
import { ColorModeContext, useMode } from "../../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import "../../index.css";
import Topbar from "../global/Topbar";
import AdminSidebar from "../global/AdminSidebar";

const StaffInfoAdmin = () => {
  const [theme, colorMode] = useMode();
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`http://localhost:7777/api/staffs`)
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err))
  })

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
        <tbody tbody>
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
        </tbody>
       </table>
     </div> 
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default StaffInfoAdmin;
