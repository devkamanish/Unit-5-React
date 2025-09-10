
import React from 'react'
import Toggle from './components/Toggle'
import "./App.css"
import NameSaver from './components/NameSaver'
import ResizeComp from './components/ResizeComp'
import SearchBox from './components/SearchBox'
import UserList from './components/UserList'
import FormComponent from './components/FormComponent'
import Otp from "./components/Otp"
const App = () => {
    const handleOtpComplete = (otp) => {
    alert("Entered OTP: " + otp);
  };

  return (
    <div>
      <Otp length={6} onComplete={handleOtpComplete} />
    </div>
  )
} 

export default App