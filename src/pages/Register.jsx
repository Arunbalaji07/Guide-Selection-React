import React, { useState } from 'react';
import Navbarmenu from '../Components/Navbarmenu';
import './css/Register.css'

const Register = () => {
    const Guide = ["Dr.R.Subhashini", "Dr.S.Revathy", "Dr.P.Jeyanthi", "Dr.L.Mary Gladence","Ms.C.Geetha","Ms.D.Ramalakshmi","Ms.J.Merlin Mary Jenitha","Dr.Rajasekar","Dr.K.Sundaravel Rani","Dr.A.Sathiyaraj","Dr.Kamtchi K S","Dr.D.Adhimuga Sivasakthi","Ms. T G Ruby Angel","Ms.Sageengrana","Mr.R.Ravi Karthick"];
    const [guide, updateGuide] = useState("");
  return (
    <div>
    <Navbarmenu/>
    <div className='Form'>
    <div className='content1'>
        <h2>Registration Form</h2><br/>
        <div className='coloumn'>
        <label>Team Member-1 Name:</label><br/><input
        type='text' name='N1' id='N1' placeholder='Enter name'required/><br/><br/>
        <label>Register Number:</label><br/><input 
        type='text' name='R1' id='R1' placeholder='Enter Regno' required minLength="8" maxLength="8" /><br/><br/>
        <label>Phone Number:</label><br/><input 
        type='text' name='P1' id='P1' placeholder='Enter Phone Number' minLength='10' maxLength='10' required/><br/><br/>
        <label>Email ID:</label><br/><input 
        type='text' name='M1' id='M1' placeholder='Enter Mail Id' required/><br/><br/>
        </div>
        <div className='coloumn2'>
        <label>Team Member-2 Name:</label><br/><input
        type='text' name='N2' id='N2' placeholder='Enter name'required/><br/><br/>
        <label>Register Number:</label><br/><input 
        type='text' name='R2' id='R2' placeholder='Enter Regno' required minLength="8" maxLength="8" /><br/><br/>
        <label>Phone Number:</label><br/><input 
        type='text' name='P2' id='P2' placeholder='Enter Phone Number' minLength='10' maxLength='10' required/><br/><br/>
        <label>Email ID:</label><br/><input 
        type='text' name='M2' id='M2' placeholder='Enter Mail Id' required/><br/><br/>
        <label>Select Guide:</label>
        <select
        id="guide"
        value={guide}
        required
        >
        <option />
        {Guide.map((guide) => (
        <option key={guide} value={guide}>
        {guide}
        </option>
        ))}
        </select>

        <label>Project Title:</label><br/><input
        type='text' name='title' id='title' placeholder='Enter project title' required />
        <label>Password:</label><br/><input
        type='password' name='password' id='password' placeholder='Set your Password' required />
        </div>
        <button type='submit' value='submit' className='btn'>REGISTER</button>
    </div>
    </div>
    </div>
  );
}

export default Register;
