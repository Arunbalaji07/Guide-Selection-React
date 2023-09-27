import React from "react";
import './form.css';
import AdminSidebar from "../global/AdminSidebar";
import Topbar from "../global/Topbar";
import { ColorModeContext, useMode } from "../../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";


const Createstudent = () => {
    const [theme, colorMode] = useMode();
  
    return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <AdminSidebar />
            <main className="content">
            <Topbar />
            <div className="FORM">
            <h1>Create Student</h1>
            <fieldset>
                <form action="#" method="get">
                    <label for="name">Enter Name:</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter Name"
                        required
                    />
                    <br /><br />
                    <label for="regno">Enter Register Number: </label>
                    <input
                        type="text"
                        name="regno"
                        id="regno"
                        placeholder="Enter Register number"
                        required
                    />
                    <br /><br />
                    <label for="email">Email ID:</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter Email"
                        required
                    />
                    <br /><br />
                    <label for="batch">Batch:</label>
                    <input
                        type="text"
                        name="batch"
                        id="batch"
                        placeholder="Enter batch"
                        required
                    />
                    <br /><br />
                    <label for="password">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="tel"
                        placeholder="Enter password"
                        required
                    />
                    <br /><br />
                    <button type="submit" value="Submit">
                        Submit
                    </button>
                </form>
            </fieldset>
            </div>
              
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
  };
  
  export default Createstudent;